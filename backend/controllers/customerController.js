const db = require("../config/db");

// CREATE
exports.createCustomer = (req, res) => {
  const { name, phone } = req.body;
  db.query("INSERT INTO customers (name, phone) VALUES (?, ?)",
    [name, phone],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
};

// READ
exports.getCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};

// UPDATE (PUT)
exports.updateCustomer = (req, res) => {
  const { id } = req.params;
  const { name, phone } = req.body;

  db.query("UPDATE customers SET name=?, phone=? WHERE id=?",
    [name, phone, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
};

// DELETE
exports.deleteCustomer = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM customers WHERE id=?", [id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
};