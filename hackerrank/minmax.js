function miniMaxSum(arr) {
  arr.sort((a,b) => a-b);
  console.log(
    String(arr.slice(0,4).reduce((a,b) => a+b)) 
    + ' ' + 
    String(arr.slice(1,5).reduce((a,b) => a+b))
  );
}

// const arr = [1, 3, 5, 7, 9]; //return: 16 24
const arr = [7, 69, 2, 221, 8974] //return: 299 9271
miniMaxSum(arr);
