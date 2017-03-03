import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ArticleService } from './../articleList/article.service';



@Component({
  selector: 'app-articleDetail',
  templateUrl: './articleDetail.component.html',
  styleUrls: [
    './articleDetail.component.css',
    './../articleList/articleList.component.css'
  ]
})
export class ArticleDetailComponent implements OnInit {
  article:any = "";
  params:any
  constructor(private activatedRoute:ActivatedRoute,private articleService:ArticleService) { 

  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params=>{
        this.params = params;
        this.article = this.articleService.getArticleDetail(this.params.id)
      })
  }

}