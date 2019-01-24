var bgChanger = bgChanger || {};

bgChanger = function() {

    var loop;
    var delay = 5000,
        num = 1,
        length = 11;

           
    var startLoop = function(){
        console.log("Background change loop started")
        loop = setInterval(function(){
            changeBg(num, 'slow');
            num = (num === length) ? 1 : ++num;
        }, delay)
    }

    
    var changeBg = function(picNum, fadeSpeed){
        $('#backgroundImages').fadeTo(fadeSpeed, 0.3, "linear", function(){
            $(this).css('background-image', 'url(./images/backgroundImages/bgImg'+ picNum + '.jpg)')
        }).fadeTo('slow',1);
    }

    var endLoop = function(){
        console.log("Background change loop stopped")
        clearInterval(loop);
    }

    var nextImg = function(){
        clearInterval(loop);
        console.log("Background change loop stopped")

        num = num + 1;
        if(num >11){
            num = 1;
        }
        changeBg(num, 'fast');
    }

    var prevImg = function(){
        clearInterval(loop);
        console.log("Background change loop stopped")
        
        num = num - 1;
        if(num < 1){
            num = 11;
        }
        changeBg(num, 'fast');
    }

    return {
        startLoop: startLoop,
        endLoop: endLoop,
        nextImg: nextImg,
        prevImg: prevImg
    }

}();