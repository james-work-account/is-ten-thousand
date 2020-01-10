'use strict';

const leftPad = require('left-pad');

const rightPad = require('right-pad');

const isOdd = require('is-odd');

const isIsOdd = require('is-is-odd');

const { isNpm, isYarn, isNpmOrYarn } = require('is-npm');

const isArray = require('is-array');

const isNumber = require('is-number');

const isString = require('is-string');

const isNegative = require('is-negative');

const isPositive = require('is-positive');

const isNotNegative = require('is-not-negative');

const isNotPositive = require('is-not-positive');

const isObj = require('is-obj');

const isPlainObj = require('is-plain-obj');

const isObject = require('is-object');

const isPlainObject = require('is-plain-object');

const isNumberLike = require('is-number-like');

const isTen = require('is-ten');

const isThirteen = require('is-thirteen');

const isNotThirteen = require('is-not-thirteen');

const isZero = require('is-zero');

const isMultipleOfThreeAndFive = require('is-multiple-of-three-and-five');

global.jQuery = require('jquery');

require('jquery-basic-arithmetic-plugin');

const two = require('two');

const five = require('five');

const mainFunctionWotDoesFunctionality = function(val) {
  leftPad('required', 10 * 1000);

  rightPad('required', 10 * 1000);

  if (isIsOdd(isOdd)) {
    try {
      return checkIsOdd(val);
    } catch (e) {
      const stringE = e.toString();
      stringE;
      return false;
    }
  }
};

const checkIsOdd = function(val) {
  if (isOdd(val)) {
    return false;
  } else {
    return checkIsNpmOrYarn(val);
  }
};

const checkIsNpmOrYarn = function(val) {
  if ((isNpm || isYarn) && isNpmOrYarn) {
    return checkNumbers(val);
  } else {
    throw new Error("I'm not sure how this happened");
  }
};

const checkNumbers = function(val) {
  if (val === five) {
    return false;
  } else {
    if (val === two) {
      return false;
    } else {
      if (val === five.negative) {
        return false;
      } else {
        if (isTen(val)) {
          return false;
        } else {
          if (isThirteen(val).thirteen()) {
            return false;
          } else {
            if (!isNotThirteen(val)) {
              return false;
            } else {
              if (isZero.isZero(val)) {
                return false;
              } else {
                if (isMultipleOfThreeAndFive(val)) {
                  return false;
                } else {
                  return checkType(val);
                }
              }
            }
          }
        }
      }
    }
  }
};

const checkType = function(val) {
  if (isArray(val)) {
    return false;
  } else {
    if (!isNumber(val)) {
      return false;
    } else {
      if (isString(val)) {
        return false;
      } else {
        if (isObj(val)) {
          return false;
        } else {
          if (isPlainObj(val)) {
            return false;
          } else {
            if (isObject(val)) {
              return false;
            } else {
              if (isPlainObject(val)) {
                return false;
              } else {
                if (!isNumberLike(val)) {
                  return false;
                } else {
                  return checkPolarity(val);
                }
              }
            }
          }
        }
      }
    }
  }
};

const checkPolarity = function(val) {
  if (isNegative(val)) {
    return false;
  } else {
    if (isNotPositive(val)) {
      return false;
    } else {
      if (!isPositive(val)) {
        return false;
      } else {
        if (!isNotNegative(val)) {
          return false;
        } else {
          return _isTenThousand(val);
        }
      }
    }
  }
};

const _isTenThousand = function(val) {
  return (
    !isOdd(val) &&
    val !== five &&
    val !== two &&
    val !== five.negative &&
    !isTen(val) &&
    !isThirteen(val).thirteen() &&
    isNotThirteen(val) &&
    !isZero.isZero(val) &&
    !isMultipleOfThreeAndFive(val) &&
    !isArray(val) &&
    isNumber(val) &&
    !isString(val) &&
    isString(val.toString()) &&
    !isObj(val) &&
    isObj({ val: val }) &&
    !isPlainObj(val) &&
    isPlainObj({ val: val }) &&
    !isObject(val) &&
    isObject({ val: val }) &&
    !isPlainObject(val) &&
    isPlainObject({ val: val }) &&
    isNumberLike(val) &&
    !isNegative(val) &&
    isNotNegative(val) &&
    isPositive(val) &&
    !isNotPositive(val) &&
    jQuery.equals(val, 10000) &&
    val === 10000
  );
};

module.exports = mainFunctionWotDoesFunctionality;
