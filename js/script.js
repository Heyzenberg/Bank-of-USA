const searchBtn = document.querySelector('.search_btn');
const searchBox = document.querySelector('.search_box');

searchBtn.onclick = () => {
    searchBox.classList.toggle('search-open');
    searchBtn.classList.toggle('search-open');
}


// Popup
document.querySelectorAll('.title_level_2__link').forEach(link => {
    link.addEventListener('click', e => {
		let thisMenuID = e.currentTarget.dataset.path;

        document.querySelectorAll('.dropdown_window').forEach(thisWindow => {
			if (thisWindow.classList.contains('open')) {
                    thisWindow.classList.remove('open');
			}
			else if (thisWindow.getAttribute('data-target') == thisMenuID) {
                    thisWindow.classList.add('open');
                }
            else {
                thisWindow.classList.remove('open');
            }
		});
        document.querySelectorAll('.title_level_2__link').forEach(e => {
			if (e.classList.contains('open')) {
					e.classList.remove('open');
			}
			else if	(e.getAttribute('data-path') == thisMenuID) {
                e.classList.add('open');
            }
            else {
                e.classList.remove('open');
            }
				
        });
    });
});


// Log In button
let loginBtn = document.querySelector('.log_in_account');
let sectionLogin = document.querySelector('.title_section_3-1');

loginBtn.onclick = () => {
    loginBtn.classList.toggle('active');
    sectionLogin.classList.toggle('visible');
}


// Burger
const burgerLeftBtn = document.querySelector('.mobile_menu-1');
const burgerLeftWindow = document.querySelector('.mobile_menu-1_window');

const burgerRightBtn = document.querySelector('.mobile_menu-2');
const burgerRightWindow = document.querySelector('.mobile_menu-2_window');

burgerLeftBtn.onclick = () => {
    if(burgerRightWindow.classList.contains('open') || burgerRightBtn.classList.contains('open')){
        burgerRightWindow.classList.remove('open');
        burgerRightBtn.classList.remove('open');
        burgerLeftWindow.classList.toggle('open');
        burgerLeftBtn.classList.toggle('open');
    }else{
        burgerLeftWindow.classList.toggle('open');
        burgerLeftBtn.classList.toggle('open');
    }   
}

burgerRightBtn.onclick = () => {
    if(burgerLeftWindow.classList.contains('open') || burgerLeftBtn.classList.contains('open')){
        burgerLeftWindow.classList.remove('open');
        burgerLeftBtn.classList.remove('open')
        burgerRightWindow.classList.toggle('open');
        burgerRightBtn.classList.toggle('open');
    }else{
        burgerRightWindow.classList.toggle('open');
        burgerRightBtn.classList.toggle('open');
    }
}


// Slider
let nextSlide = document.querySelector('.next');
let prevSlide = document.querySelector('.prev');// let navBtns   = document.querySelectorAll('.nav_btn');

let slideList = document.querySelector('.slide-list');

let currentSlide = 0;


nextSlide.addEventListener('click', function(){
    currentSlide++;
    if(currentSlide >= slideList.children.length){
        currentSlide = 0;
    }
    slideList.style.transform = 'translate(-' + currentSlide*100 +'%)';
})

prevSlide.addEventListener('click', function(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = slideList.children.length - 1;
    }
    slideList.style.transform = 'translate(-' + currentSlide*100 + '%)';
})


// Mobile Search
const mSearchBtn  = document.querySelector('.mobile_search_btn');
const mSearchBody = document.querySelector('.search_body');

mSearchBtn.onclick = () => {
    mSearchBody.classList.toggle('open');
    mSearchBtn.classList.toggle('open');
}