// 10. Solve https://www.hackerrank.com/challenges/compare-the-triplets - be mindful that you are required to print the output 
// to the console in exactly the format that was asked. You are not required to return a value, just print to the console. 
// Also be mindful to use JavaScript.

var bscore = 0;
var ascore = 0;
var i = 0;
// Complete the solve function below.
function solve(a, b) {
    if (i < a.length) {
        if (a[i] < b[i]) ++bscore;
        if (a[i] > b[i]) ++ascore;
        i++;
        solve(a, b);
    }

    return ascore + " " + bscore;
}

function main() {

    const a = [5, 6, 7];

    const b = [3, 6, 10];

    let result = solve(a, b);

    console.log(result);
}

main();