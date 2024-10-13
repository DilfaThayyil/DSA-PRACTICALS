const set = new Set([1,2,3]) //true
set.add(4)  //4 is added
console.log(set.has(4));  // 4 is in set
console.log(set); // set(4) {1,2,3,4}
set.delete(3)  // remove 3
console.log(set.size);  //length of set : 3
console.log(set);  //set(3) {1,2,4}
for(const item of set){
    console.log(item);
}  // 1 2 4
set.clear() //clear all values 
console.log(set);  //set(0) {}