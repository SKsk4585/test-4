import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customers-model';
import { TasksModel } from 'src/app/models/tasks-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  public customer: CustomerModel[]
  public newTask = new TasksModel()

  public constructor(private taskService: DataService, private router:Router){}
  async ngOnInit(): Promise<void> {
    try {
      this.customer = await this.taskService.getAllCustomers()      
      
    } 
    catch (err) {
      console.log (err)      
    }    
  }

  public async send(): Promise<void>{
    try {
      await this.taskService.addTask(this.newTask)
      alert ("The task was successfully added")
      this.router.navigateByUrl("/list")
            
    } catch (err) {
      console.log (err)
    }
  }
}




