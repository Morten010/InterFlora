let btn = document.querySelectorAll('.accordian-btn');

//går igennem alle accordions og giver dem deres eventlistener
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', (e) => {
        let grandparent = btn[i].parentElement.parentElement;
        grandparent.classList.toggle('open')
    });
}

const images = document.getElementsByClassName('blomst');
const bigImage = document.getElementById('big-image')

for(let i = 0; i < images.length; i++){
    let n = i;
    images[n].addEventListener('click', (e) => {
        let hasActive = document.querySelector('.active');
        hasActive.classList.remove('active');
        images[n].classList.add('active');
        bigImage.src = images[n].src;
    });
}

// toggle menu
$(function() {
    $('#toggle-menu').on('click', function() {
        $(this).toggleClass('active')
    });
});

