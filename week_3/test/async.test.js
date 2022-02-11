const { readFile } = require("../src/readFile");

describe("async/await - readFile함수를 async/await 만 사용하여 테스트 통과하기", () => {
  test("assets/first.json을 불러오기", async () => {
    const first = await readFile("assets/first.json");
    const data = JSON.parse(first);
    expect(data.hi).toBe("방가방가");
  });

  test("assets/first.json에서 불러온 second_key를 이용해 second.json에서 key에 일치하는 오브젝트 찾기", async () => {
    const firstData = await readFile("assets/first.json");
    const first = JSON.parse(firstData);
    const secondKey = first.second_key;
    const secondData = await readFile("assets/second.json");
    const second = JSON.parse(secondData);
    const result = second.find(item => item.key === secondKey);
    expect(result.hi).toBe("Second 방가방가");
  });

  test("assets/second.json에서 불러온 third_key를 이용해 third.json에서 key에 일치하는 오브젝트 찾기", async () => {
    const firstData = await readFile("assets/first.json");
    const first = JSON.parse(firstData);
    const secondKey = first.second_key;
    const secondData = await readFile("assets/second.json");
    const second = JSON.parse(secondData);
    const thirdKey = second.find(item => item.key === secondKey).third_key;
    const thirdData = await readFile("assets/third.json");
    const third = JSON.parse(thirdData);
    const result = third.find(item => item.key === thirdKey);
    expect(result.hi).toBe("Third 방가방가");
  });
});
