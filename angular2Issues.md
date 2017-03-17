# angular2问题

## ChangeDetectionStrategy(某种策略)
```bash
import {ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'article-item',
  styleUrls: ['./article-item.scss'],
  templateUrl: './article-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
```
## ComponentRef（什么鬼）
## ViewContainerRef
## ComponentFactoryResolver
```bash
import { Injectable, ComponentRef, ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { LoadingComponent } from './loading.component';

@Injectable()
export class LoadingService {
  public defaultViewContainerRef: ViewContainerRef;
  private cmpRef: ComponentRef<LoadingComponent>;
  private loaded: boolean;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) {

  }

  show(viewContainer?: ViewContainerRef): void {
    viewContainer = viewContainer || this.defaultViewContainerRef;
    if (!this.loaded) {
      this.loaded = true;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoadingComponent);
      this.cmpRef = viewContainer.createComponent(componentFactory, viewContainer.length, this.injector);
      this.cmpRef.instance.show();
    }
  }

  hide(): void {
    this.loaded = false;
    this.cmpRef.destroy();
  }

}

```

# EventEmitter 
# OnDestroy
```bash
import {EventEmitter, OnDestroy } from '@angular/core';
import { Article } from '../../core';

@Component({
  selector: 'article-search',
  styleUrls: ['./article-search.scss'],
  templateUrl: './article-search.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleSearchComponent implements OnDestroy {
  @Input() articles: Article [];
  @Output() searchArticle = new EventEmitter();
  keyword: string;

  ngOnDestroy(): void {
    this.searchArticle.complete();
  }

  search(keyword): void {
    if (keyword) {
      this.searchArticle.emit(keyword);
    }
  }
}

```

例子
```bash
  @Component({
    selector: 'zippy',
    template: `
    <div class="zippy">
      <div (click)="toggle()">Toggle</div>
      <div [hidden]="!visible">
        <ng-content></ng-content>
      </div>
   </div>`})
  export class Zippy {
    visible: boolean = true;
    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() close: EventEmitter<any> = new EventEmitter();
 
    toggle() {
      this.visible = !this.visible;
      if (this.visible) {
        this.open.emit(null);
      } else {
        this.close.emit(null);
      }
    }
  }

  <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
```


## Router
```bash
import {  Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';

pageChanged(event:any):void {
    let urlTree:UrlTree=this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.router.navigateByUrl(s[0]+"/commenttable/page/"+event.page);
}
```
### CanActivate
```bash
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  	constructor(private router: Router,public userLoginService: UserLoginService) {

  	}
  	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
        //这里可以调用真实的服务进行验证
        // 	this.userLoginService.currentUser
            // .subscribe(
          // 	data => {
          // 	},
          // 	error => console.error(error)
          // );
    	return true;
  	}
}

```
