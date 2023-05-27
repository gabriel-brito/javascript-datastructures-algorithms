//Google Question

// O(N);
function firstRecurringCharacter(input) {
  const indexMap = new Map();
  let result = undefined;

  for (let i = 0; i < input.length; i++) {
    const current = input[i];

    if (indexMap.has(current)) {
      result = current;
      break;
    } else {
      indexMap.set(current, input[i]);
    }
  }

  return result;
}

//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1

//Given an array = [2,3,4,5]:
//It should return undefined
console.log(firstRecurringCharacter([[2, 3, 4, 5]])); // undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4])); // 5
