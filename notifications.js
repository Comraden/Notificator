function sendNotify(title,message,type)
{
var obj = $('#0');
var timeout = 5000;
    switch (type)
    {
        case "error":
            $(function() {
                obj.prepend("<div id='notification' class='notification_error'><div class='upper_line_error'></div><div class='title'><span class='title_text'>"+title+"</span></div><div class='message'><span class='message_text'>"+message+"</span></div></div>");
                $("#notification").hide(0);
                $("#notification").show(600);
                setTimeout(function(){$("#notification").hide(600);},timeout);
            });
        break;
        case "notice":
            $(function() {
                obj.prepend("<div id='notification' class='notification_error'><div class='upper_line_notice'></div><div class='title'><span class='title_text'>"+title+"</span></div><div class='message'><span class='message_text'>"+message+"</span></div></div>");
                $("#notification").hide(0);
                $("#notification").show(600);
                setTimeout(function(){$("#notification").hide(600);},timeout);
            });
        break;
        case "sucess":
            $(function() {
                obj.prepend("<div id='notification' class='notification_error'><div class='upper_line_sucess'></div><div class='title'><span class='title_text'>"+title+"</span></div><div class='message'><span class='message_text'>"+message+"</span></div></div>");
                $("#notification").hide(0); 
                $("#notification").show(600);
                setTimeout(function(){$("#notification").hide(600);},timeout);
            });
        break;
        default : console.log("undefined type of message.use 'error','notice','sucess'");
    }
}