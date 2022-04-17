import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  Url = environment.baseUrl;


  constructor(private http: HttpClient) {
  }

  getProductDetails(type: string):Observable<any> {
    return this.http.get(this.Url + '/product/searchbyPr/' + type, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }


  getProjectDetails(type: string):Observable<any>  {
    return this.http.get(this.Url+'/product/search/'+type, {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    });

  }

  getImageDetails(product_name: any):Observable<any>  {
    return this.http.get(this.Url+'/product/searchimg/'+product_name, {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    });
  }

  getModelDetails(product_name: any):Observable<any>  {
    return this.http.get(this.Url+'/product/searchmodel/'+product_name, {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    });
  }
}
