
/* ------------------------- FAVORITE BUTTON ------------------------- */ 

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btnFavorite").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("favactive");
        });
    });
});


/* ------------------------- carroussel ------------------------- */ 


$(document).ready(function () {
    $('.slide').each(function() {
        $(this).click(function() {
            $('.slide').removeClass('active');
            $('.slide').addClass('inactive');
                $(this).addClass('active');
                $(this).removeClass('inactive');
        });
    });
}); 

// $(document).ready(function () {
//     $('.slide').on('click', function () {
//         $('.slide').removeClass('active').addClass('inactive');
//         $(this).addClass('active').removeClass('inactive');
//     });
// });

