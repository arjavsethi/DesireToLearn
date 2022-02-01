const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}
//middleware to handle cors
app.use((req, res, next) => {
    res.header({ "Access-Control-Allow-Origin": "*" });
    next();
});

app.use(express.json());
app.use(cookieParser());

//route imports
const post = require("./routes/postRoute");
const user = require("./routes/userRoutes");

app.use("/api/v1", post);
app.use("/api/v1", user);


app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
})
//middleware for error
app.use(errorMiddleware);

module.exports = app;
