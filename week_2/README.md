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

- Object.values
- Object.keys
- Object.entries
- computed property가 무엇인지?

## ... Operator

- spread operator가 무엇인지
- Rest Parameters가 무엇인지

## Arrow Functions

- `const func = () ⇒ {}`, `function func () {}`, `const func = function () {}`위 3가지의 차이
- arrow Function안의 this가 resolve되는 방식과 `function`으로 생성된 함수안에서의 this가 resolve되는 방식과 어떠한 차이가 있는지?

## Smodules

- `export`와 `export default`의 차이는?
- `import` 와 동시에 다른 이름으로 변경하려면?
- `import name from “./something”`와 `import { partOf } from “./something”`의 차이

## 퀴즈 풀기!

- 틀린거 오답노트 쓰기
