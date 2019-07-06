/*
 * . Sliders
 * ----------------------------------------------------------------- 
 */ 

    function slidersInit() {

        jQuery('.reviews.owl-carousel').owlCarousel({

            // center: true,
            loop:true,
            //true:0,
            nav:true,
            dots:false,
            //Авто-прокрутка
            autoplay : false,
            stopOnHover : true,
            //items : 4
            mouseDrag : true,
            navSpeed : 1500,
            dotsSpeed : 1500,
            autoplaySpeed : 1500,
            
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                },
                960:{
                    items:3
                }
            }        
            
        });

        jQuery('.sertificates__slider.owl-carousel').owlCarousel({

            // center: true,
            loop:true,
            //true:0,
            nav:true,
            dots:false,
            //Авто-прокрутка
            autoplay : false,
            stopOnHover : true,
            //items : 4
            mouseDrag : true,
            navSpeed : 1500,
            dotsSpeed : 1500,
            autoplaySpeed : 1500,
            
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:1
                },
                960:{
                    items:1
                }
            }        
            
        });

    }


    function slidersTBInit()  {

        jQuery('.news--card > .row').addClass('owl-carousel');
        jQuery('.tarifs > .row-flex').addClass('owl-carousel');

        // jQuery('.news--card .owl-carousel').owlCarousel({
        jQuery('.news--card> .row').owlCarousel({

            // center: true,
            loop:true,
            //true:0,
            // nav:false,
            // dots:true,
            pagination: false,
            //Авто-прокрутка
            autoplay : false,
            stopOnHover : true,
            //items : 4
            mouseDrag : true,
            navSpeed : 1500,
            dotsSpeed : 1500,
            autoplaySpeed : 1500,
            
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                },
                1024:{
                    items:3
                }
            }        
            
        });

        // jQuery('.tarifs').owlCarousel({
        jQuery('.tarifs>.row-flex').owlCarousel({

            center: false,
            loop:false,
            //true:0,
            // nav:false,
            // dots:true,
            pagination: false,
            //Авто-прокрутка
            autoplay : false,
            stopOnHover : true,
            //items : 4
            mouseDrag : true,
            navSpeed : 1500,
            dotsSpeed : 1500,
            autoplaySpeed : 1500,
            
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                },
                1024:{
                    items:3
                }
            }        
            
        });         

    }

   