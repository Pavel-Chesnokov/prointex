$(document).ready(function() {
     $(".client__slider").owlCarousel({
        loop: false,
        center: true,
        margin: 10,
        nav: false,
        dots: false,
        navText: ['<svg width="58" height="24" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.75 0.25L0 7L6.75 13.75L8.34082 12.1592L4.30664 8.125H18V5.875H4.30664L8.34082 1.84082L6.75 0.25Z" fill="#212121"/> </svg>',
        '<svg width="58" height="24" viewBox="0 0 18 14" fill="none" ro xmlns="http://www.w3.org/2000/svg"> <path d="M11.25 0.25L18 7L11.25 13.75L9.65918 12.1592L13.6934 8.125H0V5.875H13.6934L9.65918 1.84082L11.25 0.25Z" fill="#212121"/> </svg>'],
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 2
            },
            600: {
                loop: true,
                center: false,
                items: 3
            },
            900: {
                loop: true,
                center: false,
                items: 4
            },
            1200: {
                loop: true,
                center: false,
                items: 5
            }
        }
    });
});