import express from 'express'
import { addProject, addTimeline, addYoutube, contact, deleteProject, deleteTimeline, deleteYoutube, getUser, login, logout, myProfile, updateUser } from '../controller/User.js'
import {isAuthenticated} from '../middlewares/auth.js'
export const userRouter=express.Router()

userRouter.post('/login',login)

userRouter.get("/logout",logout)
userRouter.get("/user",getUser)

userRouter.get("/me",isAuthenticated,myProfile)

userRouter.put("/admin/update",isAuthenticated,updateUser)

userRouter.post("/admin/timeline/add",isAuthenticated,addTimeline)
userRouter.post("/admin/youtube/add",isAuthenticated,addYoutube)
userRouter.post("/admin/project/add",isAuthenticated,addProject)

userRouter.delete("/admin/timeline/:id",isAuthenticated, deleteTimeline)
userRouter.delete("/admin/youtube/:id",isAuthenticated, deleteYoutube)
userRouter.delete("/admin/project/:id",isAuthenticated, deleteProject)

userRouter.post("/contact",contact)
