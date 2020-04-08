import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import { Ijob } from '../job';
import { JobsService } from '../jobs.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  
  job: Ijob;

  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getJob();
  }
  getJob():void{
    const id = +this.route.snapshot.paramMap.get('jobId');
    console.log(id);
    this.jobsService.getJobByID(id).subscribe(jobd => this.job = jobd);
  }
  goBack(): void {
    this.location.back();
  }

}
