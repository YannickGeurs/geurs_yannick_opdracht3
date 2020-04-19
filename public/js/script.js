$(".wrapper").isotope({
 itemSelector: '.foto',
 layoutMode: 'fitRows',
 getSortData: {
    number: '.number parseInt',
  }
});


$(".menu ul li a").click(function(){
$(".menu ul li a").removeClass("active");
$(this).addClass("active");

  let kiezer = $(this).attr("data-filter");
   $(".wrapper").isotope({
       filter: kiezer
   });
  return false
});

$('.sort-by-button-group').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $(".wrapper").isotope({ sortBy: sortByValue });
});
