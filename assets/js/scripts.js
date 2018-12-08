$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active'); $(".menu-nav").toggleClass('menu-nav_active');
  });
  
  
  
  
  $(function(){
      var selectedClass = "";
      $(".fil-cat").click(function(){ 
      selectedClass = $(this).attr("data-rel"); 
       $("#portfolio").fadeTo(100, 0.1);
      $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
      setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('scale-anm');
        $("#portfolio").fadeTo(300, 1);
      }, 300); 
      
    });
  });