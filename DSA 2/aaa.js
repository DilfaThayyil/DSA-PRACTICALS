let arr = [5,7,4,2,4,6,8,9,3,4,5,6]
let map = {}
for(let i=0;i<arr.length;i++){
    if(map[arr[i]]){
        map[arr[i]]++
    }else{
        map[arr[i]] = 1
    }
}
let occurrence = []
let num
for(let key in map){
    if(map[key]>1){
        occurrence.push(map[key])
    }
}

for(let i=0;i<occurrence.length;i++){
    console.log(arr[i],"=>",occurrence[i])
}