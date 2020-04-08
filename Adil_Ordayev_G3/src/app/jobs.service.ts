import { Injectable } from '@angular/core';
import { Observable, of, from } from "rxjs";
import { Ijob, Jobs} from './job'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  getJobs():Observable<Ijob[]>{
    return of(Jobs)
  }

  getJobByID(id:number): Observable<Ijob>{
    return of(Jobs.find(j => j.id === id))
  }

  constructor() { }
}
