let characters = "";

async function CharactersOption() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const num = "0123456789";
  const specialCharacter = "!@#$%*()_";

  if (process.env.PASSWORD_GENERATE_LOWERCASE_LETTERS === "true")
    characters += alphabet;
  if (process.env.PASSWORD_GENERATE_UPPERCASE_LETTERS === "true")
    characters += alphabet.toUpperCase();
  if (process.env.PASSWORD_GENERATE_NUMBERS === "true") characters += num;
  if (process.env.PASSWORD_GENERATE_SPECIAL_CHARACTERS === "true")
    characters += specialCharacter;

  return characters;
}

async function PasswordHandle() {
  const length = process.env.PASSWORD_GENERATE_LENGTH;
  let password = "";

  const chars = await CharactersOption();

  for (let i = 0; i < length; i++) {
    const char = chars.charAt(Math.floor(Math.random() * characters.length));
    password += char;
  }
  return password;
}

export default PasswordHandle;
