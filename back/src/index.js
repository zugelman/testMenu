import { app } from "./app.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const http = require("http");
const port = 3001;
const server = http.createServer(app);

server.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);