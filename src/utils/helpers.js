export function isValidEmail(email) {
    // Basic email format validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

export function isValidMessage(message) {
    // Basic message validation
    return message.length > 0;
  };
