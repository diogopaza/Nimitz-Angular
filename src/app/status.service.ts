import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Status } from "./status";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StatusService {
  constructor(private httClient: HttpClient) { }
  getStatus(): Observable<Status[]> {
    return this.httClient.get<Status[]>('http://localhost:8080/status');
  }
}
