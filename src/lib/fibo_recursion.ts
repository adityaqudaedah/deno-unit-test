function fibo(num: number): number {
  if (num < 2) return num;

  return fibo(num - 2) + fibo(num - 1);
}

export const fibo_recursion = (num: number): number[] => {
  const seq = [];

  for (let i = 0; i < num; ++i) {
    seq.push(fibo(i));
  }
  return seq;
};
