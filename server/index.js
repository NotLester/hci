const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fs = require("fs");

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.send("Running ");
});

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.mongoDBURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    writeConcern: { w: "majority", j: true, wtimeout: 1000 },
  })
  .then(() => console.log("Database Successfully Connected"))
  .catch((error) => console.log(error));


//routes
app.use("/auth", require("./routes/Login"));
app.use("/auth/sign", require("./routes/Login"));
app.use("/auth/profile", require("./routes/Login"));
app.use("/auth/log", require("./routes/Login"));
app.use("/events", require("./routes/Event"));

const port = process.env.PORT || 5000;


const productRouter = require("./routes/product.js");
app.use("/add", require("./routes/product"));

app.use("/product", productRouter);
//app listen port
app.listen(5000, () => {
  console.log("server running on port 5000");
});

app.use("/auth", require("./routes/Login"));
app.use("/posts", require("./routes/Posts"));

app.listen(4000);

module.exports = app;
