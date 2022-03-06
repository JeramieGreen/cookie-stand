'use strict';

let hours = ['6 a.m.', '7 a.m.','8 a.m.','9 a.m.','10 a.m.','11 a.m.','12 p.m.','1 p.m.','2 p.m.','3 p.m.','4 p.m.','5 p.m.','6 p.m.', '7 p.m.'];

let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
cookiesSoldPerHour: [],

randomCustomers: function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
      
},
calcCookiesPerHour: function() {
    let randomCustomers = this.randomCustomers();
    let thisHourSold = Math.round(this.randomCustomers() * this.avg);
    console.log(thisHourSold);
    this.cookiesSoldPerHour.push();
}

}

seattle.calcCookiesPerHour();
