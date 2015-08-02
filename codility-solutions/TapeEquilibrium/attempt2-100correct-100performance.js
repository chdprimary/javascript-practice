'use strict';

function sum(a,b) {
    return a+b;   
}

function print(p,B,C) {
    console.log("P=" + p + " B=[ " + B + " ] C= [ " + C + " ]");
}

function solution(A) {
    var B = 0;
    var C = 0;
    var min;
    var difference;
    
    // In case of N=2, return the absval of difference of the two values.
    if (A.length === 2) {
        return Math.abs(A[0] - A[1]);
    }
    
    // Else, put first val in B, sum rest of vals in C, initialize min to the absval of the difference.
    B += A[0];
    for (var i = 1; i < A.length; i++) {
        C += A[i];   
    }
    min = Math.abs(B - C);
    
    // For each remaining elem in A, add val to B, sub from C, if absval of difference < min, replace min.
    for (i = 1; i < A.length-1; i++) {
        B += A[i];
        C -= A[i];
        difference = Math.abs(B - C);
        
        if (difference < min) {
            min = difference;
        }
    }
    
    // Return the standing min.
    return min;
}