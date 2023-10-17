const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { mongooseConnection } = require("./helpers/mongoose-connection");
const appRoutes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", appRoutes);

app.use((req, res) => {
    res.status(404).send({
        message: 'Not found!'
    });
});

mongooseConnection()
    .then(() => {
        app.listen(6000, () => {
            console.log("Server is listening on port 6000");
        });
    })
    .catch(error => {
        console.error("Failed to connect to MongoDB:", error);
    });