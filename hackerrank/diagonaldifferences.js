function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0; 
  const length = arr.length; 

  arr.forEach((element, index, arr) => {
    diag1 += element[index];
    diag2 += element[length - 1 - index]
  });

  return Math.abs(diag1-diag2);
}

const sq = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]

console.log(diagonalDifference(sq));

// 11 + 5 + -12 = 4, 4+5+10=19, 4-19 = |15|

// First: you loop through the first array 0 => [0, 1, 2],
// Second: you loop througn the second array 1 => [0,1,2],
// Third: you loop through the third array 2 => [0,1,2]

// First: to get the first element => currentIndex = 0
// First: to get the last element => length - 1 - currentIndex = 3-1-0 = 2

// Second: to get the second element to make diagonal => currentIndex = 1
// Second: to get the second last element to make the diagonaol => length - 1 - currentIndex = 3-1-1 = 1

// Third: to get the third and last element to make diagonal => currentIndex = 2
// Third: to get the third and last element to complete the diagonal => length - 1- currentIndex = 3-1-2 = 0