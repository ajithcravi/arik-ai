import { writeFileSync } from "fs";

export const saveModel = (
  weights: number[],
  bias: number,
  filePath: string
) => {
  const model = { weights, bias };
  writeFileSync(filePath, JSON.stringify(model));
};
