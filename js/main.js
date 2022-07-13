const body = document.querySelector('body')
const toggle = document.querySelector('.toggle')
const offcanvasToggle = document.querySelector('.offcanvas-toggle')
const offcanvas = document.querySelector('.offcanvas')
const collapseLink = document.querySelector('.collapse-link')
const collapseNav = document.querySelector('.collapse-nav')
const rotate = document.querySelector('.rotate')

toggle.addEventListener('click', () => {
  offcanvas.classList.add('show-offcanvas')
})

offcanvasToggle.addEventListener('click', () => {
  offcanvas.classList.remove('show-offcanvas')

  collapseNav.classList.remove('show-collapse-nav')
  rotate.classList.remove('is-rotate')
})

collapseLink.addEventListener('click', () => {
  collapseNav.classList.toggle('show-collapse-nav')
  rotate.classList.toggle('is-rotate')
})

