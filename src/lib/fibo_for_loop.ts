const fibo: number[] = [0, 1]

export function fibo_for_loop(num: number):number[]{
    
  for (let i = 2; i < num; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }
  return fibo;
}
