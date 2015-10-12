function solution(X, A) {
    var leafArr = Array.apply(null, Array(X)).map(Boolean.prototype.valueOf, false);
    var i;
    var progress = 0;
    
    for (i = 0; i < A.length; i++) {
        if (leafArr[A[i]-1] === false) {
            leafArr[A[i]-1] = true;
            progress++;
        }
        if (progress === X) {
            return i;   
        }
    }
    
    return -1;
}