import { Task } from './../../../core/services/task-rest-service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { TaskRestService } from '../../../core/services/task-rest-service';

@Component({
  selector: 'app-add-task-component',
  imports: [],
  templateUrl: './add-task-component.html',
  styleUrl: './add-task-component.css',
})
export class AddTaskComponent implements OnInit
{
  private taskServ = inject(TaskRestService)

  title:string = ''
  description:string = ''

  loadedTasks = signal<Task[]>([])
  errorMsg:string = ''

  constructor(){
    this.loadTask()
  }

  ngOnInit(): void {
    // this.loadTask()
  }

  loadTask(){
    this.taskServ.getTask().subscribe(
      {
        next: tasks => {
          this.loadedTasks.set(tasks),
          this.errorMsg = ''
        },
        error: err => this.errorMsg = err.message
      })
  }
}
