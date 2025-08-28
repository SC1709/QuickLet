const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./config/db");
const userRoutes = require("./routes/UserRoutes");
const ProductRoutes = require("./routes/ProductRoutes");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

// mongoDB connection
dbConnect();
const PORT = process.env.PORT || 3000;

app.use("/api/users", userRoutes);
app.use("/api/products", ProductRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
