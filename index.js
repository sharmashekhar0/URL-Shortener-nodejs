const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDb } = require("./connnect");

const app = express();

const hostName = "localhost";
const port = "8001";

connectToMongoDb("mongodb://127.0.0.1:27017/short-url").then(() =>
	console.log("MongoDb Connected")
);

app.use(express.json());

app.use("/", urlRoute);

app.listen(port, () => {
	console.log(`Server running at http://${hostName}:${port}`);
});
