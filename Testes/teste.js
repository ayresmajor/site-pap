function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let num = [];
let block = [];
let block2 = [];

  for (c = 0; c <= 6; c++) {
    var pos1 = c - 2;
    var  pos2 = c -2;
   var n = randint(1, 6)
    if(c > 0){
      block.push(n);
      if(c > 1){
        while(block[pos1] == block[pos2]){
          n = randint(1, 6);
          block[pos2] = n
        }
      }
    }
    if(block.length == 2){
      block2 = block[0];
    }else if(block.length > 2){
      block2 = block.slice(0, c);
      while( block2.includes(n)){
        var d = block.indexOf(n);
        n =randint(1, 6);
        block[d] = n;
      }
    }
  }
  block.sort(function(a, b){return a - b});
  console.log(block);

