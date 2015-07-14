//Problem link: http://www.codewars.com/kata/558dd9a1b3f79dc88e000001
//You'll need an account to follow the link successfully

function findDup( arr ){
  //I believe the algorithmic time complexity of this is n/2
  //Space complexity is 2n
  
  //Create an array sized n (arr.length-1) with all elements initialized 0
  var a = Array.apply(null, Array(arr.length-1)).map(Number.prototype.valueOf,0);
  
  //For each int in arr, check the corresponding index in a
  for(var i=0; i<arr.length; i++) {
    //If element == 1, we've already encountered this number in arr, so return the number
    if (a[arr[i]-1] == 1)
      return arr[i];
    //If element != 1, it must equal 0, so we haven't encountered this number before. Increment to denote this encounter.
    else
      ++a[arr[i]-1]; 
  }
}