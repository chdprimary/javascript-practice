function sum(a,b) {
    return a+b;   
}

function print(p,B,C) {
    console.log("P=" + p + " B=[ " + B + " ] C= [ " + C + " ]");
}

function solution(A) {
    var min = undefined;
    var B = [];
    var C = [];
    var difference = 0;
    
    for (var p = 1; p < A.length; p++) {
        B = A.slice();
        C = B.splice(p, B.length-p);
        
        difference = Math.abs(B.reduce(sum) - C.reduce(sum));
        
        if (difference < min || min === undefined) {
            min = difference;
        }
    }
    
    return min;
}