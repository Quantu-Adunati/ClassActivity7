import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getUsers()
  {
    return this.http.get('http://localhost:4641/api/test/getSomeData');
  }
  getUsersDetailed()
  {
    return this.http.get('http://localhost:4641/api/test/getMoreData');
  }
  insertUserDetails( n:string, f:string, g:string, w:string)
  {
    return this.http.get('http://localhost:4641/api/test/api/test/insertData?name='+n+'&surname='+f+'&gender='+g+'&work='+w);
  }
  updateUserDetails( n:string, f:string, g:string)
  {
    console.log("here");
    return this.http.get('http://localhost:4641/api/test/updateData?nameFirst='+n+'&name='+f+'&surname='+g);
  }
  firstClick()
  {
    return console.log('clicked');
  }
}
