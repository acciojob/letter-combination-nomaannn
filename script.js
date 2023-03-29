

var digitsToLetters = {
  
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
  
};


function letterCombinations(digits) {
  //Complete the function
if (digits === '') {
    return [];
  }

  var possibleValues = digits.split('').map(value => digitsToLetters[value]);
  
  var possibleCombinations = [];

  var recursiveCombine = (start, result) => {

    if (result.length === digits.length) {
      possibleCombinations.push(result.join(''));
    }

    for (var i = start; i < possibleValues.length; i++) {
      for (var j = 0; j < possibleValues[i].length; j++) {
        result.push(possibleValues[i][j]);
        recursiveCombine(i + 1, result);
        result.pop();
      } 
    }
  }

  recursiveCombine(0, []);
  return possibleCombinations;
}

module.exports = letterCombinations;
