import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  configUrl: string;
  constructor(private http: HttpClient) {
    // this.configUrl = 'https://newsapi.org/v2/top-headlines?country=in&category='+cat+'apiKey=8ff741ab15464f6bacf8e122b41bde8f';
   }
  getArticles(cat) {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category='+cat+'&apiKey=8ff741ab15464f6bacf8e122b41bde8f');
  }
}
