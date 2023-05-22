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