'use strict';

let hours = ['6 a.m.', '7 a.m.','8 a.m.','9 a.m.','10 a.m.','11 a.m.','12 p.m.','1 p.m.','2 p.m.','3 p.m.','4 p.m.','5 p.m.','6 p.m.', '7 p.m.'];

// let seattle = {
//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     cookiesSoldPerHour: [],
//     customersPerHour: [],
//     totalCookies: 0,

//     randomCustomers: function() {
//         for(let i=0; i<hours.length; i++){
//             this.customersPerHour.push( Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }
//     },

//     calcCookiesPerHour: function() {
//         this.randomCustomers();
//         for(let i=0; i<hours.length; i++){
//             let hourlyCookies = Math.floor(this.avg * this.customersPerHour[i]);
//             this.cookiesSoldPerHour.push(hourlyCookies);
//             this.totalCookies += hourlyCookies;
//         }
//     },

//     render: function() {
//         this.calcCookiesPerHour();
//         let ulElement = document.getElementById('seattle');
//         console.log(ulElement);
//         for(let i=0; i<hours.length; i++){
//             let liItem = document.createElement('li');
//             liItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
//             ulElement.appendChild(liItem);
//         }

//         let liItem = document.createElement('li');
//         liItem.textContent = `Total: ${this.totalCookies} cookies.`
//         ulElement.appendChild(liItem);
//     }

// }


// let dubai = {
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     cookiesSoldPerHour: [],
//     customersPerHour: [],
//     totalCookies: 0,

//     randomCustomers: function() {
//         for(let i=0; i<hours.length; i++){
//             this.customersPerHour.push( Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }
//     },

//     calcCookiesPerHour: function() {
//         this.randomCustomers();
//         for(let i=0; i<hours.length; i++){
//             let hourlyCookies = Math.floor(this.avg * this.customersPerHour[i]);
//             this.cookiesSoldPerHour.push(hourlyCookies);
//             this.totalCookies += hourlyCookies;
//         }
//     },

//     render: function() {
//         this.calcCookiesPerHour();
//         let ulElement = document.getElementById('dubai');
//         console.log(ulElement);
//         for(let i=0; i<hours.length; i++){
//             let liItem = document.createElement('li');
//             liItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
//             ulElement.appendChild(liItem);
//         }

//         let liItem = document.createElement('li');
//         liItem.textContent = `Total: ${this.totalCookies} cookies.`
//         ulElement.appendChild(liItem);
//     }

// }



// let lima = {
//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     cookiesSoldPerHour: [],
//     customersPerHour: [],
//     totalCookies: 0,

//     randomCustomers: function() {
//         for(let i=0; i<hours.length; i++){
//             this.customersPerHour.push( Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }
//     },

//     calcCookiesPerHour: function() {
//         this.randomCustomers();
//         for(let i=0; i<hours.length; i++){
//             let hourlyCookies = Math.floor(this.avg * this.customersPerHour[i]);
//             this.cookiesSoldPerHour.push(hourlyCookies);
//             this.totalCookies += hourlyCookies;
//         }
//     },

//     render: function() {
//         this.calcCookiesPerHour();
//         let ulElement = document.getElementById('lima');
//         console.log(ulElement);
//         for(let i=0; i<hours.length; i++){
//             let liItem = document.createElement('li');
//             liItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
//             ulElement.appendChild(liItem);
//         }

//         let liItem = document.createElement('li');
//         liItem.textContent = `Total: ${this.totalCookies} cookies.`
//         ulElement.appendChild(liItem);
//     }

// }


// let paris = {
//     name: 'Paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     cookiesSoldPerHour: [],
//     customersPerHour: [],
//     totalCookies: 0,

//     randomCustomers: function() {
//         for(let i=0; i<hours.length; i++){
//             this.customersPerHour.push( Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }
//     },

//     calcCookiesPerHour: function() {
//         this.randomCustomers();
//         for(let i=0; i<hours.length; i++){
//             let hourlyCookies = Math.floor(this.avg * this.customersPerHour[i]);
//             this.cookiesSoldPerHour.push(hourlyCookies);
//             this.totalCookies += hourlyCookies;
//         }
//     },

//     render: function() {
//         this.calcCookiesPerHour();
//         let ulElement = document.getElementById('paris');
//         console.log(ulElement);
//         for(let i=0; i<hours.length; i++){
//             let liItem = document.createElement('li');
//             liItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
//             ulElement.appendChild(liItem);
//         }

//         let liItem = document.createElement('li');
//         liItem.textContent = `Total: ${this.totalCookies} cookies.`
//         ulElement.appendChild(liItem);
//     }


// }


// let tokyo = {
//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     cookiesSoldPerHour: [],
//     customersPerHour: [],
//     totalCookies: 0,

//     randomCustomers: function() {
//         for(let i=0; i<hours.length; i++){
//             this.customersPerHour.push( Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }
//     },

//     calcCookiesPerHour: function() {
//         this.randomCustomers();
//         for(let i=0; i<hours.length; i++){
//             let hourlyCookies = Math.floor(this.avg * this.customersPerHour[i]);
//             this.cookiesSoldPerHour.push(hourlyCookies);
//             this.totalCookies += hourlyCookies;
//         }
//     },

//     render: function() {
//         this.calcCookiesPerHour();
//         let ulElement = document.getElementById('tokyo');
//         console.log(ulElement);
//         for(let i=0; i<hours.length; i++){
//             let liItem = document.createElement('li');
//             liItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
//             ulElement.appendChild(liItem);
//         }

//         let liItem = document.createElement('li');
//         liItem.textContent = `Total: ${this.totalCookies} cookies.`
//         ulElement.appendChild(liItem);
//     }

// }



let storeArray = [];

function Store(min, max, avg, name){
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.name = name;
    this.cookiesSoldPerHour = [];
    this.customersPerHour = [];
    this.totalCookies = 0;
    storeArray.push(this);
}

Store.prototype.randomCustomers = function() {
    for(let i=0; i<hours.length; i++){
        this.customersPerHour.push( Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
};

Store.prototype.calcCookiesPerHour = function() {
    this.randomCustomers();
    for(let i=0; i<hours.length; i++){
        let hourlyCookies = Math.floor(this.avg * this.customersPerHour[i]);
        this.cookiesSoldPerHour.push(hourlyCookies);
        this.totalCookies += hourlyCookies;
    }
};

Store.prototype.render = function() {
    this.calcCookiesPerHour();
    let ulElement = document.getElementById('tokyo');
    console.log(ulElement);
    for(let i=0; i<hours.length; i++){
        let liItem = document.createElement('li');
        liItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
        ulElement.appendChild(liItem);
    }

    let liItem = document.createElement('li');
    liItem.textContent = `Total: ${this.totalCookies} cookies.`
    ulElement.appendChild(liItem);
};

let seattle = new Store(23, 65, 6.3, 'Seattle');
let tokyo = new Store(3, 24, 1.2, 'Tokyo');
let lima = new Store(2, 16, 4.6, 'Lima');
let dubai = new Store(11, 38, 3.7, 'Dubai');
let paris = new Store(20,38, 2.3, 'Paris');

console.log(storeArray);

seattle.render();
dubai.render();
lima.render();
paris.render();
tokyo.render();
