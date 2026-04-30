import axios from "axios";

const API = "http://YOUR_EC2_PUBLIC_IP:5000/api/customers";

// GET
export const getCustomers = () => axios.get(API);

// POST
export const createCustomer = (data) => axios.post(API, data);

// PUT
export const updateCustomer = (id, data) =>
  axios.put(`${API}/${id}`, data);

// DELETE
export const deleteCustomer = (id) =>
  axios.delete(`${API}/${id}`);