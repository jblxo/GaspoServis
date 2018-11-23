const scrollToSectionAbout = () => {
  window.scroll({
    top: 800,
    left: 0,
    behavior: 'smooth'
  });
};

const scrollToSectionContact = () => {
  window.scroll({
    top: 2300,
    left: 0,
    behavior: 'smooth'
  });
};

window.addEventListener('scroll', e => {
  if (window.scrollY >= 500) {
    return document.querySelector('#arrow').classList.remove('arrow--animated');
  }
  return document.querySelector('#arrow').classList.add('arrow--animated');
});

const currentYear = new Date().getFullYear().toString();

document.querySelector('#current-year').innerHTML = currentYear;
