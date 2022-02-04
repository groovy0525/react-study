## var, const, let의 차이

- var

  - 함수 스코프 범위를 가진다.
    ```js
    if (true) {
      var a = 1;
    }
    console.log(a); // 1
    ```
  - 재 선언과 재 할당이 가능하다.

    ```js
    var hello = "Hello";
    var hello = "Hello2";
    console.log(hello); // Hello2
    ```

  - 호이스팅으로 인해 버그를 야기할 가능성이 높다

    ```js
    console.log(hello); // undefined
    var hello = "Hello";
    ```

- const

  - 블록 스코프 범위를 가진다.
    ```js
    if (true) {
      const a = 1;
    }
    console.log(a); // a is not defined
    ```
  - 한 번 선언하면 재 할당이 불가능하다.
    ```js
    const a = 1;
    a = 2; // Assignment to constant variable
    ```
  - 선언과 초기화를 한 번에 해야 한다.
    ```js
    const a; // Missing initializer in const declaration
    ```
  - 호이스팅이 되나 TDZ로 인해 var의 문제점을 해결(?) 한다.

    스코프 내에서의 사용과 전역에서의 사용이 다르게 나타난다.

    ```js
    /* Global */
    console.log(a); // a is not defined
    const a = 1;

    /* Local */
    {
      console.log(b); // Cannot access 'b' before initialization
      const b = 1;
    }
    ```

- let

  - 블록 스코프 범위를 가진다.
    ```js
    if (true) {
      let a = 1;
    }
    console.log(a); // a is not defined
    ```
  - 재 할당이 가능하다.
    ```js
    let a = 1;
    a = 2;
    ```
  - 호이스팅이 되나 TDZ로 인해 var의 문제점을 해결(?) 한다.

    스코프 내에서의 사용과 전역에서의 사용이 다르게 나타난다.

    ```js
    /* Global */
    console.log(a); // a is not defined
    let a = 1;

    /* Local */
    {
      console.log(b); // Cannot access 'b' before initialization
      let b = 1;
    }
    ```

## Excution Context 알아보기

## Lexical scope, 자바스크립트에서의 Closure 알아보기

## Array

어레이 기본 메서드 사용법 익혀보기

```js
const users = [
  { id: 1, name: "one" },
  { id: 2, name: "two" },
  { id: 3, name: "three" },
];
```

- map

  ```js
  const updateUsers = users.map(user => ({
    ...user,
    job: "student",
  }));

  console.log(updateUsers);
  /*
  [
    { id: 1, name: 'one', job: 'student' },
    { id: 2, name: 'two', job: 'student' },
    { id: 3, name: 'three', job: 'student' }
  ]
  */
  ```

- filter

  ```js
  const filteredUser = users.filter(user => user.id !== 1);

  console.log(filteredUser);
  /*
  [ { id: 2, name: 'two' }, { id: 3, name: 'three' } ]
  */
  ```

- reduce

  ```js
  const combineIDs = users.reduce((acc, crr) => acc + crr.id, 0);

  console.log(combineIDs); // 6
  ```

- find, findIndex

  ```js
  const user = users.find(user => user.name === "two");
  const userIndex = users.findIndex(user => user.name === "two");

  console.log(user);
  /*
  { id: 2, name: 'two' }
  */
  console.log(userIndex); // 1
  ```

- includes

  ```js
  const find = users.find(user => user.name === "one");
  const isExist = users.includes(find);

  console.log(isExist); // true
  ```

- sort

  ```js
  const sortedUsers = users.sort((a, b) => b.id - a.id);

  console.log(sortedUsers);
  /*
  [
    { id: 3, name: 'three' }
    { id: 2, name: 'two' },
    { id: 1, name: 'one' },
  ]
  */
  ```

## Object

```js
const user = { id: 1, name: "one", age: 20, gender: "male" };
```

- Object.values

  ```js
  const values = Object.values(user);

  console.log(values); // [1, 'one', 20, 'male']
  ```

- Object.keys

  ```js
  const keys = Object.keys(user);

  console.log(keys); // ['id', 'name', 'age', 'gender']
  ```

- Object.entries

  ```js
  const entry = Object.entries(user);

  console.log(keys);
  /*
  [
    ['id', 1], ['name', 'one'], ['age', 20], ['gender', 'male']
  ]
  */
  ```

- computed property가 무엇인지?

  객체에 동적으로 (변수 등) 키를 생성할 수 있다.

  ```js
  const es = "ES";

  const obj = {
    [es + 6]: "ES6",
  };

  console.log(obj); // { ES6: 'ES6' }
  ```

## ... Operator

- spread operator가 무엇인지

  참조 객체의 값을 복사하는 개념이지만 메모리 주소 값이 달라 다른 객체로 인식한다.

  이 때 여러개의 참조 값을 가지는 경우, 가장 외부의 주소값만 바뀐다.

  ```js
  const numbers = [1, 2, 3];
  const copiedNumbers = [...numbers];

  console.log(numbers === copiedNumbers); // false

  const newNumbers = [...numbers, 4];

  console.log(newNumbers); // [ 1, 2, 3, 4 ]
  ```

- Rest Parameters가 무엇인지

함수에 정해진 만큼의 매개변수가 들어오지 않는 경우 유용하게 사용 할 수 있다.

```js
const sum = (...args) => {
  return args.reduce((acc, crr) => acc + crr, 0);
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
```

## Arrow Functions

- `const func = () ⇒ {}`, `function func () {}`, `const func = function () {}`위 3가지의 차이
- arrow Function안의 this가 resolve되는 방식과 `function`으로 생성된 함수안에서의 this가 resolve되는 방식과 어떠한 차이가 있는지?

## ESmodules

- `export`와 `export default`의 차이는?
- `import` 와 동시에 다른 이름으로 변경하려면?
- `import name from “./something”`와 `import { partOf } from “./something”`의 차이

## 퀴즈 풀기!

- 틀린거 오답노트 쓰기
