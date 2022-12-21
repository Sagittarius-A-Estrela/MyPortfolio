$(document).ready(function(){
    $(".control-close").click(function(){
        $(".window").addClass("window--destroyed");
        $(".window").removeClass("window--maximized window--minimized");
        setTimeout(location.reload.bind(location), 5000);
    }),
      
    $(".control-maximize").click(function(){
        $(".window").removeClass("window--minimized");
        $(".window").toggleClass("window--maximized");
        $(".window-content").removeClass("window--content");
    }),
  
    $(".control-minimize").click(function(){
        $(".window").removeClass("window--maximized");
        $(".window").toggleClass("window--minimized");
        $(".window-content").toggleClass("window--content");
    });
});