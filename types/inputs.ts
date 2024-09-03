export type ForwardPassInput = {
  inputs: number[];
  weights: number[];
  activationFunction: (x: number) => number;
  bias?: number;
};

export type BackPropagateInput = {
  expected: number;
  output: number;
  weights: number[];
  learningRate: number;
  errorFunction: (x: number) => number;
};

export type TrainNetworkInput = {
  modelName: string;
  data: number[][];
  labels: number[];
  activationFunction: (x: number) => number;
  errorFunction: (x: number) => number;
  epochs?: number;
  learningRate?: number;
  bias?: number;
};

export type PredictionInput = {
  inputs: number[];
  modelName: string;
};
