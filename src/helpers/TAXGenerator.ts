function zeros(str,lng) {
  const factlength = str.length;
  if (factlength < lng) {
    for (let i = 0; i < (lng - factlength); i++)
    {
      str = '0' + str;
    }
  }
  return str;
}

export function TAXGenerator() {
  const innRegex = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

  const region = zeros(String(Math.floor((Math.random() * 92) + 1)),2);
  const inspection = zeros(String(Math.floor((Math.random() * 99) + 1)),2);
  const numba = zeros(String(Math.floor((Math.random() * 999999) + 1)),6);
  let rezult = region + inspection + numba;
  let kontr = String(((
    7*rezult[0] + 2*rezult[1] + 4*rezult[2] +
    10*rezult[3] + 3*rezult[4] + 5*rezult[5] +
    9*rezult[6] + 4*rezult[7] + 6*rezult[8] +
    8*rezult[9]
  ) % 11) % 10);
  kontr == 10 ? kontr = 0: kontr = kontr;
  rezult = rezult + kontr;
  kontr = String(((
    3*rezult[0] +  7*rezult[1] + 2*rezult[2] +
    4*rezult[3] + 10*rezult[4] + 3*rezult[5] +
    5*rezult[6] +  9*rezult[7] + 4*rezult[8] +
    6*rezult[9] +  8*rezult[10]
  ) % 11) % 10);
  kontr == 10 ? kontr = 0: kontr = kontr;
  rezult = rezult + kontr;

  // Проверяем, соответствует ли сгенерированная электронная почта регулярному выражению
    return rezult;
  // if (rezult.match(innRegex)) {
  // }
}
