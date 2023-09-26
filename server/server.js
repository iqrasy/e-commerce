const express = require("express");
const morgan = require("morgan");
const {
  getMakeup,
  getItem,
  getFragrance, 
  getTools, 
  getSkincare, 
  getBath, 
  getMen
} = require("./handlers");

const app = express();
const server = require("http").createServer(app);

const PORT = 4000;

app
  .use(express.json())
  .use(morgan("dev"))

  .get("/makeup", getMakeup)
  .get("/fragrance", getFragrance)
  .get("/tools", getTools)
  .get("/skincare", getSkincare)
  .get("/bath", getBath)
  .get("/men", getMen)
  // .get("/item/:id", getItem)
 

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  });

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
