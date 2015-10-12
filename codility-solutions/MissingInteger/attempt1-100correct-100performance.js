function solution(A) {
    var arr = [];
    var i;
    var runningMax = 0;
    
    for (i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            arr[A[i]] = true;   
        }
        if (A[i] > runningMax) {
            runningMax = A[i];   
        }
    }
    
    for (i = 1; i <= runningMax+1; i++) {
        if (arr[i] === undefined) {
            return i;   
        }
    }
}