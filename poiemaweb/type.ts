// boolean
let isDone: boolean = false;

// null
let n: null = null;

// undefined
let u: undefined = undefined;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = 'blue';
color = 'red';
let myName: string = `Lee`
let greeting: string = `Hello, my name is ${myName}`;

// object
const obj: object = {};

// array
let list1: any[] = [1, 'two', true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3];

// tuple
let tuple: [string, number];
tuple = ['hello', 10];
// tuple = [10, 'hello'];
// tuple = ['hello', 10, 'world', 100];
// tuple.push(true);

// enum
enum Color1 {Red, Green, Blue};
let c1: Color1 = Color1.Green;

console.log(c1); // 1

enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

console.log(c2); // 2

enum Color3 {Red = 1, Green = 2, Blue = 4};
let c3: Color3 = Color3.Blue;

console.log(c3);

/**
 * any: 타입 추론(type inference)할 수 없거나 타입 체크가 필요 없는 변수에 사용
 * var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당할 수 있다.
 */
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

// void
function warnUser(): void {
  console.log('This is my warning message');
}

// never: 결코 발생하지 않는 값
function infiniteLoop(): never {
  while (true) {}
}

function error(message: string): never {
  throw new Error(message);
}

// string: 원시 타입 문자열 타입
let primitiveStr: string;
primitiveStr = 'hello';

// 객체 할당 -> Error
// primitiveStr = new String('hello');

let objectStr: String;
objectStr = 'hello';
objectStr = new String('hello');

// Date
const today: Date = new Date();

// HTMLElement
// const elem: HTMLElement = document.getElementById('myId');

// class Person {}
// const person: Person = new Person();

/**
 * 타입 캐스팅
 */
// const $input = document.querySelector('input[type="text"]'); // Element | null return.. => Error!
const $input = document.querySelector('input[type="text"]') as HTMLInputElement;
const val = $input.value;
