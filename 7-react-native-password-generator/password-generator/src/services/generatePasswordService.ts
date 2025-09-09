export function generatePasswordToken(length = 8) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?/`~-=\\\"'";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomPosition = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomPosition);
  }

  return password;
}
