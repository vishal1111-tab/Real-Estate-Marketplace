import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utilis/error.js";

export const signup = async (req , res , next) => {
    const {username , email , password} = req.body;
    const hashesPassword = bcryptjs.hashSync(password , 10);
    const newUser = new User({username , email , password :hashesPassword });
    try{
        await newUser.save();
        res.status(201).json("user added successfully");
    } catch (error){
        next(error);
    }
  
}