document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '');

(function($){

    $(window).on("load", function(){

        $(".header-slide").length 
            && 
        (function(){
            $(".header-slide").addClass("animate");     

            setTimeout(
                () => { 
                    $(".home-page").addClass("scroll");  
                    animate();
                }, 2600
            );
                 
        }());
        
        

    });

    $(document).ready(function() {

        $(this).scrollTop(0);
        
        // Menu
        (function(){
            var $btnOpen  = document.querySelector(".btn-menu.open");
            var $btnClose  = document.querySelector(".btn-menu.close");
            var $menu = document.querySelector(".menu");
            var $html = document.querySelector("html");
            var $body = document.querySelector("body");

            // $btn.addEventListener("click", function(){
            //     ($html.className.match(/\bmenu-open\b/)) ? menuClose() : menuOpen()
            // });

            $btnOpen.addEventListener("click", () => menuOpen());
            $btnClose.addEventListener("click", () => menuClose());

            function menuOpen(){
                $html.classList.remove("menu-close");
                $html.classList.add("menu-open");
                $body.classList.remove("scroll");
            };  

            function menuClose(){
                $html.classList.remove("menu-open");
                $html.classList.add("menu-close");
                $body.classList.add("scroll");
            }; 
        }());

        // Slide Down
        (function(){
            var $btnDown = document.querySelector(".btn-down");
            var $header  = document.querySelector(".header-slide");

            if ($(".btn-down").length>0){
                $btnDown.addEventListener("click", function(){
                    var headHeight = $header.clientHeight;

                    $("html, body").stop().animate({scrollTop: headHeight}, 700, 'swing');
                });
            }
            
        }());

        // Title Animate
        (function(){

            var $title = document.querySelectorAll(".title-animate");

            $title.forEach(function(ttl){
                var text = ttl.innerHTML.split("<br>");
                var titleArr = [];
                var resultText;

                for (var i = 0; i < text.length; i++){
                    titleArr.push("<div><span>" + text[i] + "</div></span>");
                    resultText = titleArr.join("");
                }

                ttl.innerHTML = resultText;
            });
        }());

        // Slider
        if ($(".slider").length){
            
            $(".slider-pan .slider").anythingSlider({  
                autoPlay            : false,
                //delay               : 8000,

                animationTime       : 1200,
                toggleArrows        : false,
                expand              : true,
                resizeContents      : true,
                //autoPlayLocked      : true,
                resumeDelay         : 0,
                hashTags            : false,
                infiniteSlides      : true,
                //stopAtEnd           : false,

                buildArrows         : true,      
                buildNavigation     : true,      
                buildStartStop      : false,
                mode                : "fade",

                onInitialized: function(){
                    $(".slider-pan-title").addClass("title-animate");  
                },

                onSlideBegin: function(){
                    $(".slider-pan-title").removeClass("title-animate");

                    $(".slider-pan .section-mask").addClass("roll");
                },

                onSlideComplete: function(slider){
                    $(".slider-pan-title").addClass("title-animate");  

                    $(".slider-pan .section-mask").removeClass("roll");

                }         
            });

            var $count = document.querySelector(".slider-pan-count");       
            var items  = document.querySelectorAll(".slider-pan .slider li").length; 

            $count.innerHTML = items || 0;   
        };

        // Scroll Perfect
        if ($(".scroll.horizontal").length){

            $(".portfolio-preview-inner").each(function(){
                var $this = $(this);
                var $item = $this.find(".preview-item");
                var imgWidth = $item.width();
                var items = $item.length;

                $this.width(items * (imgWidth + 15));
            });
             
        };

        // Filter
        (function(){
            var $filter = $(".filter-tabs");
            var $portItem = $(".portfolio-block");

            scrollImit();
            alter();

            $filter.length  
                &&
            $filter.find("li a").on("click", function(e){

                var tag = $(this).attr("href").substring(1);
                
                $filter.find("li").removeClass("is-active");
                $(this).parent().addClass("is-active");

                $portItem.removeClass("animate is-show").hide();
                $(".scroll.horizontal").perfectScrollbar("destroy");

                if (tag == "all"){

                    setTimeout(
                        () => {
                            $portItem.addClass("is-show").show();

                            alter();         
                        }, 1500
                    );
                    
                } else {

                    setTimeout(
                        () => {
                            $portItem
                                .filter("[data-tags~='" +  tag + "']")
                                .addClass("is-show")
                                .show();

                            alter();         
                        }, 1500
                    );

                }
                          
                e.preventDefault();
            });

            function alter(){
                var blocks = $(".portfolio-block.is-show");

                $(".portfolio-block").removeClass("is-even is-odd");

                $(".portfolio-block.is-show").each(function(index){
                    var altClass = index % 2 ? "is-even" : "is-odd";

                    $(this).addClass(altClass);
                });

                // setTimeout(
                //     () => {
                //         blocks
                //             .first()
                //             .addClass("animate")
                //             .trigger("animate-trigger");
                //     }, 500
                // );
                
                
                scrollImit();
                portfolioScroll();
            }    

        }());

        // Portfolio Preview
        (function(){

            $(".preview-item").on("click", function(){
                if (clickFlag === 0){
                    var $this = $(this);
                    var $portImage = $this.parents(".portfolio-block").find(".portfolio-image");
                    var srcImage = $this.data("img");

                    $portImage.find(".portfolio-mask").addClass("animate");
                    
                    setTimeout(
                        () => {
                            $portImage.find("img").attr("src", srcImage);
                        }, 250
                    );    

                    setTimeout(
                        () => {
                            $portImage.find(".portfolio-mask").removeClass("animate");
                        }, 500
                    );
                }
                
   
            });

            var clickFlag = 1;
            var isDragging = false;
            var startingPos = [];

            $(".preview-item")
                .mousedown(function (evt){
                    isDragging = false;
                    startingPos = [evt.pageX, evt.pageY];
                })
                .mousemove(function (evt){
                    if (!(evt.pageX === startingPos[0] && evt.pageY === startingPos[1])) {
                        isDragging = true;
                    }
                })
                .mouseup(function (){
                    if (isDragging) {
                        clickFlag = 1;
                    } else {
                        clickFlag = 0;
                    }
                    isDragging = false;
                    startingPos = [];
                });


        }());
        

        // Placeholder Hide
        $("input, textarea").focus(function(){
           $(this).data("placeholder",$(this).attr("placeholder")).attr("placeholder","");
        }).blur(function(){
           $(this).attr("placeholder",$(this).data("placeholder"));
        });


        windowSize();   
        $(window).resize(windowSize); 
        
    });


    var cachedWidth = window.innerWidth;

    function windowSize(){
        var winWidth = window.innerWidth,
            docWidth = $(document).width();

        // Resize Mobile
        if (winWidth !== cachedWidth){
            

            cachedWidth = winWidth;
        }   
            
    };

    $(window).on("scroll", animate);

    // Animate
    function animate(){
        $.fn.isOnScreen = function(x, y){
            if(x == null || typeof x == 'undefined') x = 1;
            if(y == null || typeof y == 'undefined') y = 1;

            var win = $(window);

            var viewport = {
                top : win.scrollTop(),
                left : win.scrollLeft()
            };

            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();

            var height = this.outerHeight();
            var width = this.outerWidth();

            if(!width || !height){
                return false;
            }

            var bounds = this.offset();
            bounds.right = bounds.left + width;
            bounds.bottom = bounds.top + height;

            var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

            if(!visible){
                return false;
            }

            var deltas = {
                top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
                bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
                left : Math.min(1, ( bounds.right - viewport.left ) / width),
                right : Math.min(1, ( viewport.right - bounds.left ) / width)
            };


            return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
        };

        $("*[data-q]").each(function(){
            $(this).css({
                "transition-delay": $(this).data("q")
            });
        });

        $(".animate-item").each(function(){

            if (!$(this).hasClass("animate")){
                var screen = $(this).attr("data-screen") || 0.5;  

                if ($(this).isOnScreen(0, screen)){
                    $(this).addClass("animate").trigger("animate-trigger");
                    portfolioScroll();
                }

                // prevAnimate();
            } 
        });


        var draw = drawLines();
        $(".content-bg").length && drawLines();
        

        function drawLines(){
            var win = $(window);
            var ViewportBtm = win.scrollTop() + win.height();
            var $lines = $(".content-bg");

            var linesHeight = 0;

            if (linesHeight < ViewportBtm){
                $lines.stop().animate({
                    "height": ViewportBtm
                }, 500, function(){
                    linesHeight = ViewportBtm;
                    return linesHeight;

                });
            }            
        };


        
    };

    function portfolioScroll(){
        $(".portfolio-block").on("animate-trigger", function(){
            var $this = $(this);

            setTimeout(
                function() {
                    $this.find(".scroll.horizontal").perfectScrollbar({
                        wheelSpeed: 0.5,
                        useBothWheelAxes: true,
                        wheelPropagation: false,
                        minScrollbarLength: 20
                    });
                }, 4500
            );
        });
    };


    var $page = $("html, body");
    var top = $page.scrollTop();

    function scrollImit(){
        //$page.scrollTop(top++);

        if (top >= 1) 
            $page.scrollTop(0) 
        else
            $page.scrollTop(1)

        $page.scrollTop(0);
    };    


    // Click Out
    function ClickOut(element){
        this.element = element;
        
        this.removeClass = function(class_){
            $(document).on("click", function(event) {
                if ($(event.target).closest(element).length) return;
                $(element).removeClass(class_);
                event.stopPropagation();
            });
        };
    };

    // forEach for IE
    (function(){
        if ( typeof NodeList.prototype.forEach === "function" ) return false;
        NodeList.prototype.forEach = Array.prototype.forEach;
    }());
    
}(jQuery))
