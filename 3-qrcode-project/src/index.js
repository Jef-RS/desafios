import prompt from "prompt";
import { mainSchema } from "./prompts/index.js";
import { PasswordService, QrCodeService } from "./services/index.js";

(async function main() {
  prompt.get(mainSchema, async (error, choose) => {
    if (choose.select === "1") await QrCodeService();
    if (choose.select === "2") await PasswordService();
  });
  prompt.start();
})();
