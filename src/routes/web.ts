import express from "express";
import { Express } from "express";
import { home, getCreateUser, postCreateUser } from "../controllers/user.controlller";

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", home);
    router.get("/create-user", getCreateUser);
    router.post("/handle-create-user", postCreateUser);
    app.use("/", router);
}

export default webRoutes;

