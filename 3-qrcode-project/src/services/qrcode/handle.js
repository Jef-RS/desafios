import chalk from "chalk";
import qr from "qrcode-terminal";

async function QrCodeHandle(result) {
  const isSmaller = result?.type === "2";

  qr.generate(result.link, { small: isSmaller }, (qrcode) => {
    console.log(
      chalk.hex("#20FF13").bold("\n✅ Seu QR Code foi gerado com sucesso: \n")
    );
    console.log(qrcode);
  });
}

export default QrCodeHandle;
