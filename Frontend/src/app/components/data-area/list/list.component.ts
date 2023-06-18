import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customers-model';
import { TasksModel } from 'src/app/models/tasks-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  public tasks:TasksModel[]
  public customer:CustomerModel[]
  public customerId:string
  public constructor (private tasksService: DataService){}
  async ngOnInit(): Promise<void> {
    try {
      this.tasks = await this.tasksService.getAllTasks()
     
           
    } 
    catch (err) {
      console.log(err)
      
    }    
  }

  public async deleteTask(_id:string): Promise<void>{
    try {
      if (!window.confirm("delete???")) return
      await this.tasksService.deleteTask(_id)
     
      this.tasks = this.tasks.filter (b=>b._id !== _id)
      
    } 
    catch (error) {
    
    }
  }



}
