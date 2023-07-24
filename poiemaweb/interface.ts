/**
 * 인터페이스는 프로퍼티와 메서드를 가질 수 있다.
 * 클래스와 다르게 직접 인스턴스를 생성할 수 없다.
 * 모든 메서드는 추상 메서드다. 이때 abstract 키워드를 사용하지 않는다.
 */

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

let todo: Todo;

todo = {
  id: 1,
  content: 'typescript',
  completed: false
};

let todos: Todo[] = [];

function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

const newTodo: Todo = {
  id: 1,
  content: 'typescript',
  completed: false
};
addTodo(newTodo);
console.log(todos);

interface SquareFunc {
  (num: number): number;
}

const squareFunc: SquareFunc = function (num: number): number {
  return num * num;
}

console.log(squareFunc(10));

interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

class TodoImpl implements ITodo {
  constructor(
    public id: number,
    public content: string,
    public completed: boolean
  ) {
  }
}

const todoImpl = new TodoImpl(1, 'Typescript', false);
console.log(todoImpl);

interface IPerson {
  name: string;

  sayHello(): void;
}

class PersonImpl implements IPerson {
  constructor(public name: string) {
  }

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

function greeter(personImpl: PersonImpl): void {
  personImpl.sayHello();
}

const me = new PersonImpl('Lee');
greeter(me);

/**
 * 덕 타이핑 (Duck typing)
 * wow..
 */
interface IDuck {
  quack(): void;
}

class MallardDuck implements IDuck {
  quack() {
    console.log('Quack!');
  }
}

class RedheadDuck {
  quack() {
    console.log('q~uack!');
  }
}

function makeNoise(duck: IDuck): void {
  duck.quack();
}

makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack!
// makeNoise 함수에 인터페이스 IDuck을 구현하지 않은 클래스 RedheadDuck의 인스턴스를 인자로 전달하여도 에러 없이 처리된다.

/**
 * 선택적 프로퍼티
 */
interface UserInfo {
  username: string;
  password: string;
  age?: number;
  address?: string;
}

const userInfo: UserInfo = {
  username: '0xe82de@gmail.com',
  password: 'pass~'
}

/**
 * 인터페이스는 클래스도 상속받을 수 있다.
 * 클래스의 모든 멤버(public, protected, private)가 상속되지만 구현까지 상속하지는 않는다.
 * wow..
 */
class Person2 {
  constructor(
    public name: string,
    public age: number
  ) {
  }
}

interface Developer extends Person2 {
  skills: string[];
}

const developer: Developer = {
  name: 'Lee',
  age: 20,
  skills: ['HTML', 'CSS', 'JavaScript']
}
