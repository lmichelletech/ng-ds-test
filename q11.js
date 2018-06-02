// 11. Solve https://www.hackerrank.com/challenges/mini-max-sum - be mindful that you are required to print the 
// output to the console in exactly the format that was asked. You are not required to return a value, just print to 
// the console. Also be mindful to use JavaScript.

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    if(arr.length !== null){
        var minTotal = 0;
        var maxTotal = 0;
        var max = arr.indexOf(Math.max(...arr));
        var min = arr.indexOf(Math.min(...arr));

        for(var i = 0; i < arr.length; i++){
            if(i !== max )
            {
                minTotal += arr[i];
            }

            if(i !== min){
                maxTotal += arr[i];
            }
        }

        var result = (minTotal + " " + maxTotal);
        console.log(result);
    }

}

function main() {
    let arr = [5, 5, 5, 5, 5];
    console.log(miniMaxSum(arr));
}

main();