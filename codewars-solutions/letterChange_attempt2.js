//Problem link: http://www.codewars.com/kata/5530b10808541c24330000b4
//You'll need an account to follow the link successfully

function letterChange(str) {
  return str.replace(/\w/g, function(c) {
    return String.fromCharCode(
      c.charCodeAt(0) + (c != 'z' && c != 'Z' ? 1 : -25));
  });
}