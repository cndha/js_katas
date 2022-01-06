function spinWords(string){
  const result = [];
  const words = string.split(" ");
  
  for (let word of words) {
    if (word.length >= 5) {
      const reverse = word.split('').reverse().join('');
      result.push(reverse);
    } else {
      result.push(word)
    }
  }

  return result.join(' ');
}

//alternate answer:
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

spinWords("Hey fellow warriors");
spinWords( "This is another test" );
spinWords("Welcome");

