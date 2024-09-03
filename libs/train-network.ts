import { backPropagate } from "./back-propagate";
import { forwardPass } from "./forward-pass";
import { TrainNetworkInput } from "../types";
import { saveModel } from "../utils";

export const trainNetwork = ({
  modelName,
  data,
  labels,
  epochs = 10,
  learningRate = 0.001,
  bias = 0,
  activationFunction,
  errorFunction,
}: TrainNetworkInput) => {
  console.log("Started training the network");
  console.log(
    `Epochs: ${epochs}, Learning Rate: ${learningRate}, Bias: ${bias}`
  );

  const weights: number[] = [];
  for (let index = 0; index < data.length; index++) {
    weights.push(Math.random());
  }

  for (let epoch = 0; epoch < epochs; epoch++) {
    for (let index = 0; index < data.length; index++) {
      const output = forwardPass({
        inputs: data[index],
        weights,
        bias,
        activationFunction,
      });

      backPropagate({
        expected: labels[index],
        output,
        weights,
        learningRate,
        errorFunction,
      });
    }
  }

  saveModel(weights, bias, `models/${modelName}.json`);

  console.log("Training completed");
};
