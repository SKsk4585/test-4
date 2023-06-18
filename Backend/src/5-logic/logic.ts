import { CustomerModel, ICustomerModel } from "../4-models/customer-model"
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models"
import { ITasksModel, TasksModel } from "../4-models/tasks-model"


function getAllTaske(): Promise<ITasksModel[]> {
    return TasksModel.find().populate("customer").exec()
}

function getAllCustomers(): Promise<ICustomerModel[]> {
    return CustomerModel.find().exec()
}
function addNewTask(newTask: ITasksModel): Promise<ITasksModel> {
    //Validation:
    const err = newTask.validateSync()
    if(err) throw new ValidationErrorModel(err.message)

    return newTask.save()
}

async function deleteTask(_id: string): Promise<void> {
    const deleteTask = await TasksModel.findByIdAndDelete(_id)
    if(!deleteTask) throw new ResourceNotFoundErrorModel(_id)
}

export default {
    getAllTaske,
    getAllCustomers,
    addNewTask,
    deleteTask

};