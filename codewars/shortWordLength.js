function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}

findShort("bitcoin take over the world maybe who knows perhaps");
findShort("turns out random test cases are easier than writing out basic ones");
findShort("Let's travel abroad shall we");