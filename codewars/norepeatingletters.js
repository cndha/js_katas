var uniqueInOrder=function(iterable){
  let array = [];
  
  for (let i = 0; i<iterable.length; i++) {
    if (iterable[i] !== iterable[i-1]){
      array.push(iterable[i]);
    }
  };
  console.log(array);
  return array;
}


uniqueInOrder('AAAABBBCCDAABBB');
uniqueInOrder('ABBCcAD');
uniqueInOrder([1,2,2,3,3]);