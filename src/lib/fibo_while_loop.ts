const seq : number[] = [0, 1]

export function fibo_while_loop(num: number): number[]{
    
    
    let i = 2;
    while (num > 2) {
        seq[i] = seq[i - 2] + seq[i - 1]
        --num
        ++i
    }
    return seq
}