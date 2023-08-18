export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //This regex ensures there is text before the '@', text after the '@', and then a period followed by more text.
  return regex.test(email);
}
export function isNumeric(str) {
  const regex = /^\d+$/; // regex for checking if the string contains only numbers
  return regex.test(str);
}
