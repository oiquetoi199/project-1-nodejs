import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    console.log(users);
    return res.render("home", { users: users });
}

const getCreateUser = (req: Request, res: Response) => {
    return res.render("create-user");
}

const postCreateUser = (req: Request, res: Response) => {
    const { name, email, address } = req.body;
    handleCreateUser(name, email, address);

    return res.redirect("/");
}


export { getHomePage, getCreateUser, postCreateUser };