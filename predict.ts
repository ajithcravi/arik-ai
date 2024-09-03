import { predict } from "./libs";

const value = predict({ inputs: [0.3, 0.7], modelName: "arik" });

console.log(value);
