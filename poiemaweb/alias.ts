interface Person3 {
  name: string,
  age?: number
}

const person3 = {} as Person3;
person3.name = 'Lee';
person3.age = 20;
// person3.address = 'Seoul'; // error~

// 타입 앨리어스
type Person4 = {
  name: string,
  age?: number
}

const person4 = {} as Person4;
person4.name = 'Lee';
person4.age = 20;
// person4.address = 'Seoul'; // error~

// 타입 앨리어스는 원시값, 유니온 타입, 튜플 등도 타입으로 지정이 가능하다.
type Str = 'Lee';
type Union = string | null;
type Name = 'Lee' | 'Kim';
type Num = 1 | 2 | 3 | 4 | 5;
type Obj = {a: 1} | {b: 2};
type Func = (() => string) | (() => void);
// type Shape = Square | Rectangle | Circle;
type Tuple = [string, boolean];
// const t: Tuple = ['', '']; // error~