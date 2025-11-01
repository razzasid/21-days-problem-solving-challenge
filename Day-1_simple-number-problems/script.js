// Brute force solution

const num = 10;

// sol:1
for (let i = 1; i <= num; i++) {
  // console.log(i);
}

// sol:2
for (let i = 1; i <= num; i++) {
  // console.log(num - i + 1);
}

// sol:3
for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

// sol:4
let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
// console.log(sum);

// sol:5
let mul = 1;
for (let i = 1; i <= num; i++) {
  mul *= i;
}
// console.log(mul);

// sol:6
// let sum = 0;
for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
// console.log(sum);

// sol:7
for (let i = 1; i <= num; i++) {
  // console.log(Math.pow(i, 2));
  // console.log(i ** 2);
}
