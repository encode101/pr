import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { DataService } from '../services/data-service.service';
import { IonicSwipeAllModule } from 'ionic-swipe-all';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [ArticlesService]
})


export class Tab1Page {
  articlesList: any;
  catstatus = 0;
  categories = ['general', 'technology', 'business', 'health', 'sports'];
  currentTopis = ""
  constructor(private articles: ArticlesService, private data: DataService, private swipe: IonicSwipeAllModule) {
    this.articles.getArticles(this.categories[0]).subscribe((data) => {
      console.log(data);
      const list = data;
      this.articlesList = list.articles;
    });
  }

  swipeEvent = (event) => {
    if(event.direction === 4){
      this.catstatus = this.catstatus-1;
    }else{
      this.catstatus = this.catstatus+1;
    }

    if(this.catstatus == -1){
      this.catstatus = 0;
      return;
    }else if(this.catstatus === this.categories.length){
      this.catstatus = this.categories.length;
      return;
    }

    this.articles.getArticles(this.categories[this.catstatus]).subscribe((data) => {
      console.log(data);
      const list = data;
      this.articlesList = list.articles;
    });

    this.currentTopis = categories[this.catstatus];
  


  }

  shootData = (article) => {
    this.data.changeMessage(article);
  }

  closeWelcomeCard() {
    document.getElementById('welcomeCard').style.display = 'none';
  }

}
