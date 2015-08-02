function solution(A) {
    for (var i = 1; i <= A.length+1; i++) {
        if (A.indexOf(i) === -1) {
            return i;
        }
    }
}