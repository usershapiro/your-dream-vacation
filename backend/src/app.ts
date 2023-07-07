import express from "express";
import cors from "cors"
import sanitize from "./3-middleware/sanityze";
import vacationsController from "./6-controllers/vacations-controller";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./2-utils/appConfig";
import usersController from "./6-controllers/users-controller";
import authController from "./6-controllers/auth-controller";
import fileUpload from "express-fileupload";
import followersController from "./6-controllers/followers-controller";

console.log("good luck!")

const server = express();


server.use(cors())

server.use(express.json())

server.use(sanitize)
server.use(fileUpload())

server.use("/api", vacationsController);
server.use("/api",usersController);
server.use("/api",authController);
server.use("/api",followersController)
server.use("*", routeNotFound);

server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`));