const { readFile } = require("../src/readFile");

describe("Promise - fs.readFile를 프로미스 패턴만 사용", () => {
  test("fs.readFile을 이용해 Promise를 반환하는 readFile 함수 만들기", () => {
    const promise = readFile("assets/first.json")
      .then(data => data)
      .catch(err => err);
    expect(promise instanceof Promise).toBe(true);
  });

  test("assets/first.json을 불러오기", done => {
    readFile("assets/first.json").then(data => {
      const first = JSON.parse(data);
      expect(first.hi).toBe("방가방가");
      done();
    });
  });

  test("assets/first.json에서 불러온 second_key를 이용해 second.json에서 key에 일치하는 오브젝트 찾기", done => {
    readFile("assets/first.json")
      .then(data => {
        const first = JSON.parse(data);
        return first.second_key;
      })
      .then(key => {
        readFile("assets/second.json").then(data => {
          const second = JSON.parse(data);
          const result = second.find(item => item.key === key);
          expect(result.hi).toBe("Second 방가방가");
          done();
        });
      });
  });

  test("assets/second.json에서 불러온 third_key를 이용해 third.json에서 key에 일치하는 오브젝트 찾기", done => {
    readFile("assets/first.json")
      .then(data => {
        const first = JSON.parse(data);
        return first.second_key;
      })
      .then(key =>
        readFile("assets/second.json").then(data => {
          const second = JSON.parse(data);
          const result = second.find(item => item.key === key);
          return result.third_key;
        })
      )
      .then(thirdKey => {
        readFile("assets/third.json").then(data => {
          const third = JSON.parse(data);
          const result = third.find(item => item.key === thirdKey);
          expect(result.hi).toBe("Third 방가방가");
          done();
        });
      });
  });
});
