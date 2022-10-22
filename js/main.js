const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const allNavItems = document.querySelectorAll('.nav__link')
const bodyScroll = document.querySelector('body')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active'), navBtn.classList.remove('is-active')
		})
	})
}
// no scroll temporary
   const noScroll = () => {
      navMobile.classList.remove('nav-mobile--active'), navBtn.classList.remove('is-active')
   }


navBtn.addEventListener('click', handleNav)
bodyScroll.addEventListener('scroll', noScroll)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year;
}
handleCurrentYear();
