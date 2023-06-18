import mongoose from "mongoose";

//1 interface
export interface ICustomerModel extends mongoose.Document{
    name:string
    Occupation:string
    fone:string
    email:string
}

//2 schema
export const customerSchema = new mongoose.Schema<ICustomerModel>({
    name:{
        type:String,
        required:[true, "name is required"],
        minlength:[2, "name must be at least 2 tharacters"],
        maxlength:[15, "name must be only 15 tharacters"],
        trim:true,
        unique:true
    },
    Occupation:{
        type:String,
        required:[true, "Occupation is required"],
        minlength:[2, "Occupation must be at least 2 tharacters"],
        maxlength:[30, "name must be only 30 tharacters"]
    },
    fone:{
        type:String,
        required:[true, "fone is required"],
        minlength:[9, "fone must be at least 9 tharacters"],
        maxlength:[11, "name must be only 11 tharacters"]
    },
})

//3 model
 export const CustomerModel = mongoose.model<ICustomerModel>("CustomerModel", customerSchema, "customer")