import React, { useEffect, useState } from "react";
import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../api/customerApi";

import CustomerForm from "../components/CustomerForm";

const Home = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const fetchCustomers = async () => {
    const res = await getCustomers();
    setCustomers(res.data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleCreateOrUpdate = async (data) => {
    if (selectedCustomer) {
      await updateCustomer(selectedCustomer.id, data);
      setSelectedCustomer(null);
    } else {
      await createCustomer(data);
    }
    fetchCustomers();
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    fetchCustomers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Salon Management</h1>

      <CustomerForm
        onSubmit={handleCreateOrUpdate}
        selectedCustomer={selectedCustomer}
      />

      <h3>Customer List</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>
                <button onClick={() => setSelectedCustomer(c)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(c.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;