var main = function () {
    "use strict"
    var $button = $(".comment-input button");
    var $input = $(".comment-input input");

    var addCommentFromInputBox = function() {
        var $comments = $(".comments");
        var $new_comment;

    if ($input.val() !== "") {
        $new_comment = $("<p>").text($input.val());
        $new_comment.hide();
        $comments.append($new_comment);
        $new_comment.fadeIn();
        $input.val("");
    }
    }
    

    $button.on("click", function (event) {
        addCommentFromInputBox();
    })
    

    $input.on("keypress", function(event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox()
        }
});
}

$(document).ready(main);