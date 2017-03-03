import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

constructor() { }
    getArticleList():any{
       return [
               {id:"1",title:"标题1",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"Angular2"},
               {id:"2",title:"标题2",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"Javascript"},
               {id:"3",title:"标题3",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"Vue"},
               {id:"4",title:"标题4",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"Rx"},
               {id:"5",title:"标题5",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"angular1"},
               {id:"6",title:"标题6",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"webPack"},
               {id:"7",title:"标题7",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"Gulp"},
               {id:"8",title:"标题8",content:'假数据假数据假数据假数据假数据',time:"2017-03-03",category:"Node"}
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