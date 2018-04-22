import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;

  transform(value: number): any{
    let t-secs = new Date();
    let today: number = t-secs.getTime()/1000;
    var secs = today - value;
    var hrs: number = Math.floor(secs/3600);
    secs %= 3600;
    var mins: number = Math.floor(secs/60);
    secs = secs %60;
    var t-hrs : any;
    var t-mins: any;
    var t-secs: any;
    if (hrs === 0 ) {
      t-hrs = '';
    } else{
      t-hrs = hrs + 'hrs';
    } 
    if (mins === 0) {
      t-mins = '';
    } else {
      t-mins = mins + 'mins'
    }
    if (secs < 1){
      t-secs = secs.toFixed(3) + 'secs';
    } else {
      t-secs = secs.toFixed(2) + 'secs';
    }
    return t-hrs + t-mins + t-secs;
  }


  }

}
