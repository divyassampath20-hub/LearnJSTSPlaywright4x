const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a number: ', (input) => {
  const n = Number(input);

  if (input.trim() === '' || !Number.isFinite(n)) {
    console.error('Please enter a valid number.');
    rl.close();
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }

  rl.close();
});