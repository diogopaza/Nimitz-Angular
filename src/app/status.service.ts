import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Status } from "./status";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StatusService {
  constructor(private httpClient: HttpClient) { }
  status: Status[] = [];

  getStatus(): Observable<Status[]> {
    return  this.httpClient.get<Status[]>('http://localhost:8080/status');
  }

  getOneStatus(nomeEstado: any): Observable<Status> {
    return  this.httpClient.get<Status>(`http://localhost:8080/status/${nomeEstado}`);
  }


}
