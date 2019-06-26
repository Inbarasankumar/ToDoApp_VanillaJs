$("ul").on("click","li",function()
{
    $(this).toggleClass("selected");
});


$("ul").on("click","span",function(e)
{
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e)
{
    if(e.which===13)
    {
        var newTodo= $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" +newTodo+ "</li>");
    }

});

$("#toggleForm").on("click",function()
{
$("input[type='text']").fadeToggle();
});