let arr = [1,2,3,4,1,2,3,4,5,6,6,6]
let map = {}

for(let i=0;i<arr.length;i++){
    if(map[arr[i]]){
        map[arr[i]]++
    }else{
        map[arr[i]] = 1
    }
}

let occurence = 1;
let num = null;
for(let key in map){
    if(map[key]===occurence){
        occurence = map[key]
        num=key
    }
}

console.log(num, '=>', occurence)