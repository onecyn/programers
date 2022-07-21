function solution(numbers) {
    let answer = 0;
    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) {
            answer += i;
        }
    }
    return answer;
}

// function solution(numbers) {
//   return 45 - numbers.reduce((acc, e) => acc + e, 0);
// }