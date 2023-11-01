export function generateINN() {
  const multipliersStage1 = [2, 4, 10, 3, 5, 9, 4, 6, 8];
  const multipliersStage2 = [7, ...multipliersStage1];

  let inn = '';

  // Генерация первых 9-ти цифр ИНН
  for (let i = 0; i < 9; i++) {
    inn += Math.floor(Math.random() * 10);
  }

  // Вычисление контрольных цифр
  let controlSumStage1 = 0;

  for (let i = 0; i < 9; i++) {
    controlSumStage1 += inn[i] * multipliersStage1[i];
  }

  const controlDigit1 = controlSumStage1 % 11;
  controlSumStage1 = controlDigit1 === 10 ? 0 : controlDigit1;

  inn += controlDigit1;

  let controlSumStage2 = 0;

  for (let i = 0; i < 10; i++) {
    controlSumStage2 += inn[i] * multipliersStage2[i];
  }

  const controlDigit2 = controlSumStage2 % 11;
  controlSumStage2 = controlDigit2 === 10 ? 0 : controlDigit2;

  inn += controlDigit2;

  return inn; // Возвращаем действительное значение ИНН
}
