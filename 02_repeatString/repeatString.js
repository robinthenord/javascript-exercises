const repeatString = function(string, num) {
  let str= '';
  if (num < 0) return 'ERROR';
  for (i = 0; i < num; i++) {
    str = string + str;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
