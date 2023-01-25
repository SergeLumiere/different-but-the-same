inp = document.querySelector('.inp');
btnm = document.querySelector('.btnm');
// btnm.setAttribute('disabled', true);
inp.oninput = function () {
  if (inp.value.length < 2) {
    btnm.setAttribute('disabled', true);
  } else {
    btnm.removeAttribute('disabled');
  }
};
