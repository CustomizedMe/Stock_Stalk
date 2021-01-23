const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

//Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

//Define Ports
const PORT = process.env.PORT || 8888;
app.get("/", (req, res) => res.send("API Running"));

//Routes
const getauth = require("./routes/api/auth");
app.use("/api/auth", getauth);
const getdata = require("./routes/api/data");
app.use("/api/data", getdata);
const getuser = require("./routes/api/user");
app.use("/api/user", getuser);

app.listen (PORT, () => console.log (`Server started on port ${PORT}`));
