
    // climbing staircase

function climbingStaircase(n){
    const numWays = [1,2]
    for(let i=2;i<=n;i++){
        numWays[i] = numWays[i-1] + numWays[i-2]
    }
    return numWays[n-1]
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))

    // Big-O = O(n)