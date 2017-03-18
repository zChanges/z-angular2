# z-Angular2
一个简易的angular2的个人blog，主要用来学习angular2。

```
引用了一些第三方库
1.ng2-interceptors拦截器 
2.@angular/material ui库 
3.ag-grid-ng2 列表插件
```



## 运行
```
npm install
```   

>### 开发环境
```bash
npm start
# http://localhost:5001
```

> ### 线上环境 
```bash
1.npm run build 
2.npm run server
# http://localhost:5001
```

## 功能

- [ ] 登录 ----`app/login`
```
待开发……
```
- [x] 文章列表 ----`app/article/articleList`
- [x] 文章详情 ----`app/article/articleDetail`
- [ ] 编写文章 ----`app/article/articleDeit`
```
    lazyLoade 懒加载。（√）
    1.通过主router中loadChildren加载子模块。
    #号前是模块路径#后是模块名称，在子模块router路由中设置compoent;path无需指向。因为在主路由中已经设置。
    如果子模块中需要*ngFor……一些指令就要导入CommonModule.有form也需要导出FormsModule。（无需再主模块在导入）
    ? 懒加载能不设置childerModule么。
```
- [x] 标签 ----`app/tag/tag.component`
```bash
    主要涉及组件之间的通讯
    1.可以通过子组件@output绑定事件 emit向服组件传递。
    2.如果无法通过绑定来达到组件直接的通讯可定义一个本地变量来获取子组件的所有属性和方法
        <app-tag #tags></app-tag>
        <button (click)="tags.chlidFn()"></button>
    3.通过变量来传递参数有个弊端就是子组件必须完全在父组件模板中。
        可以通过@ViewChild(子组件)吧子组件注入进来，并挂上AfterViewInit生命周期钩子
    4.通过Service来实现组件的通讯，通过asObservable服务订阅，在ngOnDestroy()后在销毁的时候退订 unsubscribe();
```
- [x] 标签详情

- [x] 问题反馈 ---- `app/feedback/feedback.component`
```
    --- app/form-field
    实现动态表单
    --form-base.ts
    定义一个对象模型来描述所有表单中所需要的参数
    key           ---key
    controlType   ---输入框类型
    label         ---标题
    required      ---是否验证
    placeholder   ---描述输入提示
    在此在派生多个新类，来特定一些输入框的种类(如文本、邮件、下拉）
    formControlService传入formControl,通过*ngSwitchCase="type"生成所需表单
```

- [ ] 全局功能模块  
```
    1：加headers头
    2：判断后台success错误转入reject统一处理错误信息
    3：处理后台数据，更改格式。
```
- [ ] Rx.js功能  
```
    待完善……
```


