import chalk from "chalk";

const qrcodeSchema = [
  {
    name: "link",
    description: chalk
      .hex("#2986CC")
      .bold("Digite o link para gerar o QR Code"),
    message: chalk.bold
      .hex("#FF0000")
      .italic(
        "❌ Link valido não fornecido (o link deve conter http:// ou https://) ❌"
      ),
    pattern: /^(https?:\/\/)[^\s$.?#].[^\s]*$/i,
    required: true,
  },
  {
    name: "type",
    description: chalk
      .hex("#2986CC")
      .bold("Escolha o tipo de QR Code: [1] NORMAL | [2] TERMINAL"),
    pattern: /^[1-2]+$/,
    message: chalk.bold.hex("#FF0000").italic("Escolha apenas entre o 1 ou 2"),
    required: true,
  },
];

export default qrcodeSchema;
