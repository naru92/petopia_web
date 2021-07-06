  




 /*네비게이션*/
        $(function() {
          var $firstMenu = $('nav > ul > li '),
            $header = $('#header');

          $firstMenu.mouseenter(function() {
              $header.stop().animate({
                height: '350px'
              });
            })
            .mouseleave(function() {
              $header.stop().animate({
                height: '120px'
              });
            });

        });

        /*네비게이션 픽스*/
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
          } else {
            document.getElementById("header").style.top = "-120px";
          }
          prevScrollpos = currentScrollPos;
        }
