// Interface segregation principle

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} swim`);
  },
};

const flier = {
  fly() {
    console.log(`${this.name} fly`);
  },
};

const walker = {
  walk() {
    console.log(`${this.name} walk`);
  },
};

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, flier, swimmer);
