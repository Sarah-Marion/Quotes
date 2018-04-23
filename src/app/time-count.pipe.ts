import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;

  transform(value: number): any{
    let today:Date = new Date (); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(), today.getDate())
    var dateDifference= Math.abs(value-todayWithNoTime ) //returns value in milliseconds
    const secondsInADay=86400; //60 sec*60 min in an hr * 24 hrs

    var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds

    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >=1){
      return dateCounter;
    }else{
      return 0;
    }
    // let t-secs = new Date();
    // let today: number = t-secs.getTime()/1000;
    // var secs = today - value;
    // var hrs: number = Math.floor(secs/3600);
    // secs %= 3600;
    // var mins: number = Math.floor(secs/60);
    // secs = secs %60;
    // var t-hrs : any;
    // var t-mins: any;
    // var t-secs: any;
    // if (hrs === 0 ) {
    //   t-hrs = '';
    // } else{
    //   t-hrs = hrs + 'hrs';
    // } 
    // if (mins === 0) {
    //   t-mins = '';
    // } else {
    //   t-mins = mins + 'mins'
    // }
    // if (secs < 1){
    //   t-secs = secs.toFixed(3) + 'secs';
    // } else {
    //   t-secs = secs.toFixed(2) + 'secs';
    // }
    // return t-hrs + t-mins + t-secs;
  
  }
  }


