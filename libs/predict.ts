import { PredictionInput } from "../types";
import { forwardPass } from "./forward-pass";
import { sigmoid } from "../functions";
import { loadModel } from "../utils";

export const predict = ({ inputs, modelName }: PredictionInput): number => {
  const model = loadModel(`models/${modelName}.json`);

  return forwardPass({
    inputs,
    weights: model.weights,
    activationFunction: sigmoid,
  });
};
