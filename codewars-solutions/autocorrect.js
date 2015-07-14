//Problem link: http://www.codewars.com/kata/538ae2eb7a4ba8c99b000439
//You'll need an account to follow the link successfully

function autocorrect(input){
  return input.split(" ").map(function(t){
    //i will never forget about word boundaries as long as i live
    return t.toString().replace(/\byou+\b|\bu\b/ig,"your sister");
  }).join(" ");
}