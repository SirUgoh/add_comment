var main = function () {
    "use strict"
    var $button = $(".comment-input button");

    $button.on("click", function (event) {

    
    var $new_comment;

    

    var $input = $(".comment-input input").val();

    var $comments = $(".comments")

    if ($input !== "") {
        $new_comment = $("<p>").text($input);

        $comments.append($new_comment);
    }
    })
        
};

$(document).ready(main);