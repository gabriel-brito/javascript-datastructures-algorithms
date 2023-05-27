// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 
 var canConstruct = function(ransomNote, magazine) {
  const magazineMap = {}
  const ransomMap = {}

  for (const char of magazine) {
      magazineMap[char] = magazineMap[char] + 1 || 1
  }
  
  for (const char of ransomNote) {
      ransomMap[char] = ransomMap[char] + 1 || 1
  }

  const result = Object.entries(ransomMap).every(([key]) => {
      return ransomMap[key] <= magazineMap[key]
  })

  return result;
};

// O(N);

// Improved
function buildMap(word) {
    const map = {};

    for (const char in word) {
        map[char] = map[char] + 1 || 1;
    }

    return map;
}

var canConstruct = function(ransomNote, magazine) {
    const magazineMap = buildMap(magazine);
    const ransomMap = buildMap(ransomNote);
  
    const result = Object.entries(ransomMap).every(([key]) => {
        return ransomMap[key] <= magazineMap[key]
    })
  
    return result;
};
// O (word length);