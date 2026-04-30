const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const customerRoutes = require("./routes/customerRoutes");
app.use("/api/customers", customerRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});