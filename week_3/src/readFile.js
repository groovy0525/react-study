const fs = require("fs");

exports.readFile = filePath => {
  // return Promise
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
  // TODO
  throw Error("fs.readFile을 이용해 Promise화 시킨 readFile을 구현하여 보세요");
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
};
