let modalContactsOpenButton = document.querySelector('.button-all-items-contacts');
let modalWriteUS = document.querySelector('.modal-write-us');
let modalCloseButtons = document.querySelectorAll('.modal-close');
let modalContactsMapButton = document.querySelector('.contacts-map-link');
let modalMap = document.querySelector('.modal-map');
let servisesLinks = document.querySelectorAll('.servises-link');

modalContactsOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalWriteUS.classList.toggle('modal-show');
});

modalCloseButtons.forEach(function(el, i){
    el.addEventListener('click', function(evt){
        evt.preventDefault();
        let modalShow = document.querySelector('.modal-show');
        modalShow.classList.remove('modal-show');
    });
});

modalContactsMapButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalMap.classList.toggle('modal-show');
});

servisesLinks.forEach(function(serviceButton, i){
    serviceButton.addEventListener('click', function(evt){
        evt.preventDefault();
        let screen = this.dataset.screen;
        document.querySelector('.servises-slider-item--active').classList.remove('servises-slider-item--active');
        document.querySelector('.' + screen).classList.add('servises-slider-item--active');
    });
});