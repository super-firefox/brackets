module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const OPEN_BRACKETS = getOpenBrackets(bracketsConfig);
  const BRAKETS_PAIR = getBracketsPair(bracketsConfig);
  
  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];
    if (OPEN_BRACKETS.includes(currentBracket) && stack[stack.length-1] != BRAKETS_PAIR[currentBracket]) {
      stack.push(currentBracket);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topBrackets = stack[stack.length - 1];
      if(BRAKETS_PAIR[topBrackets] === currentBracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function getOpenBrackets(bracketsArray) {
  let array = [];
  for (let item of bracketsArray) {
    array.push(item[0]);
  }
  return array;
}

function getBracketsPair(bracketsArray) {
  let object = {};
  for (let item of bracketsArray) {
    object[item[0]] = item[1];
  }
  return object;
}
