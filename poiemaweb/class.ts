class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

const person = new Person('Lee');
person.walk();

/**
 * 접근 제한자
 * 접근 가능성        public  protected  private
 * 클래스 내부           O        O         O
 * 자식 클래스 내부       O        O         X
 * 클래스 인스턴스        O        X         X
 */

class Foo {
  public x: string;
  protected y: string;
  private z: string;

  constructor(x: string, y: string, z: string) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const foo = new Foo('x', 'y', 'z');

// possible
console.log(foo.x);

// impossible
// console.log(foo.y);

// impossible
// console.log(foo.z);

class Bar extends Foo {
  constructor(x: string, y: string, z: string) {
    super(x, y, z);

    // possible
    console.log(this.x);

    // possible
    console.log(this.y);

    // impossible
    // console.log(this.z);
  }
}

class Foo2 {
  private readonly MAX_LEN: number = 5;
  private readonly MSG: string;

  constructor() {
    this.MSG = 'hello';
  }

  log() {
    // impossible
    // this.MAX_LEN = 10;

    // impossible
    // this.MSG = 'Hi';

    console.log(`MAX_LEN: ${this.MAX_LEN}`);
    console.log(`MSG: ${this.MSG}`);
  }
}

new Foo2().log();

/**
 * 추상 클래스
 */

abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log('roaming the earth ...');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('bowwow~~');
  }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();