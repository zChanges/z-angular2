import { trigger, state, style, transition, animate,keyframes, group } from '@angular/core';
export const flyIn = trigger('flyIn',[
    // state('*',style({
    //     backgroundColor: '#eee',
    //     transform: 'scale(1)'
    // })),
    // state('void',   style({
    //     backgroundColor: 'red',
    //     transform: 'scale(1.5)'
    // })),
    // // transition(':enter', animate('100ms ease-in')),
    // transition(':leave', animate('100ms ease-out'))


    // state('in', style({transform: 'translateX(0)'})),
    // transition('void => *', [
    //   style({transform: 'translateX(-100%)'}),
    //   animate(200)
    // ]),
    // transition('* => void', [
    //   animate(100, style({transform: 'translateX(100%)'}))
    // ])

  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
       animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(25px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
  ]),
  transition('* => void', [
        animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-25px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
  ])


])


/**
 * 动态|转场   inactive <=> active
 *     状态和状态之间的转场效果 通过[@flyIn]="active"改变active|inactive来转场;
 * 
 * 进场|离场  void <=> *  无需定义state
 */


