import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { ActivatedRoute, Router, Params } from '@angular/router';



@Component({
  selector: 'app-articleList',
  templateUrl: './articleList.component.html',
  styleUrls: ['./articleList.component.css']
})
export class ArticleListComponent implements OnInit {
  articleList=[];
  constructor(private articleService:ArticleService,private router:Router) {
      
   }

  ngOnInit() {
    this.articleList = this.articleService.getArticleList();
    console.log(this.articleList);
  }

  //跳转详情页
  articleDetail(id):void{
    this.router.navigateByUrl("article/articleDetail/"+id)
  }

}