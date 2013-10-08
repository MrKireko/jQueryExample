$(document).ready(function(){
        
        $("#text").click(function(){
                $(this).html("<p>TEXT2</p>").click(function(){
                        $(this).html("<p>TEXT1</p>");
                });
            return false;
        });
        
});