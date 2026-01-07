
/* ------------------------- FAVORITE BUTTON ------------------------- */ 

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btnFavorite").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("favactive");
        });
    });
});


/* ------------------------- carroussel accueil ------------------------- */ 


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

/* ---------------------- BTN quantity--------------------------- */

$(document).ready(function () {
    var $qtyInputs = $(".qty-input");

    if (!$qtyInputs.length) {
        return;
    }

    var $inputs = $qtyInputs.find(".product-qty");
    var $countBtn = $qtyInputs.find(".qty-count");
    var qtyMin = parseInt($inputs.attr("min")) || 1;
    var qtyMax = parseInt($inputs.attr("max")) || 99;

    $inputs.on('change', function () {
        var $this = $(this);
        var $minusBtn = $this.siblings(".qty-count--minus");
        var $addBtn = $this.siblings(".qty-count--add");
        var qty = parseInt($this.val());

        if (isNaN(qty) || qty <= qtyMin) {
            $this.val(qtyMin);
            $minusBtn.attr("disabled", true);
        } else {
            $minusBtn.attr("disabled", false);
            
            if (qty >= qtyMax) {
                $this.val(qtyMax);
                $addBtn.attr('disabled', true);
            } else {
                $this.val(qty);
                $addBtn.attr('disabled', false);
            }
        }
    });

    $countBtn.on('click', function () {
        var operator = this.dataset.action;
        var $this = $(this);
        var $input = $this.siblings(".product-qty");
        var qty = parseInt($input.val());

        if (operator == "add") {
            qty += 1;
            if (qty >= qtyMin + 1) {
                $this.siblings(".qty-count--minus").attr("disabled", false);
            }

            if (qty >= qtyMax) {
                $this.attr("disabled", true);
            }
        } else {
            qty = qty <= qtyMin ? qtyMin : (qty - 1);
            
            if (qty == qtyMin) {
                $this.attr("disabled", true);
            }

            if (qty < qtyMax) {
                $this.siblings(".qty-count--add").attr("disabled", false);
            }
        }

        $input.val(qty);
    });
});

/* ---------------------- REVIEWS GALLERY --------------------------- */

$(document).ready(function () {
    function resizeGridItem(item) {
        var grid = document.getElementsByClassName("reviews__gallery")[0];
        if (!grid) return;
        
        var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        var content = item.querySelector('.reviews__content');
        
        if (content) {
            var rowSpan = Math.ceil((content.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
            item.style.gridRowEnd = "span " + rowSpan;
        }
    }

    function resizeAllGridItems() {
        var allItems = document.getElementsByClassName("reviews__container");
        for (var x = 0; x < allItems.length; x++) {
            resizeGridItem(allItems[x]);
        }
    }

    window.addEventListener("load", resizeAllGridItems);
    window.addEventListener("resize", resizeAllGridItems);
});


/* ---------------------- carrousel produit --------------------------- */


$(document).ready(function () {
  const thumbsSwiper = new Swiper(".thumbs-swiper", {
    direction: "vertical",
    slidesPerView: 4.5,
    spaceBetween: 1,
    navigation: {
      nextEl: ".thumbs-next",
      prevEl: ".thumbs-prev",
    },
    watchSlidesProgress: true,
  });

  const mainSwiper = new Swiper(".main-swiper", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
});