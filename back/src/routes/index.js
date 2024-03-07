import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { Router } = require("express");
import { tree } from "./tree.js";

const router = Router();
const routeConfigs = [ tree ];

routeConfigs.forEach((config) => config.public && config.public(router));

export { router };
