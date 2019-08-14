// CLASS

// cara lama:
function Circle(radius) {
  this.radius = radius;
  
  this.draw = function() {
    console.log('draw');
  }
}

// cara baru menggunakan class:
class Circle2 {
  constructor(radius2) {
    this.radius2 = radius2;
  }

  // instance method
  draw2() {
    console.log('draw')
  }

  // statis method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle2(radius);
  }
}

const c = Circle2.parse('{"')
Circle2.parse()
console.log(c);


// -------------------------------------------------------

// MODULE

// 1. export:

export function tool() {

  // .....
}

export var kode = 42;

var bar = [1, 2, 3];
export {bar};


// cara lain

function tool() {
  // .......
}

var kode = 42;
var bar = [1, 2, 3];

export {tool, kode, bar};

// rename

function tool() {
  // .......
}
export {tool as kode}

var kode = 42;
export {kode};
kode = 100;


// import:

import {tool, kode, bar} from 'tool';

// rename
import {tool as toolFunc} from 'tool';

toolFunc();

export function bar() {}
export var x = 42;
export function bar() {}

import * as tool from 'tool';

tool.bar();
tool.x;
tool.bar();




// CLASS from kode.id

// cara lama :
function person(nama, tinggi) {
  this.nama = nama;
  this.tinggi = tinggi;
}

person.prototype.sayNama = function() {
  this.console.log(this.nama);
}

// cara baru ES6:
class Person {
  constructor() {
    this.nama = 'Dimas';
    this.tinggi = 170;
  }
}
  sayNama() {
    console.log(this.nama);
  }