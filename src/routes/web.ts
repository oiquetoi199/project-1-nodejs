import express from "express";
import { Express } from "express";
import { getCreateUser, postCreateUser, getHomePage } from "../controllers/user.controlller";

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", getHomePage);
    router.get("/create-user", getCreateUser);
    router.post("/handle-create-user", postCreateUser);
    app.use("/", router);
}

export default webRoutes;

