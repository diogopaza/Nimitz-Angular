import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Status } from '../status';
import { StatusService } from '../status.service';


@Component({
  selector: 'app-data-view-status',
  templateUrl: './data-view-status.component.html',
  styleUrls: ['./data-view-status.component.scss']
})
export class DataViewStatusComponent implements OnInit {

  constructor(private statusService: StatusService,
    private router: Router) { }

  status: Status[] = [];
  dataAtualizacao: string = "asdf";

  openTableStatus(status: Status){
    //this.router.navigateByUrl('/tableStatus',{state: status});
    this.router.navigate(['/tableStatus/',status.nomeEstado]);
  }

  getStatus(){
    return this.dataAtualizacao;
  }

  ngOnInit(): void {
    this.statusService.getStatus().subscribe(items => {
    this.status = items;
    this.dataAtualizacao = items[0].dataVerificacao;
    });
  }

}
