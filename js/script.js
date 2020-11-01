let modalContactsOpenButton = document.querySelector('.button-all-items-contacts');
let modalWriteUS = document.querySelector('.modal-write-us');
let modalCloseButtons = document.querySelectorAll('.modal-close');
let modalContactsMapButton = document.querySelector('.contacts-map-link');
let modalMap = document.querySelector('.modal-map');
let servisesLinks = document.querySelectorAll('.servises-link');
let bullits = document.querySelectorAll('.slider-pager-link');

modalContactsOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalWriteUS.classList.toggle('modal-show');
});

modalCloseButtons.forEach(function(el, i) {
    el.addEventListener('click', function(evt) {
        evt.preventDefault();
        let modalShow = document.querySelector('.modal-show');
        modalShow.classList.remove('modal-show');
    });
});

modalContactsMapButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalMap.classList.toggle('modal-show');
});

servisesLinks.forEach(function(serviceButton, i) {
    serviceButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        let screen = this.dataset.screen;
        document.querySelector('.servises-slider-item--active').classList.remove('servises-slider-item--active');
        document.querySelector('.' + screen).classList.add('servises-slider-item--active');
    });
});

if (bullits) {
    bullits.forEach(function(bullit) {
        bullit.addEventListener('click', function(evt) {
            evt.preventDefault();
            let activeBullit = document.querySelector('.slider-pager-link--active');
            activeBullit.classList.remove('slider-pager-link--active');
            this.classList.add('slider-pager-link--active');
            let activeSlide = document.querySelector('.slider-item--active');
            activeSlide.classList.remove('slider-item--active');
            let newActiveSlide = document.querySelector('.' + this.dataset.screen);
            newActiveSlide.classList.add('slider-item--active');
        });
    });
}

let ticks = document.querySelectorAll('.slider-shift');
let galleryItems = document.querySelectorAll('.slider-item');
if (ticks) {
    ticks.forEach(function(tick) {
        tick.addEventListener('click', function(evt) {
            evt.preventDefault();
            galleryItems.forEach(function(item) {
                item.classList.toggle('slider-item--active');
                if (item.classList.contains('slider-item--active')) {
                    let bullit = document.querySelector('.' + item.dataset.bullit);
                    let activeBullit = document.querySelector('.slider-pager-link--active');
                    activeBullit.classList.remove('slider-pager-link--active');
                    bullit.classList.add('slider-pager-link--active');
                }
            });
        });
    });
};