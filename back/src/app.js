import { router } from "./routes/index.js"; 
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const express = require("express");
 
const app = express();
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/api", router);

export { app };
