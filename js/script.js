$(document).ready(function(){
    $(".open_roles").click(function(){
        $("section").css("display","none");
        $("#roles").css("display","flex");

        $("li").removeClass("active");
        $(".open_roles").addClass("active");
        
    });
    $(".benefits").click(function(){
        $("section").css("display","none");
        $("#benefits").css("display","flex");
        
        $("li").removeClass("active");
        $(".benefits").addClass("active");
    });
    $(".work").click(function(){
        $("section").css("display","none");
        $("#work").css("display","flex");
        
        $("li").removeClass("active");
        $(".work").addClass("active");
    });
    $(".recruit").click(function(){
        $("section").css("display","none");
        $("#recruit").css("display","flex");
        
        $("li").removeClass("active");
        $(".recruit").addClass("active");
    });
    $(".future").click(function(){
        $("section").css("display","none");
        $("#future").css("display","flex");
        
        $("li").removeClass("active");
        $(".future").addClass("active");
    });
});