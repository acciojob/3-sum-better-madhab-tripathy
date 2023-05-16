function threeSum(arr, target) {
// write your code here
	let min = Number.MAX_VALUE
    let sorted = arr.sort((a, b) => a - b)
    let ans = 0
    for(let i = 0; i < sorted.length-2; i++) {
        let start = i+1, end = sorted.length-1
        while(start < end) {
            let temp = arr[start]+arr[end]+arr[i]
            if(Math.abs(target - temp) < min){
                ans = temp
                min = Math.abs(target - temp)
            }
            if(temp === target) {
                return temp;
            }
            if(temp > target) {
                end--;
            }else{
                start++;
            }
        }
    }  
    return ans;
  
}

module.exports = threeSum;
