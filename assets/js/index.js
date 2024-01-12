/* Skills */
const skillsTech = document.querySelector('.skills-tech')

const skills = [
{
    path: 'assets/img/css.svg',
    name: 'CSS'
},
{
    path: 'assets/img/github.svg',
    name: 'Github'
},
{
    path: 'assets/img/html.svg',
    name: 'HTML'
},
{
    path: 'assets/img/java.svg',
    name: 'Java'
},
{
    path: 'assets/img/javascript.svg',
    name: 'Javascript'
},
{
   path: 'assets/img/mongodb.svg',
    name: 'MongoDB'
},
{
    path: 'assets/img/postgres.svg',
    name: 'PostgreSQL'
},
{
    path: 'assets/img/python.svg',
    name: 'Python'
}
]

let str = ''

for (const skill of skills) {
    str += `
    <div class="skill">
    <img src="${skill.path}" alt="${skill.name}">
    <h3>${skill.name}</h3>
    </div>
    `
}

skillsTech.innerHTML = str

/* NavBar */
const navbar = document.querySelector('.nav')
const menu = document.querySelector('.nav-menu')
const links = document.querySelectorAll('.list-link')

navbar.addEventListener('click', function (e){
    if (e.target.closest('.btn-open')) {
        menu.classList.toggle('show-menu')
    }

    if (e.target.closest('.btn-close')) {
        menu.classList.remove('show-menu')
    }

    if (e.target.closest('.list-link')) {
        menu.classList.remove('show-menu')
    }

    if (e.target.closest('.list-link')) {
        for (const link of links) {
            link.parentElement.classList.remove('active')
        }

        e.target.parentElement.classList.add('active')
    }
})

/* Light Mode */
const btnLight = document.querySelector('.btn-theme')

// Comprobar si Light Mode esta activado
const theme = window.localStorage.getItem('theme')

if (theme) {
    document.body.classList.add('light')
    changeTheme(true)    
}else{
    document.body.classList.remove('light')
    changeTheme(false)
}

btnLight.addEventListener('click', function() {
    document.body.classList.toggle('light')

    if (document.body.classList.contains('light')) {
        changeTheme(true)
    } else {
        changeTheme(false)
    }
})

function changeTheme (bool) {
    if (bool) {
        btnLight.firstElementChild.classList.remove('bxs-moon')
        btnLight.firstElementChild.classList.add('bxs-sun')
        window.localStorage.setItem('theme', 'light')
    }else{
        btnLight.firstElementChild.classList.remove('bxs-sun')
        btnLight.firstElementChild.classList.add('bxs-moon')
        window.localStorage.removeItem('theme')
    }
}


/* Scroll Section ID */
const sections = document.querySelectorAll('section[id]')

let prevPos = window.scrollY

window.addEventListener('scroll', function () {
  const currentPos = window.scrollY

  for (const section of sections) {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 200
    const sectionId = section.getAttribute('id')
    const currentElement = document.querySelector(`.list-link[href*='${sectionId}']`)

    if (prevPos > sectionTop && prevPos <= sectionTop + sectionHeight) {
      currentElement.parentElement.classList.add('active')
    } else {
      currentElement.parentElement.classList.remove('active')
    }
  }

  prevPos = currentPos
})