import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    const headers = new HttpHeaders({"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    "x-rapidapi-key": "9f808edf2cmshcec7640b4639d8ep1eb4abjsn6643d6171c6f"})
         return   this.http.get("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=India",{headers})
  
  }

  getNews() {
    const URL = "http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=60323ccb90ca443a8416c1e89cb74ab4";
    return this.http.get(URL)
  }
}
