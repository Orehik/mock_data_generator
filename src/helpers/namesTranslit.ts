import { CONVERTER } from "../constants";

export function transliterator(value: string): string {
  let answer = '';

  for (let i = 0; i < value.length; i++) {
    if (CONVERTER[value[i]] === undefined) {
      answer += value[i];
    } else {
      answer += CONVERTER[value[i]];
    }
  }

  return answer;
}

