//imports
const app = require("./app");

const connectDatabase = require("./config/database");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Use this after the variable declaration
//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}


//conecting to database
connectDatabase();

//backend server listening on 4000 Port
app.listen(process.env.PORT, () => {
  console.log(`server is running on https://localhost:${process.env.PORT}`);
});
