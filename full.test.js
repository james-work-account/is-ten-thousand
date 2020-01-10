/**
 * Note: Numbers greater than 100000 are not accounted for.
 * I can't prove that they won't return true.
 */

const isTenThousand = require('./index');

Array.apply(null, Array(100001)).map(function(_, i) {
  testIsTenThousand(i - 50000);
});

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
