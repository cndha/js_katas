function compareTriplets(a, b) {
  let points = [0, 0]

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      points[0]++;
    } else if (a[i] < b[i]) {
      points[1]++;
    } 
  }
  return points;
}

//alternate answer:
function compareTriplets(a, b) { 
  let score = [0,0]; 

  for (let i = 0; i < a.length; i++) { 
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : null 
  } 

  return score; 
}

const a1 = [5, 6, 7];
const b1 = [3, 6, 10];
console.log(compareTriplets(a1, b1));

