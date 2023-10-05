const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const { connectToMongoDb } = require("./connnect");

const app = express();

const hostName = "localhost";
const port = "8001";
connectToMongoDb("mongodb://127.0.0.1:27017/short-url").then(() =>
	console.log("MongoDb Connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", urlRoute);
app.use("/route/test/testing", staticRoute);

app.listen(port, () => {
	console.log(`Server running at http://${hostName}:${port}`);
});
