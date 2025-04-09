const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
const numberchar = "0123456789";
const specialchar = "!@#$%^&*()_+-=";

function generatePassword() {
  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const special = document.getElementById("special").checked;
  const passLength = document.getElementById("pass-length").value;
  const passwordGenerated = document.getElementById("password-generated");

  let allowedChar = "";
  let finalPass = "";
  if (uppercase) {
    allowedChar += uppercaseChar;
  }
  if (lowercase) {
    allowedChar += lowercaseChar;
  }
  if (numbers) {
    allowedChar += numberchar;
  }
  if (special) {
    allowedChar += specialchar;
  }

  for (let i = 0; i < passLength; i++) {
    const index = Math.floor(Math.random() * allowedChar.length + 1);
    finalPass += allowedChar.charAt(index);
  }

  passwordGenerated.textContent = finalPass;
}

function copyText() {
  const passwordGenerated =
    document.getElementById("password-generated").textContent;
  const copyBtn = document.getElementById("copy-pass");

  navigator.clipboard.writeText(passwordGenerated).then(() => {
    copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copied!`;
    copyBtn.classList.add("buttonCopied");
    copyBtn.style.color = "#151a5d";

    setTimeout(() => {
      copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy to Clipboard`;
      copyBtn.classList.remove("buttonCopied");
    }, 1500);
  });
}

document.addEventListener("DOMContentLoaded", generatePassword);
