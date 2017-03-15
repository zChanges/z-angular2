#  转换为可观察对象
```
Rx.observable.of('foo','bar');// 一个或多个值->可观察对象

Rx.observable.from([1,2,3]);// 数组-> 可观察对象

Rx.Observable.fromEvent($('#btn'),'click');//arg1 dom对象 arg2事件类型

Rx.Observable.fromPromise(fetch('/user'))//promise->可观察对象

var callback = Rx.Observable.bindCallback(fs.exists);callback('file.txt').subscribe(res=>console.log(res))//回调函数->可观察对象
```

# 创建可观察对象

### 外部产生新事件
```
var myObservable = new Rx.Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next('foo');
```

内部产生新事件
```
var myObservable = Rx.Observable.create(observer => {
  observer.next('foo');
  setTimeout(() => observer.next('bar'), 1000);
});
myObservable.subscribe(value => console.log(value));

你选择哪一个取决于场景.通常当你想封装随时间产生值的功能时，Observable是很好的选择。另一个websocket连接例子，使用Subject可以从任何地方触发事件，并且你可以连接现存的observable到Subject。
```



## 控制流
```
var input = Rx.Observable.fromEvent(document.querySelector('input'), 'keypress');
```
```
//过滤掉值小于3的
input.filter(event => event.target.value.length > 2)
  .subscribe(value => console.log(value)); // "hel"// 
```
```
//延迟200s
input.delay(200)
  .subscribe(value => console.log(value));`
```
```
//间隔200s
input.throttleTime(200)
  .subscribe(value => console.log(value)); 
```
```
// 200s之后产生新的值，防抖动
input.debounceTime(200)
  .subscribe(value => console.log(value)); 
```
```
//3次event之后停止事件流--不再触发
input.take(3)
  .subscribe(value => console.log(value)); 
```
```
//3次event之后停止事件流--不再触发
input.takeUtil(stopstream)
  .subscribe(value => console.log(value)); 
var stopStream = Rx.Observable.fromEvent(document.querySelector('button'), 'click'); 
```

```
// 通过事件直到其他可以观察到的触发一个事件
input.takeUntil(stopStream)
  .subscribe(value => console.log(value));
values 生产值
```

```
var input = Rx.Observable.fromEvent(document.querySelector('input'), 'keypress');
// 迭代传递一个新值
input.map(event => event.target.value)
  .subscribe(value => console.log(value)); 
// 通过采集一个新值
input.pluck('target', 'value')
  .subscribe(value => console.log(value));
 // 通过两个新值
input.pluck('target', 'value').pairwise()
  .subscribe(value => console.log(value)); 
//过滤连续重复
input.pluck('target', 'value').distinct()
  .subscribe(value => console.log(value)); /
//过滤重复
input.pluck('target', 'value').distinctUntilChanged()
  .subscribe(value => console.log(value)); // "he
```
# Observable：创建 、订阅 、 执行 、销毁 。

### 创建：Observable.create(function subscribe(observe){...}) 

          订阅( subscribe )。当对一个Observable调用多个subscribe函数并创建多个observe时，observe之间不会共享任何东西，因为在Observable.create内部是对observe列表调用各自的回调的 

### 订阅+执行：
```
observer.next(值);Next函数能够将数据传递给Observer，同时在执行期间，能在Observable内部调用多个Next( )函数。同时建议在Observabl内部使用try/catch语法。
```
```
var observable = Rx.Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});
```

### 销毁：Observe
```
var observable = Rx.Observable.from([10, 20, 30]);
var subscription = observable.subscribe(x => console.log(x));
subscription.unsubscribe();
```
```
：Observable
var observable = Rx.Observable.create(function subscribe(observer) { 
    var intervalID = setInterval(() => { ... }, 1000); 
    return function unsubscribe() { 
      clearInterval(intervalID); 
    }; 
});
```

#### Observer( 观察者 )
    ：什么是观察者？观察者其实是数据的消费者，把来自Observble的数据拿过来使用。同时，Observer的本质是一系列的回调函数，是来自于Observable传递数据后的回调函数。我们可以直接通过subscribe函数创建观察者
```
var subscription = observable.subscribe(
  x => console.log('Observer got a next value: ' + x),
  err => console.error('Observer got an error: ' + err),
  () => console.log('Observer got a complete notification')
);
subscription.unsubscribe();销毁observer
```

#### Subscription( 订阅 )
    ：什么是Subscription？它其实是代表着Observable的'执行'的对象，我们可以通过它的 unsubscribe 方法销毁Observable的执行。同时我们能使用 add 方法，一次销毁多个
```
var subscription = observable1.subscribe(x => console.log('first: ' + x));
var childSubscription = observable2.subscribe(x => console.log('second: ' + x));
subscription.add(childSubscription);
setTimeout(() => {
  subscription.unsubscribe();
}, 1000);
```

#### Subject（主题）
```
什么是Subject？它是在Rx中一种比较特殊的Observable( 同时它也是Observer )，它能够让值( value )同时向多个Observer传播( 广播 )。而一般的Observable都是' 单播 '形式，即：每一个订阅了同一个Observable的observer，实际上是拥有不同的、独立的Observable的执行( 原文：each subscribed Observer owns an independent execution of the Observable )，而Subject是多播的。
在subject和observable对比，subject在多播下对observable进行了优化，subject只执行了一次
var source = Observable.create((o)=>{
    console.log(`source was called`);
    o.next(1);
    o.next(2);
});
var subject = new Subject();
var multicasted = source.multicast(subject);
multicasted.subscribe((v) => console.log('observerA: ' + v));
multicasted.subscribe((v) => console.log('observerB: ' + v));
multicasted.connect();
// 1 1 2 2
var source = Rx.Observable.create((observer)=>{
    console.log(`source was called`);
    observer.next(1);observer.next(2);observer.next(3);
});
source.subscribe({next: (v) => console.log('observerA: ' + v)});
source.subscribe({next: (v) => console.log('observerB: ' + v)});
//1 2 1 2
```

# transform
## buffer 
`:缓存原始observable发射的值，直到作为参数的另一个observable发射了值。之后返回一个由这些缓存值组成的数组`
```bash
  var clicks = Observable.fromEvent(document, 'click');
  var interval = Observable.interval(1000);
  var buffered = interval.buffer(clicks);
  buffered.subscribe(x => console.log(x));

  #点击缓存值，待下次触发，吧缓存值传递过去，缓存值都是起始值的一个数组
  #[0,1,2]
  #[3,4,5,6]
  #[7,8,9,10,11,12,13,14,15,16]
```
## bufferCount --根据数据量分组
`:将数据缓存起来，如何根据参数n对数据进行分组，每n为一组合并发射出去`
```bash
  #每点击2次，发射一次由之前点击事件组成的数组
  var clicks = Rx.Observable.fromEvent(document, 'click');
  var buffered = clicks.bufferCount(2);
  buffered.subscribe(x => console.log(x));
  #[MouseEvent,MouseEvent]
  #[MouseEvent,MouseEvent]
```
`第二个参数`
```bash
  #第一次连续点击两次会输出第一次和第二次的值， 第二次就是点击的第三次就会发射值，第二次发射的第一个值是第一次点击值得最后一个值。
  var clicks = Observable.fromEvent(document, 'click');
  var buffered = clicks.bufferCount(2,1);
  buffered.subscribe(x => console.log(x));
  #第一次值  [1,2] 点击两次后得到的
  #第二次值 [2,3]  第二次点击只需点击一次就能获取到职。
  ##第二个参数也就是下次点击几次才能发射
```
## bufferTime -- 根据时间分组
```
arg1: **必须**、bufferTimeSpan设置发射值的时间间隔
arg2: 可选、设置打开缓存区和发射值的时间间隔
arg3: 可选、设置缓存区长度
scheduler: 可选
```
#### arg1 只有一个参数
```bash
#每间隔一秒发射一次，数据包含在该时间段的值
var clicks = Rx.Observable.fromEvent(document, 'click');
var buffered = clicks.bufferTime(1000);
buffered.subscribe(x => console.log(x));
```
## bufferToggle --根据自定义开始与结束分组
`bufferToggle(openings: SubscribableOrPromise<O>, closingSelector: function(value: O): SubscribableOrPromise): Observable<T[]>`

`以数组形式收集过去的值。 在opening发射值时开始收集，并调用closingSelector函数获取一个Observable，以告知何时关闭缓存区。`
```bash
  var clicks = Rx.Observable.fromEvent(document, 'click');
  var openings = Rx.Observable.interval(1000);
  var buffered = clicks.bufferToggle(openings, i =>
    i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
  );
  buffered.subscribe(x => console.log(x));
  #openings 为开始
  #closingSelector 为结束关闭 
```
## bufferWhen --根据自定义关闭函数进行分组
`每当关闭函数发射值时，为当前数据进行一次分组，并把这次分组后的数据组返回。`
```bash
  #每隔1~5秒发射一次最新的click事件数组
  var clicks = Observable.fromEvent(document, 'click');
  var buffered = clicks.bufferWhen(() =>
    Observable.interval(1000)
  );
  buffered.subscribe(x => console.log(x));
```


