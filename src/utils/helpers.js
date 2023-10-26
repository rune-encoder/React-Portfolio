export function isValidEmail(email) {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
}

export function isValidMessage(message) {
  return message.length > 0; // Checks that the message is not empty
}

export function isValidName(name) {
  return name.trim() !== ""; // Checks that the name is not empty or just spaces
}
