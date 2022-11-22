import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from '../status';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.component.html',
  styleUrls: ['./table-status.component.scss']
})
export class TableStatusComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute,
    private statusService: StatusService) { }
    nomeEstado: any;
  status: Status | undefined | any;
  ngOnInit(): void {
    // this.activedRoute.snapshot.paramMap.get(params =>{
    //   this.status = params.get('status');
    // })
    this.nomeEstado = this.activedRoute.snapshot.params['nomeEstado'];
    this.statusService.getOneStatus(this.nomeEstado).subscribe(res => {
      this.status = res;
      console.log(this.status);
    })
  }
}
