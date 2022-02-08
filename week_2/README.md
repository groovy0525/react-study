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

실행 컨텍스트 스택은 코드의 실행 순서를 관리한다.

```js
const x = 1;

function foo() {
  const y = 2;

  function bar() {
    const z = 3;
    console.log(x + y + z);
  }
  bar();
}

foo(); // 6
```

## Lexical scope, 자바스크립트에서의 Closure 알아보기

- Lexical scope

  상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경에 의해 결정된다. Lexical scope 이다.

- Closure

  - 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있는데, 이러한 중첩 함수를 클로저라고 한다.

  - 클로저는 상태가 의도치 않게 변경되지 않도록 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다.

  ```js
  const increase = (function () {
    let num = 0;

    return function () {
      return ++num;
    };
  })();

  increase(); // 1
  increase(); // 2
  increase(); // 3
  ```

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

- `const func = () ⇒ {}`, `function func () {}`, `const func = function () {}`

  위 3가지의 차이

  `const func = () => {}` : 화살표 함수

  - 화살표 함수는 함수 선언문과는 다르게 변수 호이스팅이 발생 한다.

    ```js
    add(1, 3); // add is not defined
    const add = (a, b) => a + b;

    add(1, 3); // 4
    function add(a, b) {
      return a + b;
    }
    ```

  - 기존 함수들과는 this 바인딩 방식이 다르다.

  - return을 축약할 수 있다.

  - 매개변수가 한 개 이면 소괄호를 생략할 수 있다.

  `function func () {}`: 함수 선언문

  - ECMA 사양에서 변수는 선언이라고 표현하지만 함수는 정의라고 표현 한다.

  - 함수 선언문은 변수 호이스팅이 아닌 함수 호이스팅이 발생 한다.

    ```js
    add(1, 3); // 4
    function add(a, b) {
      return a + b;
    }
    ```

  - 함수 선언문은 이름을 생략할 수 없다.

  `const func = function () {}` : 함수 표현식

  - 함수 표현식은 함수 선언문과는 다르게 변수 호이스팅이 발생 한다.

- arrow Function안의 this가 resolve되는 방식과 `function`으로 생성된 함수안에서의 this가 resolve되는 방식과 어떠한 차이가 있는지?

  - `function`으로 생성된 함수의 this는 호출 시점에 바인딩된다.

  - arrow function은 함수 자체의 this 바인딩을 갖지 않는다. 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.

  ```js
  const obj1 = {
    name: "groovy",
    whoAmI() {
      console.log(this); // obj
    },
  };

  const obj2 = {
    name: "groovy",
    whoAmI: () => {
      console.log(this); // window
    },
  };
  ```

## ESmodules

- `export`와 `export default`의 차이는?

  export는 변수나 함수등을 그 이름으로 내보내고, export default는 모듈 파일에 단 한개만 적용 가능하며 불러올 때 이름을 마음대로 변경 할 수 있다.

  ```js
  // auth.js
  export const login = () => {
    // ...
  };

  export default auth = (state, action) => {
    // ...
  };

  // LoginForm.jsx
  import auth, { login } from "../auth";

  dispatch(login(data));
  ```

- `import` 와 동시에 다른 이름으로 변경하려면?

  ```js
  // auth.js
  export const login = () => {
    // ...
  };

  export default auth = (state, action) => {
    // ...
  };

  // LoginForm.jsx
  import authModule, { login as loginThunk } from "../auth";

  dispatch(loginThunk(data));
  ```

- `import name from “./something”`와 `import { partOf } from “./something”`의 차이

  `import name from “./something”` 은 export default로, `import { partOf } from “./something”` 는 export로 내보낸 모듈을 불러오는 것이다.

## 퀴즈 풀기!

- 틀린거 오답노트 쓰기

  W3Docs | Quiz

  ```js
  // What value will this expression return?
  let x, { x: y = 1 } = { x }: y; // 1
  // 전혀 모르겠음

  // What value will this expression return?
  [...[...'...']].length // 3
  // 전혀 모르겠음

  // What will the result of this expression be?
  typeof (new (class F extends (String, Array) { })).substring
  // "undefined"
  // "object" 라고 생각했음

  // What will this function return?
  (function() {
    if (false) {
      let f = { g() => 1 };
    }
    return typeof f;
  })() // Error
  // "undefined" 라고 생각했음
  ```

  Perfection Kills

  ```js
  (function (x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    return [x, y, f()];
  })(1); // [2, 1, 1]
  // [2, undefined, 2] 라고 생각했음

  (function () {
    return [(() => this.x).bind({ x: "inner" })(), (() => this.x)()];
  }.call({ x: "outer" })); // ['outer', 'outer']
  // ['inner', 'outer'] 라고 생각했음

  typeof `${{ Object }}`.prototype; // "undefined"
  // "object" 라고 생각했음

  let arr = [];
  for (let { x = 2, y } of [{ x: 1 }, 2, { y }]) {
    arr.push(x, y);
  }
  arr; // Error - Uncaught ReferenceError: Cannot access 'y' before initialization
  // 전혀 모르겠음
  ```
