const isTenThousand = require("./index");

function getNotTenThousand() {
  const number = Math.ceil(Math.random() * 100000);
  if (number === 10000) {
    return getNotTenThousand();
  }
  return number;
}

const randNum = getNotTenThousand();

[true, false].map((shouldDoSomethingAsync) => {
  test(`${randNum} is not ten thousand with shouldDoSomethingAsync = ${shouldDoSomethingAsync}`, () => {
    if (shouldDoSomethingAsync) {
      isTenThousand(randNum, true).then((result) => expect(result).toBe(false));
    } else {
      expect(isTenThousand(randNum)).toBe(false);
    }
  });

  test(`10000 is ten thousand with shouldDoSomethingAsync = ${shouldDoSomethingAsync}`, () => {
    if (shouldDoSomethingAsync) {
      isTenThousand(10000, true).then((result) => expect(result).toBe(true));
    } else {
      expect(isTenThousand(10000)).toBe(true);
    }
  });
});
