$(function(){
    $("body").tooltip({
        selector: '[data-toggle="tooltip"]',
        container: "body"
    }),
        $("body").popover({
            selector: '[data-toggle="popover"]',
            container: "body"
        })
});