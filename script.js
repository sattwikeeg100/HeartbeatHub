//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply1(){
    var replyArea = document.getElementById("reply-area1");
    replyArea.classList.remove("hide");
}
function showReply2(){
    var replyArea = document.getElementById("reply-area2");
    replyArea.classList.remove("hide");
}

//Functions of submit button
function hideComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.add("hide");
}

function hideReply1(){
    var replyArea = document.getElementById("reply-area1");
    replyArea.classList.add("hide");
}

function hideReply2(){
    var replyArea = document.getElementById("reply-area2");
    replyArea.classList.add("hide");
}