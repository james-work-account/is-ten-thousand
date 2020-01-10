const isTenThousand = require('./index');

function getNotTenThousand() {
  const number = Math.ceil(Math.random() * 100000);
  if (number === 10000) {
    return getNotTenThousand();
  }
  return number;
}

const randNum = getNotTenThousand();

test(`${randNum} is not ten thousand`, () => {
  expect(isTenThousand(randNum)).toBe(false);
});

test(`10000 is ten thousand`, () => {
  expect(isTenThousand(10000)).toBe(true);
});
