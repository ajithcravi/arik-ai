import { ForwardPassInput } from "../types";

/**
 * Generates the forward-pass value for the neural network
 *
 * @param inputs: number[]
 * @param weights: number[]
 * @param bias: number
 * @param activationFunction: function
 *
 * @returns number
 */
export const forwardPass = ({
  inputs,
  weights,
  bias = 0,
  activationFunction,
}: ForwardPassInput) => {
  // Get the sum of the weighted inputs
  let sum = 0;

  for (let index = 0; index < inputs.length; index++) {
    sum += inputs[index] * weights[index];
  }

  return activationFunction(sum + bias);
};
