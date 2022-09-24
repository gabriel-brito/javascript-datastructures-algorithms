// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let result = {};

  for (let i = 0; i < s.length; i++) {
    if (!result[s[i]]) {
      result[s[i]] = 1;
    } else {
      result[s[i]]++;
    }
  }

  for (let key in result) {
    if (result[key] === 1) {
      return s.indexOf(key);
    }
  }

  return -1;
};
