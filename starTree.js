//left-aligned triangle:
function starTree(n) {
  let str = '';

  for (let i = 1; i<=n; i++) {
    for (let j=0; j<i; j++) {
      str += '+';
    }
    str += '\n';
  }

  console.log(str)
}
starTree(5);

//right-aligned triangle:
function starTree(n) {
  let str = '';

  for (let i = 1; i <= n; i++) {

    for (let j = 0; j < n-i; j++) {
      str += ' ';
    }

    for (let k = 0; k < i; k++) {
      str += '+';
    }
    
    str += '\n';
  }

  console.log(str)
}
starTree(5)

//left-aligned upside down triangle: 
function upsideDown(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n-i; k++) {
      str += '+'
    }
    str += '\n'
  }
  console.log(str)
}
upsideDown(8)

//square:
function squareTree(n) {
  let str = '';

  for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++){
      str += '+'
    }
    str += '\n';
  }

  console.log(str)
}
squareTree(7);

//hollow square: 
function hollow(n) {
  let str = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        str += '+'
      } else {
        if (j === 0 || j === n - 1) {
          str += '*'
        } else {
          str += ' ';
        }
      }
    }
    str += '\n';
  }

  console.log(str)
}
hollow(5)

//hollow left triangle: 
function hollowTri(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (i === n) {
        str += '+';
      } else {
        if (j === 0 || j == i-1) {
          str += '*';
        } else {
          str += ' ';
        }
      }
    }
    str += '\n';
  }

  console.log(str)
}
hollowTri(8)

//pyramid: 
function pyr(n) {
  let str = '';

  for (let i = 1; i <= n; i++){
    for (let j = 1; j<=n-i; j++) {
      str += ' ';
    }

    for (let k=0; k < 2*i-1; k++) {
      str += '+';
    }

    str += '\n'
  }

  console.log(str)
}
pyr(5);

//reverse pyramid: 
function revPyr(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      str += ' ';
    }

    for (let k = 0; k < 2*(n-i)-1; k++) {
      str += '+'
    }

    str += '\n'
  }
  console.log(str)
}
revPyr(5)

//hollow pyramid: 
function hollowPyr(n) {
  let str = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n-i; j++) {
      str += ' ';
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      if (i === 1 || i === n) {
        str += '+'
      } else {
        if (k === 0 || k === 2 * i - 2) {
          str += '*'
        } else {
          str += ' '
        }
      }
    }
    str += '\n'
  }
  console.log(str)
}
hollowPyr(5)