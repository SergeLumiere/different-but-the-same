const inp = document.querySelector('.input');
const btnm = document.querySelector('.button');
// btnm.setAttribute('disabled', true);
inp.oninput = function () {
  if (inp.value.length < 2) {
    btnm.setAttribute('disabled', true);
  } else {
    btnm.removeAttribute('disabled');
  }
};
