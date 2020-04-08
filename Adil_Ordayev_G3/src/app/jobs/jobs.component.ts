import { Component, OnInit } from '@angular/core';
import { Ijob } from '../job';
import { JobsService } from '../jobs.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Ijob[];

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs():void{
    this.jobsService.getJobs().subscribe(jobsd => this.jobs = jobsd);
  }

}
