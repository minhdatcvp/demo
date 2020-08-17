$(document).ready(
    function(){
        //  sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }
                else{
                    $('nav').removeClass('sticky');
                }
            },{
               offset: '600px' 
            }
        )
        

        // scroll 
        $(document).on('click', 'a[href^="#"]', function (event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 700);
            event.preventDefault();
        });

        // mobie-nav-icon
        $('.mobie-nav-icon').click(function(){
            $('.main-nav').slideToggle(200);
            if($('.mobie-nav-icon').hasClass('fa-bars')){
                $('.mobie-nav-icon').addClass('fa-times');
                $('.mobie-nav-icon').removeClass('fa-bars');
            }
            else{
                $('.mobie-nav-icon').addClass('fa-bars');
                $('.mobie-nav-icon').removeClass('fa-times');
            }
        })
    }
)