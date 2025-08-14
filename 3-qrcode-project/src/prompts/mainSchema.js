import chalk from "chalk";

const mainSchema = [
  {
    name: "select",
    pattern: /^[1-2]+$/,
    description: chalk
      .hex("#2986CC")
      .bold("Escolha a Ferramenta: [1] QR Code | [2] Password"),
    message: chalk.bold
      .hex("#FF0000")
      .italic("❌ Escolha apenas entre o numero 1 e 2 ❌"),
    required: true,
  },
];

export default mainSchema;
