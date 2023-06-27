//animate scroll menu
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

//sticky header menu
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const headerHeight = header.offsetHeight;
const introHeight = intro.offsetHeight;

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= introHeight + headerHeight) {
        header.classList.add('fixed');
        intro.style.marginTop = `${headerHeight}px`;
    } else {
        header.classList.remove('fixed');
        intro.style.marginTop = null;
    }
});

//burger menu
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const body = document.body;
const navItems = nav?.querySelectorAll('a');
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
burger?.addEventListener('click', () => {
    body.classList.toggle('locked');
    burger?.classList.toggle('active');
    nav.classList.toggle('open');
});

navItems.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('locked');
        burger?.classList.remove('active');
        nav?.classList.remove('open');
    });
});


// active class of menu items onscroll
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (window.innerWidth > 768) {
        document.querySelectorAll('.section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
                document.querySelectorAll('.nav a').forEach((el) => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                });
                document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
            }
        });
    }
});


//modal windows

const btn = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

btn.addEventListener('click', (e) => {
    modal.classList.add('show');
});

close.addEventListener('click', (e) => {
    if (e.target == close) {
        modal.classList.remove('show');
    }
    document.getElementById("form").reset();
});


window.onclick = function(event) {

    if (event.target == modal) {
        modal.classList.remove('show');
     } else if (e.target == close) {
        modal.classList.remove('show');
     }
     document.getElementById("form").reset();
 };
// more portfolio_items
let data = Array.from(document.querySelectorAll('.portfolio__list .portfolio_item')),
    step = 6,
    item = 0;
data.slice(step).forEach(e => e.style.display = 'none');
item += step;
document.querySelector('#more').addEventListener('click', function (e) {
    let tmp = data.slice(item, item + step);
    tmp.forEach(e => e.style.display = 'block');
    item += step;
    if (tmp.length < 6) this.remove()
});

