import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksModel } from '../models/tasks-model';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from 'rxjs';
import { CustomerModel } from '../models/customers-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public constructor(private http: HttpClient) { }

    public async getAllTasks(): Promise<TasksModel[]> {
        const ovsarvabel = this.http.get<TasksModel[]>(appConfig.tasksUrl)
        const tasks = await firstValueFrom(ovsarvabel)
        return (tasks)        
    }

    public async getAllCustomers(): Promise<CustomerModel[]> {
        const ovsarvabel = this.http.get<CustomerModel[]>(appConfig.customerUrl)
        const customers = await firstValueFrom(ovsarvabel)
        return (customers)        
    }

    public async addTask(newtask: TasksModel): Promise<TasksModel> {
        const ovsarvabel = this.http.post<TasksModel>(appConfig.tasksUrl, newtask)
        const addedTask = await firstValueFrom(ovsarvabel)
        return (addedTask)        
    }

    public async deleteTask(_id: string): Promise<void> {
        const ovsarvabel = this.http.delete<void>(appConfig.tasksUrl + _id)
        await firstValueFrom(ovsarvabel)
    }
}
