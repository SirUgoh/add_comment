var main = function () {
    "use strict"
    var $button = $(".comment-input button");
    var $input = $(".comment-input input");
    var $comments = $(".comments");
    var $new_comment;

    $button.on("click", function (event) {

    if ($input.val() !== "") {
        $new_comment = $("<p>").text($input.val());

        $comments.append($new_comment);
        $input.val("");

    }
    })

   
    $input.on("keypress", function(event) {
    
        if (event.keyCode === 13) {
            if ($input.val() !== "") {
                $new_comment = $("<p>").text($input.val());
                $comments.append($new_comment);
                $input.val("");
            }
        }
    })
};

$(document).ready(main);