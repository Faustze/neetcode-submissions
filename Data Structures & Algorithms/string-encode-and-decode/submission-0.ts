class Solution {
  constructor() {

  }

  encode(strs: string[]): string {
    // [length] + "#" + [data]
    let encoded_string = ''
    for (const word of strs) {
      encoded_string += word.length + '#' + word
    }
    return encoded_string
  }

  decode(s: string): string[] {
    // читаю число (пока не #)
    // остановился на #
    // сдвинулся на 1 символ
    // взял N символов
    // повторил
    const decoded: string[] = []
    let idx = 0

    while (idx < s.length) {
      let length: string = ''
      while (idx < s.length && s[idx] !== '#') {
        length += s[idx]
        idx += 1
      }
      const numLength = Number(length)
      decoded.push(s.slice(idx + 1, idx + numLength + 1))
      idx += numLength + 1
    }
    return decoded
  }
}