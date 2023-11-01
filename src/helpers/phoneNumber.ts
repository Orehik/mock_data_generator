export function generateRussianPhoneNumber(): string {
  const secondDigit = Math.floor(Math.random() * 10);
  const thirdDigit = Math.floor(Math.random() * 10);
  const areaCode = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  const phoneNumber = Math.floor(Math.random() * 100).toString().padStart(2, '0');
  const lastNumber = Math.floor(Math.random() * 100).toString().padStart(2, '0');

  return `9${secondDigit}${thirdDigit} ${areaCode} ${phoneNumber} ${lastNumber}`;
}
