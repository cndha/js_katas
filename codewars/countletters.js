function count (string) {  
  const result = {};
  
  for (let i of string) {
    if (result[i]){
      result[i] = result[i] + 1;
    } else {
      result[i] = 1;
    }
  }

  return result;
}

count("aba");
count("cindy");