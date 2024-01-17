elItem2 = document.querySelector('.site-header__inner-item__second');
elList2 = document.querySelector('.sublist-second');

elItem2.addEventListener('click', function () {
    elList2.classList.toggle('list-open');
});

elItem4 = document.querySelector('.site-header__inner-item__fourth');
elList4 = document.querySelector('.sublist-fourth');

elItem4.addEventListener('click', function () {
    elList4.classList.toggle('list-open');
});

elItem6 = document.querySelector('.site-header__inner-item__last');
elList6 = document.querySelector('.sublist-last');

elItem6.addEventListener('click', function () {
    elList6.classList.toggle('list-open');
});