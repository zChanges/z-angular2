import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { flyIn } from './../../../common/fly-in';




@Component({
  selector: 'app-articleList',
  templateUrl: './articleList.component.html',
  styleUrls: ['./articleList.component.css'],
  animations:[
    flyIn
  ]
})
export class ArticleListComponent implements OnInit {
  articleList=[];
  page:number=1;
  total:number=10;
  

  constructor(private articleService:ArticleService,private router:Router) {
      
   }
  
  ngOnInit() {
    this.articleList = this.articleService.getArticleList();
    console.log(this.articleList);
  }

  //跳转详情页
  articleDetail(id):void{
    this.router.navigateByUrl("article/articleDetail/" + id);
  }


  /**
   * 下一页
   */
  nextFn=(page:number)=>{
    this.page++;
  }

  /**
   * 上一页
   */
  prevFn=(page)=>{
    this.page--;
  }

  /**
   * 选中页码
   */
  checkedPage=(page)=>{
    console.log(page);
    this.page=page;
    
  }
  

  




}