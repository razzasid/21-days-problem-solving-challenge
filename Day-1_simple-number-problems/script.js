let num = 20;

for (let i = 1; i <= num; i++) {
  let sqrt = Math.sqrt(i);
  if (sqrt === Math.floor(sqrt) && i % 2 === 0) {
    console.log(i);
  }
}