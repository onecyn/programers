function solution(a, b) {
    var sum = 0;
    for(var i=0; i<a.length; i++){
        sum = sum + a[i]*b[i];
    }
    return sum;
}


// function solution(a, b) {
//     return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
// }
