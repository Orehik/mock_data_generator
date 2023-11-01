export function generateEmail() {
  const emailRegex = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_.+-';
  let email = '';

  // Генерируем случайную строку для имени пользователя
  for (let i = 0; i < 10; i++) {
    email += characters[Math.floor(Math.random() * characters.length)];
  }

  // Генерируем случайную строку для домена
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com'];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];

  email += `@${randomDomain}`;

  // Проверяем, соответствует ли сгенерированная электронная почта регулярному выражению
  if (email.match(emailRegex)) {
    return email;
  } else {
    // Если не соответствует, повторяем генерацию
    return generateEmail();
  }
}
