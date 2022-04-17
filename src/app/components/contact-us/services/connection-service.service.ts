import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {
  Url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  sendMessage(messageContent: any) {
    return this.http.post(this.Url+'/mail',
      JSON.stringify(messageContent),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
}
