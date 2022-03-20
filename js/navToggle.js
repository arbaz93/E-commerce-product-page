const navToggleBtn = document.querySelectorAll('.mobile-nav-toggle');
const navigation = document.querySelector('nav');

navToggleBtn.forEach(btn => {
  btn.addEventListener('click', toggleNav);
})
function toggleNav() {
  console.log(this.ariaExpanded)
  if(this.ariaExpanded == 'false') {
    navigation.classList.add('openNav');
    navToggleBtn.forEach(btn => {
      btn.style.backgroundImage = 'url(./images/icon-close.svg)';
      btn.ariaExpanded = 'true';
    })
  } else {
    navigation.classList.remove('openNav');
    navToggleBtn.forEach(btn => {
      btn.style.backgroundImage = 'url(./images/icon-menu.svg)'
      btn.ariaExpanded = 'false';
    })

  }
}