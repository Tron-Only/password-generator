const passwordLength = 12;
const includeLowercase = false;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
const passwordGenerated = document.getElementById("passwordGenerated");
const title = document.getElementById("title");
const button = document.getElementById("button");

// const password = generatePassword(
//   passwordLength,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols
// );

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    passwordGenerated.textContent = `(password length must be at least 1)`;
  }

  if (allowedChars.length === 0) {
    passwordGenerated.textContent = `(At least one set of characters needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  passwordGenerated.textContent = password;
  title.innerHTML = "Your Generated Password is:";
  button.innerText = "Regenerate";
}
