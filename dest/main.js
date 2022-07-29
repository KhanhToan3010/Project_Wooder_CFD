//Slider Scroll

let menus = document.querySelectorAll(' .menu .menu__list a');

let heightHeader = document.querySelector('header').offsetHeight;


menus.forEach(function(element, index){
   element.addEventListener('click', function(e){
       e.preventDefault();
       let href = element.getAttribute('href');
       let className = href.replace('#', '');
       let section = document.querySelector('.' + className);
        let positionSec = section.offsetTop;
        window.scrollTo({
            top: positionSec - heightHeader,
            behavior: 'smooth'

        });
   });

});

//-----------SLIDER FLICKITY------------

// let $carousel = $('.slider__item-wrap');

// $carousel.flickity({

//     fade: true,
//     imagesLoaded: true, 
//     pageDots: false, 
//     autoPlay: 2000, 
// });
//previous
// $('.slider__bottom .slider__bottom-control .--pre').on('click', function(){
//     $carousel.flickity('previous');
// });

// ------------- NewS-----------------
//TagList
let tagText = document.querySelectorAll('.news__tags .tag')
let tagList = document.querySelectorAll('.news__item')

tagText.forEach(function(item, index){
    item.addEventListener('click', function(){
        let tagID = index + 1;
        console.log(tagID);
         tagList.forEach(function(tag){
             tag.classList.remove('active');
         });
         document.querySelector('.news__item-' + tagID).classList.add('active');
         console.log( document.querySelector('.news__item-' + tagID));
        })
})

// BACK TO TOP

// let backtotop = document.querySelector('.top');

// function showbacktoptop(){
//     let scrollY = window.pageYOffset;
//     if(scrollY > 400){
//         backtotop.classList.add('active__top')
//     }else {
//         backtotop.classList.remove('active__top')
//     }
// }

// document.addEventListener('scroll', function(){
//     showbacktoptop();
// })

//----------------- POPUP VIDEO ---------------------

let button_video = document.querySelectorAll('.quality_vd-btnplay');

let popup_video = document.querySelector('.popup-video');

let close_popupvd = document.querySelector('.popup-video .close');

let jframe = document.querySelector('.popup-video iframe')

button_video.forEach(function(button){ 
    button.addEventListener('click', function(){
        let video_id = button.getAttribute('data-vide0-id');
        jframe.setAttribute('src', 'https://www.youtube.com/embed/' + video_id);
        popup_video.style.display = 'flex';
    });

});
close_popupvd.addEventListener('click', function(){
    jframe.setAttribute('src', '');
    popup_video.style.display = 'none';
});

document.querySelector('.popup-video').addEventListener('click', function(e){
    jframe.setAttribute('src', '');
    popup_video.style.display = 'none';
})

/*-----------SLIDER GALLARY--------------*/

Fancybox.bind("[data-fancybox]", {
    infinite: true,
    keyboar:{
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        ArrowDown: "prev",
        ArrowRight: "next",
        ArrowLeft: "prev",
    }
  });