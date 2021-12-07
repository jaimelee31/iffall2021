$( document ).ready(function() {
    $(".hamburger").click(function(){
        $("#main-nav").toggleClass("open");
        console.log("Toggled the class!");
    });

});