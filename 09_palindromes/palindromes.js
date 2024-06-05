const palindromes = function (str) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let filtered = str
      .toLowerCase()
      .split('')
      .filter(item => alphanumerical.includes(item))
      .join('');
  let reversed = filtered
      .split('')
      .reverse()
      .join('');
  return reversed === filtered;
};

// Do not edit below this line
module.exports = palindromes;
