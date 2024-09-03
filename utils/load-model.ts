import { readFileSync } from "fs";
import { Model } from "../types";

export const loadModel = (filePath): Model => {
  const rawData = readFileSync(filePath).toString();
  const model = JSON.parse(rawData);
  return model as unknown as Model;
};
