window.onload = () => {
  const div = document.createElement('div');
  const textarea = document.createElement('textarea');
  const shortCut = document.createElement('div');
  const p = document.createElement('p')
  let isCaps = false;
  document.body.appendChild(div);
  document.body.prepend(textarea);
  shortCut.classList.add('short_cut');
  document.body.appendChild(shortCut);
  shortCut.appendChild(p)
  p.innerText = 'To change language press CTRL + Alt'
  if (localStorage.lang === 'eng' || !localStorage.getItem('lang')) {
    for (let i = 0; i < values.length;) {
      const button = document.createElement('input');
      div.appendChild(button);
      button.setAttribute('type', 'button');
      button.setAttribute('value', `${values[i].loweng}`);
      i += 1;
    }
  }
  else if (localStorage.lang === 'ru') {
    for (let i = 0; i < values.length;) {
      const button = document.createElement('input');
      div.appendChild(button);
      button.setAttribute('type', 'button');
      button.setAttribute('value', `${values[i].lowru}`);
      i += 1;
    }
  }
  const input = document.querySelectorAll("input");
  const changeRegister = () => {
    input.forEach(e => { e.removeAttribute("value") });
    k = 0;
    if (localStorage['lang'] === 'ru' && isCaps === false) {
      isCaps = true;
      input.forEach(e => {
        e.setAttribute('value', values[k].uppru)
        k += 1;
      })
    }
    else if (localStorage['lang'] === 'eng' && isCaps === false) {
      isCaps = true;
      input.forEach(e => {
        e.setAttribute('value', values[k].uppeng)
        k += 1;
      })
    }
    else if (localStorage['lang'] === 'ru' && isCaps === true) {
      isCaps = false;
      input.forEach(e => {
        e.setAttribute('value', values[k].lowru)
        k += 1;
      })
    }
    else if (localStorage['lang'] === 'eng' && isCaps === true) {
      isCaps = false;
      input.forEach(e => {
        e.setAttribute('value', values[k].loweng)
        k += 1;
      })
    }
  }
  const checkEventCode = () => {
    console.log(`${specialValue[event.code].name}` === event.code)
    if (`${specialValue[event.code].name}` === event.code) {
      input[specialValue[event.code].number].classList.add('active')
    }
    console.log(`${specialValue[event.code].name}` === event.code)
  }
  div.addEventListener('click', (event) => {
    const { value } = event.target;
    if (value === 'Backspace') {
      textarea.innerHTML = textarea.value.slice(0, -1);
    }
    if (value !== undefined &&
      value != 'Backspace' &&
      value != 'Alt' &&
      value != 'Ctrl' &&
      value != 'Shift' &&
      value != 'Tab' &&
      value != 'Caps Lock' &&
      value != 'Enter' &&
      value != 'Win'
    ) {
      textarea.innerHTML += value;
    }
    if (value === ' ') {
      textarea.innerHTML += ''
    }
    if (value === 'Tab') {
      textarea.innerHTML += '    ';
    }
    if (value === 'Caps Lock') {
      changeRegister();
    }
  })
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    let repeating = event.repeat;
    if (event.altKey && event.ctrlKey) {
      k = 0;
      input.forEach(e => { e.removeAttribute("value") });
      if (localStorage['lang'] === 'eng' || !localStorage.getItem('lang')) {
        localStorage['lang'] = 'ru';
        input.forEach(e => {
          e.setAttribute('value', values[k].lowru)
          k += 1;
        })
      }
      else if (localStorage['lang'] === 'ru') {
        localStorage['lang'] = 'eng';
        input.forEach(e => {
          e.setAttribute('value', values[k].loweng)
          k += 1;
        })
      }
    }
    if (event.keyCode === 13) {
      textarea.innerHTML += '\n';
    }
    if (event.keyCode === 8) {
      textarea.innerHTML = textarea.value.slice(0, -1);
    }
    if (event.keyCode === 9) {
      textarea.innerHTML += '    ';
    }
    if ((event.keyCode === 16 || event.keyCode === 20) && !repeating) {
      changeRegister();
    }
    // if (event.keyCode === 37) {
    //   input[59].classList.add('active')
    //   textarea.selectionStart -= 1;
    //   textarea.selectionEnd = textarea.selectionStart;
    // }
    for (let j = 0; j < values.length;) {
      if (event.keyCode == values[j].keycode &&
        event.keyCode !== 8 &&
        event.keyCode !== 17 &&
        event.keyCode !== 18 &&
        event.keyCode !== 16 &&
        event.keyCode !== 13 &&
        event.keyCode !== 91 &&
        event.keyCode !== 20 &&
        event.keyCode !== 9
      ) {
        console.log(input[j])
        input[j].classList.add('active')
        textarea.innerHTML += `${input[j].value}`;
      }
      j += 1;
    }
    if (event.keyCode == 8 &&
      event.keyCode == 17 &&
      event.keyCode == 18 &&
      event.keyCode == 16 &&
      event.keyCode == 13 &&
      event.keyCode == 91 &&
      event.keyCode == 20 &&
      event.keyCode == 9) {
      checkEventCode();
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.keyCode == 16) {
      changeRegister();
    }
    if (event.keyCode == 32) {
      textarea.innerHTML += ' ';
    }
    for (let j = 0; j < values.length;) {
      if (event.keyCode == values[j].keycode) {
        input[j].classList.remove('active')
      }
      j += 1;
    }
  })
};
