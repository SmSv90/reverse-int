module.exports = function reverse (n) {
  let result = '';
  let nStr = n.toString();
  for (let i = nStr.length-1; i >= 0; i--) {
    result += nStr[i];
  }
  return parseInt(result); 
}
