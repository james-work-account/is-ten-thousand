/**
 * This function checks whether the number is 10000.
 *
 * @param {number} number
 * @returns {boolean}
 * @example
 * isTenThousand(8000) // => false
 * isTenThousand(10000) // => true
 * isTenThousand('10000') // => true
 * isTenThousand('ten thousand') // => false
 */
function isTenThousand(number){
    return number == 10000;
}

module.exports = isTenThousand;