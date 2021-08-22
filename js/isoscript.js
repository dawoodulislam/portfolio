$(document).ready(function () {

    $(".work-filter-list").isotope();

    $(".work-filter li").on('click', function () {
        var selector = $(this).attr('data-filter');
        $(".work-filter-list").isotope({
            filter: selector
        });
    });

    $(".port-btn").on('click', function () {
        $('.work-filter-item').addClass('portfolio-item');
        $('.work-filter-item').removeClass('hidden');
        //        console.log($('.list-inline-item').attr('data-filter'))


        if ($('.list-inline-item').attr('data-filter') === "*") {
            console.log($('.list-inline-item').attr('data-filter'))
            $('.list-inline-item.active').removeClass('active');
            $('.special-iso').addClass('active');
        }
        //        $('.special-iso').filter('[data-filter]="*').addClass('active');
        $('.port-btn').addClass('hidden');
        var selector1 = "*";
        $(".work-filter-list").isotope({
            filter: selector1
        });

        // window.location.hash = "#portfolio";
        // $.scrollTo($('#portfolio'), 1000);
        document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });

    });
});