import chalk from "chalk";
import PasswordHandle from "./handle.js";

async function PasswordService() {
  const password = await PasswordHandle();
  console.log(chalk.hex("#20FF13").bold("✅ Password: ") + password);
}

export default PasswordService;
