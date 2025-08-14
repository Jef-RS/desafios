import prompt from "prompt";
import { qrcodeSchema } from "../../prompts/index.js";
import QrCodeHandle from "./handle.js";

async function QrCodeService() {
  prompt.get(qrcodeSchema, async (error, result) => await QrCodeHandle(result));
  prompt.start();
}

export default QrCodeService;
