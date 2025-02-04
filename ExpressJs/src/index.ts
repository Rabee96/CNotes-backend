import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";

const app = express();
const PORT = 4000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
