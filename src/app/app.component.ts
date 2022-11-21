import { Component, OnInit } from '@angular/core';
import { Status } from './status';
import { StatusService } from './status.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-nimitz';
  status: Status[] = [];
  dataAtualizacao : string = "asdf";
  constructor(private statusService: StatusService) { }

  getStatus(){
    return this.dataAtualizacao
  }

  ngOnInit(): void {
    this.statusService.getStatus().subscribe(items => {
      this.status = items;
      this.dataAtualizacao = items[0].dataVerificacao;

    });
  }
}
