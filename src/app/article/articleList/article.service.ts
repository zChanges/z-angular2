import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

constructor() { }
    getArticleList():any{
       return [
               {id:"1",title:"标题1",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"Angular2",img:'../../../common/img/1.jpg'},
               {id:"2",title:"标题2",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"Javascript",img:'../../../common/img/2.png'},
               {id:"3",title:"标题3",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"Vue",img:'../../../common/img/3.jpg'},
               {id:"4",title:"标题4",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"Rx",img:'../../../common/img/4.jpg'},
               {id:"5",title:"标题5",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"angular1",img:'../../../common/img/5.jpg'}
           ]
    }

    getArticleDetail(id:number):any{
        return {
            title:"标题1",
            content:'假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据'+
            '假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假'+
            '假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据'+
            '假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假'+
            '假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据'+
            '假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假'+
            '假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据'+
            '假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假'+
            '假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据'+
            '假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假'+
            '数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数据假数',
            time:"2017-03-03",
            category:"Node"
        }
    }

}