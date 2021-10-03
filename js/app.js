let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};
if (isMobile.any()) {
  document.querySelector('html').classList.add('touch');
}

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

window.onload = function () {
  document.addEventListener('click', documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetElement.classList.contains('menu__arrow')) {
        targetElement.closest('.menu__item').classList.toggle('hover');
      }
      if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item.hover').length > 0) {
        let elems = document.querySelectorAll('.menu__item.hover');
        for (let elem of elems) {
          elem.classList.remove('hover');
        }
      }
    }
    if (targetElement.classList.contains('search-form__icon')) {
      document.querySelector('.search-form').classList.toggle('active');
    } else if (!targetElement.closest('search-form') && document.querySelector('.search-form.active')) {
      document.querySelector('.search-form').classList.remove('active');
    }
  }
};

// add spollers!!!


//BildSlider

let sliders = document.querySelectorAll('.swiper');
if(sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let sliderItems = slider.children;
            if (sliderItems) {
                for (let index = 0; index < sliderItems.length; index++) {
                    let el = sliderItems[index];
                    el.classList.add('swiper-slide');
                }
            }
            let sliderContent = slider.innerHTML;
            let sliderWrapper = document.createElement('div');
            sliderWrapper.classList.add('swiper-wrapper');
            sliderWrapper.innerHTML = sliderContent;
            slider.innerHTML = '';
            slider.appendChild(sliderWrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('gallery')){
            //slider.data('lightGallery').destroy(true);
        }
    }
    slidersBildCallback();
}

function slidersBildCallback(params) {}

let sliderScrollItems = document.querySelectorAll('swiper-scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observerParents: true,
            direction: 'vertcal',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar : {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false,
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


if (document.querySelector('.slider-main__body')) {
    new Swiper('.slider-main__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 32,
        watchOverflow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        pagination: {
            el: '.controls-slider-main__dotts',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-main .slider-arrow_next',
            prevEl: '.slider-main .slider-arrow_prev'
        },
    })
}
