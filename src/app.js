import dotenv from "dotenv";
import ExpressServer from "./server/ExpressServer";

dotenv.config();

const WebServer = new ExpressServer();
