var mongoose = require("mongoose");
const mongoAtlasUri = `mongo url`

function mongooseConnection() {
    return new Promise((resolve, reject) => {
        try {
            // Connect to the MongoDB cluster
            mongoose.connect(
                mongoAtlasUri,
                { useNewUrlParser: true, useUnifiedTopology: true },
                () => {
                    console.log("Mongoose is connected");
                    resolve();
                }
            );
        } catch (error) {
            console.error("Could not connect to MongoDB:", error);
            reject(error);
        }

        const dbConnection = mongoose.connection;
        dbConnection.on("error", (err) => console.error(`Connection error ${err}`));
        dbConnection.once("open", () => console.log("Connected to DB!"));
    });
}

module.exports = { mongooseConnection };