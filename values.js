const values = [
  {
    lowru: 'ё',
    uppru: 'Ё',
    loweng: '`',
    uppeng: '~',
    keycode: '192',
  },
  {
    lowru: '1',
    uppru: '!',
    loweng: '1',
    uppeng: '!',
    keycode: '49',
  },
  {
    lowru: '2',
    uppru: '"',
    loweng: '2',
    uppeng: '@',
    keycode: '50',
  },
  {
    lowru: '3',
    uppru: '№',
    loweng: '3',
    uppeng: '#',
    keycode: '51',
  },
  {
    lowru: '4',
    uppru: ';',
    loweng: '4',
    uppeng: '\$',
    keycode: '52',
  },
  {
    lowru: '5',
    uppru: '%',
    loweng: '5',
    uppeng: '%',
    keycode: '53',
  },
  {
    lowru: '6',
    uppru: ':',
    loweng: '6',
    uppeng: '^',
    keycode: '54',
  },
  {
    lowru: '7',
    uppru: '?',
    loweng: '7',
    uppeng: '&',
    keycode: '55',
  },
  {
    lowru: '8',
    uppru: '*',
    loweng: '8',
    uppeng: '*',
    keycode: '56',
  },
  {
    lowru: '9',
    uppru: '(',
    loweng: '9',
    uppeng: '(',
    keycode: '57',
  },
  {
    lowru: '0',
    uppru: ')',
    loweng: '0',
    uppeng: ')',
    keycode: '48',
  },
  {
    lowru: '-',
    uppru: '_',
    loweng: '-',
    uppeng: '_',
    keycode: '189',
  },
  {
    lowru: '=',
    uppru: '+',
    loweng: '=',
    uppeng: '+',
    keycode: '187',
  },
  {
    lowru: 'Backspace',
    uppru: 'Backspace',
    loweng: 'Backspace',
    uppeng: 'Backspace',
    keycode: '8',
  },
  {
    lowru: 'Tab',
    uppru: 'Tab',
    loweng: 'Tab',
    uppeng: 'Tab',
    keycode: '9',
  },
  {
    lowru: 'й',
    uppru: 'Й',
    loweng: 'q',
    uppeng: 'Q',
    keycode: '81',
  },
  {
    lowru: 'ц',
    uppru: 'Ц',
    loweng: 'w',
    uppeng: 'W',
    keycode: '87',
  },
  {
    lowru: 'у',
    uppru: 'У',
    loweng: 'e',
    uppeng: 'E',
    keycode: '69',
  },
  {
    lowru: 'к',
    uppru: 'К',
    loweng: 'r',
    uppeng: 'R',
    keycode: '82',
  },
  {
    lowru: 'е',
    uppru: 'Е',
    loweng: 't',
    uppeng: 'T',
    keycode: '84',
  },
  {
    lowru: 'н',
    uppru: 'Н',
    loweng: 'y',
    uppeng: 'Y',
    keycode: '89',
  },
  {
    lowru: 'г',
    uppru: 'Г',
    loweng: 'u',
    uppeng: 'U',
    keycode: '85',
  },
  {
    lowru: 'ш',
    uppru: 'Ш',
    loweng: 'i',
    uppeng: 'I',
    keycode: '73',
  },
  {
    lowru: 'щ',
    uppru: 'Щ',
    loweng: 'o',
    uppeng: 'O',
    keycode: '79',
  },
  {
    lowru: 'з',
    uppru: 'З',
    loweng: 'p',
    uppeng: 'P',
    keycode: '80',
  },
  {
    lowru: 'х',
    uppru: 'Х',
    loweng: '[',
    uppeng: '{',
    keycode: '219',
  },
  {
    lowru: 'ъ',
    uppru: 'Ъ',
    loweng: ']',
    uppeng: '}',
    keycode: '221',
  },
  {
    lowru: '\\',
    uppru: '/',
    loweng: '\\',
    uppeng: '|',
    keycode: '220',
  },
  {
    lowru: 'Caps Lock',
    uppru: 'Caps Lock',
    loweng: 'Caps Lock',
    uppeng: 'Caps Lock',
    keycode: '20',
  },
  {
    lowru: 'ф',
    uppru: 'Ф',
    loweng: 'a',
    uppeng: 'A',
    keycode: '65',
  },
  {
    lowru: 'ы',
    uppru: 'Ы',
    loweng: 's',
    uppeng: 'S',
    keycode: '83',
  },
  {
    lowru: 'в',
    uppru: 'В',
    loweng: 'd',
    uppeng: 'D',
    keycode: '68',
  },
  {
    lowru: 'а',
    uppru: 'А',
    loweng: 'f',
    uppeng: 'F',
    keycode: '70',
  },
  {
    lowru: 'п',
    uppru: 'П',
    loweng: 'g',
    uppeng: 'G',
    keycode: '71',
  },
  {
    lowru: 'р',
    uppru: 'Р',
    loweng: 'h',
    uppeng: 'H',
    keycode: '72',
  },
  {
    lowru: 'о',
    uppru: 'О',
    loweng: 'j',
    uppeng: 'J',
    keycode: '74',
  },
  {
    lowru: 'л',
    uppru: 'Л',
    loweng: 'k',
    uppeng: 'K',
    keycode: '75',
  },
  {
    lowru: 'д',
    uppru: 'Д',
    loweng: 'l',
    uppeng: 'L',
    keycode: '76',
  },
  {
    lowru: 'ж',
    uppru: 'Ж',
    loweng: ';',
    uppeng: ':',
    keycode: '186',
  },
  {
    lowru: 'э',
    uppru: 'Э',
    loweng: '"',
    uppeng: '"',
    keycode: '222',
  },
  {
    lowru: 'Enter',
    uppru: 'Enter',
    loweng: 'Enter',
    uppeng: 'Enter',
    keycode: '13',
  },
  {
    lowru: 'Shift',
    uppru: 'Shift',
    loweng: 'Shift',
    uppeng: 'Shift',
    keycode: '16',
  },
  {
    lowru: 'я',
    uppru: 'Я',
    loweng: 'z',
    uppeng: 'Z',
    keycode: '90',
  },
  {
    lowru: 'ч',
    uppru: 'Ч',
    loweng: 'x',
    uppeng: 'X',
    keycode: '88',
  },
  {
    lowru: 'с',
    uppru: 'С',
    loweng: 'c',
    uppeng: 'C',
    keycode: '67',
  },
  {
    lowru: 'м',
    uppru: 'М',
    loweng: 'v',
    uppeng: 'V',
    keycode: '86',
  },
  {
    lowru: 'и',
    uppru: 'И',
    loweng: 'b',
    uppeng: 'B',
    keycode: '66',
  },
  {
    lowru: 'т',
    uppru: 'Т',
    loweng: 'n',
    uppeng: 'N',
    keycode: '78',
  },
  {
    lowru: 'ь',
    uppru: 'Ь',
    loweng: 'm',
    uppeng: 'M',
    keycode: '77',
  },
  {
    lowru: 'б',
    uppru: 'Б',
    loweng: ',',
    uppeng: '<',
    keycode: '188',
  },
  {
    lowru: 'ю',
    uppru: 'Ю',
    loweng: '.',
    uppeng: '>',
    keycode: '190',
  },
  {
    lowru: '.',
    uppru: ',',
    loweng: '/',
    uppeng: '?',
    keycode: '191',
  },
  {
    lowru: '↑',
    uppru: '↑',
    loweng: '↑',
    uppeng: '↑',
    keycode: '38',
  },
  {
    lowru: 'Shift',
    uppru: 'Shift',
    loweng: 'Shift',
    uppeng: 'Shift',
    keycode: '16',
  },

  {
    lowru: 'Ctrl',
    uppru: 'Ctrl',
    loweng: 'Ctrl',
    uppeng: 'Ctrl',
    keycode: '17',
  },

  {
    lowru: 'Win',
    uppru: 'Win',
    loweng: 'Win',
    uppeng: 'Win',
    keycode: '91',
  },
  {
    lowru: 'Alt',
    uppru: 'Alt',
    loweng: 'Alt',
    uppeng: 'Alt',
    keycode: '18',
  },
  {
    lowru: ' ',
    uppru: ' ',
    loweng: ' ',
    uppeng: ' ',
    keycode: '32'
  },

  {
    lowru: 'Alt',
    uppru: 'Alt',
    loweng: 'Alt',
    uppeng: 'Alt',
    keycode: '18',
  },
  {
    lowru: '←',
    uppru: '←',
    loweng: '←',
    uppeng: '←',
    keycode: '37'
  },
  {
    lowru: '↓',
    uppru: '↓',
    loweng: '↓',
    uppeng: '↓',
    keycode: '40'
  },
  {
    lowru: '→',
    uppru: '→',
    loweng: '→',
    uppeng: '→',
    keycode: '39'
  },
  {
    lowru: 'Ctrl',
    uppru: 'Ctrl',
    loweng: 'Ctrl',
    uppeng: 'Ctrl',
    keycode: '17',
  },

];
const specialValue = {
  'ShiftLeft': {
    name: 'ShiftLeft',
    number: 41
  },
  'ShiftRight': {
    name: 'ShiftRight',
    number: 53
  },
  'ControlLeft': {
    name: 'ControlLeft',
    number: 54
  },
  'ControlRight': {
    name: 'ControlRight',
    number: 62
  },
  'AltLeft': {
    name: 'AltLeft',
    number: 56
  },
  'AltRight': {
    name: 'AltRight',
    number: 58
  },
  'Tab': {
    name: 'Tab',
    number: 14
  },
  'CapsLock': {
    name: 'CapsLock',
    number: 28
  },
  'Enter': {
    name: 'Enter',
    number: 40
  },
  'Backspace': {
    name: 'Backspace',
    number: 13
  },
  'Space': {
    name: 'Space',
    number: 57
  }
}