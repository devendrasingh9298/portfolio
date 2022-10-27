const section = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controller');
const sectionBtn = document.querySelectorAll('.control');
const allSelector = document.querySelector('.main-content');

function pageTransitions() {
  for (let i = 0; i < sectionBtn.length; i++) {
    sectionBtn[i].addEventListener('click', function () {
      let currBtn = document.querySelectorAll('.active-btn');
      currBtn[0].className = currBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  }
  allSelector.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectionBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      section.forEach((section) => {
        section.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
  const lightAndDark = document.querySelector('.theme-btn');
  lightAndDark.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}

pageTransitions();
