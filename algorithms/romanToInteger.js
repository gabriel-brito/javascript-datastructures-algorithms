// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
 const romanMap = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

// O (N)
// O (roman number size);
var romanToInt = function(s) {
    let result = 0

    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s.charAt(i)];
        const next = romanMap[s.charAt(i + 1)];

        if (current < next) {        
            result += Math.abs(current - next);
            i++;
        } else {
            result += current;
        }        
    }

    return result;
};