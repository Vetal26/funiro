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
