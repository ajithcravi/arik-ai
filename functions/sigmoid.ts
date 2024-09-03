export const sigmoid = (x: number) => 1 / (1 + Math.exp(-x));

export const sigmoidDerivative = (x: number) => x * (1 - x);
