import { BackPropagateInput } from "../types";

/**
 * Generates the back-propagate value for the neural network
 *
 * @param expected: number
 * @param output: number
 * @param weights: number[]
 * @param learningRate: number
 * @param errorFunction: function
 *
 * @returns number
 */
export const backPropagate = ({
  expected,
  output,
  weights,
  learningRate,
  errorFunction,
}: BackPropagateInput) => {
  const error = expected - output;

  for (let index = 0; index < weights.length; index++) {
    weights[index] = learningRate * error * errorFunction(output);
  }
};
