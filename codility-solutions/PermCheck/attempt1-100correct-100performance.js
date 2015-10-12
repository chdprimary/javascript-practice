function solution(A) {
    var storage = Array.apply(null, Array(A.length)).map(Boolean.prototype.valueOf, false);
    var i;
    
    for (i = 0; i < A.length; i++) {
        if (A[i] > A.length) { // have detected an "extra" number
            return 0;
        }
        if (storage[A[i]-1] === false) {
            storage[A[i]-1] = true;
        } else { // have detected a duplicate
            return 0;
        }
    }
    
    return 1;
}