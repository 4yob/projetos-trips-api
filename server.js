require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const tripRoutes = require("./src/routes/tripRoutes");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", tripRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});