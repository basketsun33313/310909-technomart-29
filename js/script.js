let modalContactsOpenButton = document.querySelector('.button-all-items-contacts');
let modalWriteUS = document.querySelector('.modal-write-us');
let modalCloseButtons = document.querySelectorAll('.modal-close');
let modalContactsMapButton = document.querySelector('.contacts-map-link');
let modalMap = document.querySelector('.modal-map');
let servisesLinks = document.querySelectorAll('.servises-link');
let bullits = document.querySelectorAll('.slider-pager-link');

if (modalContactsOpenButton) {
    modalContactsOpenButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalWriteUS.classList.toggle('modal-show');
    });
}

if (modalCloseButtons) {
    modalCloseButtons.forEach(function(el, i) {
        el.addEventListener('click', function(evt) {
            evt.preventDefault();
            let modalShow = document.querySelector('.modal-show');
            modalShow.classList.remove('modal-show');
        });
    });
}

if (modalContactsMapButton) {
    modalContactsMapButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalMap.classList.toggle('modal-show');
    });
}

if (servisesLinks) {
    servisesLinks.forEach(function(serviceButton, i) {
        serviceButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            let screen = this.dataset.screen;
            document.querySelector('.servises-slider-item--active').classList.remove('servises-slider-item--active');
            document.querySelector('.' + screen).classList.add('servises-slider-item--active');
        });
    });
}

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

let sortingTypeLinks = document.querySelectorAll('.sorting-type-link');
sortingTypeLinks.forEach(function(sortingTypeLink) {
    sortingTypeLink.addEventListener('click', function(evt) {
        evt.preventDefault();
        let linkActive = document.querySelector('.sorting-type-link-active');
        linkActive.classList.remove('sorting-type-link-active');
        sortingTypeLink.classList.add('sorting-type-link-active');
    });
});