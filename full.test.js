/**
 * Note: Numbers greater than 100000 are not accounted for.
 * I can't prove that they won't return true.
 */

const isTenThousand = require("./index");

function testIsTenThousand(i) {
  if (i === 10000) {
    test(`${i} is ten thousand`, () => {
      expect(isTenThousand(i)).toBe(true);
    });
  } else {
    test(`${i} is not ten thousand`, () => {
      expect(isTenThousand(i)).toBe(false);
    });
  }
}

Array.apply(null, Array(100001)).map(function (_, i) {
  testIsTenThousand(i - 50000);
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
