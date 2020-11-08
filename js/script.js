let modalContactsOpenButton = document.querySelector('.button-all-items-contacts');
let modalWriteUS = document.querySelector('.modal-write-us');
let modalCloseButtons = document.querySelectorAll('.modal-close');
let modalContactsMapButton = document.querySelector('.contacts-map-link');
let modalMap = document.querySelector('.modal-map');
let servicesLinks = document.querySelectorAll('.services-link');
let bullits = document.querySelectorAll('.slider-pager-button');

if (modalContactsOpenButton) {
    modalContactsOpenButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalWriteUS.classList.remove('modal-error');
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

if (servicesLinks) {
    servicesLinks.forEach(function(serviceButton, i) {
        serviceButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            let screen = this.dataset.screen;
            document.querySelector('.services-slider-item--active').classList.remove('services-slider-item--active');
            document.querySelector('.' + screen).classList.add('services-slider-item--active');
            document.querySelector('.services-link-active').classList.remove('services-link-active');
            serviceButton.classList.add('services-link-active');
        });
    });
}

if (bullits) {
    bullits.forEach(function(bullit) {
        bullit.addEventListener('click', function(evt) {
            evt.preventDefault();
            let activeBullit = document.querySelector('.slider-pager-button--active');
            activeBullit.classList.remove('slider-pager-button--active');
            this.classList.add('slider-pager-button--active');
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
                    let activeBullit = document.querySelector('.slider-pager-button--active');
                    activeBullit.classList.remove('slider-pager-button--active');
                    bullit.classList.add('slider-pager-button--active');
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

let sortingDirLinks = document.querySelectorAll('.sorting-direction-link');
sortingDirLinks.forEach(function(sortingDirLink) {
    sortingDirLink.addEventListener('click', function(evt) {
        evt.preventDefault();
        let linkDirActive = document.querySelector('.sorting-direction-link-active');
        linkDirActive.classList.remove('sorting-direction-link-active');
        sortingDirLink.classList.add('sorting-direction-link-active');
    });
});

let username = document.querySelector('.username');
let email = document.querySelector('.email');
let letter = document.querySelector('.letter');
let modalWriteUsForm = document.querySelector('.write-us-form');
if (modalWriteUsForm) {
    modalWriteUsForm.addEventListener('submit', function(evt) {
        if (!username.value || !email.value || !letter.value) {
            evt.preventDefault();
        }
        modalWriteUS.classList.remove('modal-error');
        modalWriteUS.offsetWidth = modalWriteUS.offsetWidth;
        modalWriteUS.classList.add('modal-error');
    });
}

let modalCart = document.querySelector('.modal-cart');
let goodsButtonBuy = document.querySelectorAll('.goods-button-buy');

goodsButtonBuy.forEach(function (item) {
        item.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalCart.classList.add('modal-show');
    });
});