import http from "http";
import app from "./app";
import environment from "./config/environment";
import dbConnection from "./db";

const port = environment.port;

const server = http.createServer(app);

dbConnection.once("open", () => {
  console.log("connected to database");
  server.listen(port, () => console.log(`Server is running on prot: ${port}`));
});

dbConnection.on("error", (err) => {
  console.error(`connection error: ${err}`);
});
