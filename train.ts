import { sigmoid, sigmoidDerivative } from "./functions";
import { trainNetwork } from "./libs/train-network";

trainNetwork({
  modelName: "arik",
  data: [
    [0.1, 0.2],
    [0.4, 0.5],
    [0.2, 0.3],
    [0.5, 0.6],
    [0.3, 0.2],
    [0.6, 0.7],
  ],
  labels: [0, 1, 0, 1, 0, 1],
  activationFunction: sigmoid,
  errorFunction: sigmoidDerivative,
  epochs: 1000,
});
