import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface Task{
  id: number,
  title: string,
  description: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class TaskRestService
{
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:8080/api/tasks'

  getTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl).pipe(
      catchError(err => {
        console.error("Errore recupero tasks", err)
        return throwError(() => new Error('Errore nel recupero delle tasks'))
      })
    )
  }

  addTask(task: Omit<Task, 'id' | 'completed'>): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task).pipe(
      catchError(err => {
        console.error("Errore inserimento task", err)
        return throwError(() => new Error("Errore inserimento task"))
      })
    )
  }
}
