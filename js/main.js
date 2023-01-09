$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      // $(".navbar").css("background" , "#fff");
      $(".navbar").removeClass("deactive");
      $(".navbar").addClass("active");
    }
    else{
      // $(".navbar").css("background" , "transparent");   
      $(".navbar").removeClass("active");
      $(".navbar").addClass("deactive"); 
      // $(".navbar ul li a").addClass("deactive");
    }
  })
})

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const links = document.querySelector('.navbar__links');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
})

$(document).ready(function() {
  var onScroll = function() {
    var scrollTop = $(this).scrollTop();
    $('.paralax-image').each(function(index, elem) {
      var $elem = $(elem);
      $elem.find('img').css('top', scrollTop - $elem.offset().top);
    });
  };
  onScroll.apply(window);
  $(window).on('scroll', onScroll);
});

//section scroll event
window.onload = function(){
  const elm = document.querySelectorAll('section');
  const elmCount = elm.length;
  elm.forEach(function(item, index){
    item.addEventListener('mousewheel', function(event){
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
      } 
      else if (event.detail)
          delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      // wheel down : move to next section
      if (delta < 0){
        if (elmSelector !== elmCount-1){
          try{
            moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }
      
      // wheel up : move to previous section
      else{
        if (elmSelector !== 0){
          try{
            moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }

      const body = document.querySelector('html');
      window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
    });
  });
}