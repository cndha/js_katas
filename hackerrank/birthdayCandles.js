// const n = 4; //length of the candles[]
// const candles = [3, 1, 2, 3]; //heights of the candles given 
//return 2 (the tallest candles are 3 units, and there's 2 of them)

function birthdayCandles(candles) {
  const n = candles.length; 
  let tallestCandles = 0;

  // find maximum number in array
  const max = Math.max(...candles);
  
  // loop through array, each time it finds this max number, +1 
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      tallestCandles += 1;
    }
  }
  return tallestCandles;
}

const candles = [3, 2, 1, 3];
birthdayCandles(candles);