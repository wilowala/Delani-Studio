$(document).ready(function() {

// Toggle effects

    $("#design-logo").click(function () {
        $("#design-logo").fadeIn().hide();
        $("#design-text").fadeIn().hide();
        $("#design").show();
    });
    $("#design").click(function () {
        $("#design").slideUp();
        $("#design-text").slideDown();
        $("#design-logo").slideDown();
    });

    $("#dev-logo").click(function () {
        $("#dev-logo").fadeIn().hide();
        $("#dev-text").fadeIn().hide();
        $("#dev").show();
    });
    $("#dev").click(function () {
        $("#dev").slideUp();
        $("#dev-text").slideDown();
        $("#dev-logo").slideDown();
    });

    $("#product-logo").click(function () {
        $("#product-logo").fadeIn().hide();
        $("#product-text").fadeIn().hide();
        $("#product").show();
    });
    $("#product").click(function () {
        $("#product").slideUp();
        $("#product-text").slideDown();
        $("#product-logo").slideDown();
    });
    
// Hover effects

    $(".class1").mouseover(function(){
        $(".class1").css("opacity","1");
    }).mouseout(function(){
        $(".class1").css("opacity","0");;
    });  

    $(".class2").mouseover(function(){
        $(".class2").css("opacity","1");
    }).mouseout(function(){
        $(".class2").css("opacity","0");;
    }); 

    $(".class3").mouseover(function(){
        $(".class3").css("opacity","1");
    }).mouseout(function(){
        $(".class3").css("opacity","0");;
    }); 

    $(".class4").mouseover(function(){
        $(".class4").css("opacity","1");
    }).mouseout(function(){
        $(".class4").css("opacity","0");;
    }); 
    
    $(".class5").mouseover(function(){
        $(".class5").css("opacity","1");
    }).mouseout(function(){
        $(".class5").css("opacity","0");;
    }); 

    $(".class6").mouseover(function(){
        $(".class6").css("opacity","1");
    }).mouseout(function(){
        $(".class6").css("opacity","0");;
    }); 

    $(".class7").mouseover(function(){
        $(".class7").css("opacity","1");
    }).mouseout(function(){
        $(".class7").css("opacity","0");;
    }); 

    $(".class8").mouseover(function(){
        $(".class8").css("opacity","1");
    }).mouseout(function(){
        $(".class8").css("opacity","0");;
    }); 

});