import express, { NextFunction, Request, Response, Router, request } from "express"
import logic from "../5-logic/logic"
import { TasksModel } from "../4-models/tasks-model"



const router = express.Router()

//get all tasks

router.get("/tasks", async (request:Request, respons:Response, next:NextFunction) =>{
    try {
        const tasks = await logic.getAllTaske()
        respons.json(tasks)
        
    } 
    catch (err) {
        next(err)        
    }
})

//get-all-customer
router.get("/castomers", async (request:Request, respons:Response, next:NextFunction) =>{
    try {
        const customers = await logic.getAllCustomers()
        respons.json(customers)
        
    } 
    catch (err) {
        next(err)        
    }
})

///add task
router.post("/tasks", async (request:Request, respons:Response, next:NextFunction) =>{
    try {
        const nweTask = new TasksModel(request.body)
        const addedTask = await logic.addNewTask(nweTask)
        respons.json(addedTask)
        
    } 
    catch (err) {
        next(err)        
    }
})

//delete task
router.delete("/tasks/:_id", async (request: Request, respons: Response, next: NextFunction) =>{
    try {
        const _id = request.params._id
        await logic.deleteTask(_id)
        respons.sendStatus(204)        
    } 
    catch (err) {
        next (err)
        
    }
})

export default router