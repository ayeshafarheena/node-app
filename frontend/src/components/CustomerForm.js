import React, { useState, useEffect } from "react";

const CustomerForm = ({ onSubmit, selectedCustomer }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (selectedCustomer) {
      setName(selectedCustomer.name);
      setPhone(selectedCustomer.phone);
    }
  }, [selectedCustomer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone });
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedCustomer ? "Update" : "Add"} Customer</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <button type="submit">
        {selectedCustomer ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default CustomerForm;