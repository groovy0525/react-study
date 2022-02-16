const fs = require("fs");

describe("Callback - fs.readFile를 콜백 패턴만 사용", () => {
  test("assets/first.json을 불러오기", done => {
    fs.readFile("assets/first.json", (err, data) => {
      const first = JSON.parse(data);
      expect(first.hi).toBe("방가방가");
      done();
    });
  });

  test("assets/first.json에서 불러온 second_key를 이용해 second.json에서 key에 일치하는 오브젝트 찾기", done => {
    fs.readFile("assets/first.json", (err, data) => {
      const first = JSON.parse(data);
      const key = first.second_key;

      fs.readFile("assets/second.json", (err, data) => {
        const second = JSON.parse(data);
        const result = second.find(item => item.key === key);
        expect(result.hi).toBe("Second 방가방가");
        done();
      });
    });
  });

  test("assets/second.json에서 불러온 third_key를 이용해 third.json에서 key에 일치하는 오브젝트 찾기", done => {
    fs.readFile("assets/first.json", (err, data) => {
      const first = JSON.parse(data);
      const key = first.second_key;

      fs.readFile("assets/second.json", (err, data) => {
        const second = JSON.parse(data);
        const thirdKey = second.find(item => item.key === key).third_key;

        fs.readFile("assets/third.json", (err, data) => {
          const third = JSON.parse(data);
          const result = third.find(item => item.key === thirdKey);
          expect(result.hi).toBe("Third 방가방가");
          done();
        });
      });
    });
  });
});
