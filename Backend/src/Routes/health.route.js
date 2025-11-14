import { Router } from "express";
import { healthCheck } from "../Controllers/health.controller.js";

const healthRoute = Router();

healthRoute.get('/', healthCheck);

export default healthRoute;
