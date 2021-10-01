/**
 * Note: Some numbers are not accounted for.
 * I can't prove that they won't return true.
 */

const isTenThousand = require("./index");

function testIsTenThousand(i) {
  [true, false].map((shouldDoSomethingAsync) => {
    if (i === 10000) {
      test(`${i} is ten thousand with shouldDoSomethingAsync = ${shouldDoSomethingAsync}`, () => {
        if (shouldDoSomethingAsync) {
          return isTenThousand(i, true)
            .then((result) => expect(result).toBe(true))
            .catch((e) => console.log(e, i));
        } else {
          expect(isTenThousand(i)).toBe(true);
        }
      });
    } else {
      test(`${i} is not ten thousand with shouldDoSomethingAsync = ${shouldDoSomethingAsync}`, () => {
        if (shouldDoSomethingAsync) {
          return isTenThousand(i, true)
            .then((result) => expect(result).toBe(false))
            .catch((e) => console.log(e, i));
        } else {
          expect(isTenThousand(i)).toBe(false);
        }
      });
    }
  });
}

Array.apply(null, Array(10001)).map(function (_, i) {
  testIsTenThousand(i);
});

Array.apply(null, Array(10001)).map(function (_, i) {
  testIsTenThousand(i - 10001);
});

// just to be sure
testIsTenThousand("10000");
testIsTenThousand("9999");
testIsTenThousand("ten thousand");
testIsTenThousand(10000.1);
testIsTenThousand([10000]);
testIsTenThousand([]);
testIsTenThousand({});
testIsTenThousand(() => {});
testIsTenThousand(true);
testIsTenThousand();
testIsTenThousand(undefined); // basically the same test but whatever
testIsTenThousand(null);
