import mongoose from "mongoose";
import { CustomerModel } from "./customer-model";



//1 interface
export interface ITasksModel extends mongoose.Document{    
    name: string
    description: string
    date: string
    customerId: mongoose.Schema.Types.ObjectId
    Done: boolean
}

//2 schema
export const tasksSchema = new mongoose.Schema<ITasksModel>({
    name:{
        type: String,
        required: [true, "name is required"],
        minlength:[2, "name must be at least 2 tharacters"],
        maxlength:[30, "name must be only 30 tharacters"]
    }, 
    description:{
        type: String,
        required: [true, "description is required"],
        minlength:[7, "name must be at least 7 tharacters"],
        maxlength:[50, "name must be only 50 tharacters"]
    },     
    date:{
        type: String,
        required: [true, "date is required"],
    }, 

    customerId:{
        type:mongoose.Schema.Types.ObjectId,     
    },
    Done:{
        type:Boolean,
        required: [true, "Done is required"],   
    }
},

{
    versionKey:false,
    toJSON:{virtuals:true},
    id:false
})

tasksSchema.virtual("customer", {
    ref: CustomerModel,
    localField:"customerId",
    foreignField: "_id",
    justOne: true

})

//3 model
 export const TasksModel = mongoose.model<ITasksModel>("TasksModel", tasksSchema, "tasks")