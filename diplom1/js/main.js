// Аккордеон

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

    });

});

// слайдер

const swiper = new Swiper('.swiper', {
  // Optional parameters
    /* loop: true,
    slidesPerView: 3,
    spaceBetween: 20, */

  // If we need pagination
    /* pagination: {
        el: '.swiper-pagination',
    }, */

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-item__next',
        prevEl: '.swiper-item__prev',
    },

  // And if we need scrollbar
    /* scrollbar: {
        el: '.swiper-scrollbar',
    }, */
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    grabCursor: true,
    breakpoints: {
            // when window width is >= 320px
            1200: {
                slidesPerView: 3,
            },
            830: {
                slidesPerView: 2,
            },

        }


});
    /* const swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        }); */





    // Получаем элементы DOM
    // Получаем элементы
    const modal = document.getElementById('myModal');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    
    // Открытие модального окна
    openBtn.addEventListener('click', () => {
        modal.classList.add('pop-up_active');
    });
    
    // Закрытие модального окна
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('pop-up_active');
    });
        

