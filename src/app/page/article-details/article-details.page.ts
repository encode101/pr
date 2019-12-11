import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {
  message: any;
  constructor(private data: DataService, private router: Router) { }
  goBack = () => {
    this.router.navigateByUrl('');
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
}
