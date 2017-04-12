window.addEventListener('load', function () {
   
    var CM = new CommentManager($('#my-comment-stage'));
    CM.init();
   
    CM.start();
    
    window.CM = CM;
    
    var socket = io();
    socket.on('danmaku show', function (msg) {
        console.log(msg);
        $('#messages').append($('<li>').text(msg));
        var danmaku = JSON.parse(msg);
        CM.send(danmaku);
    });
});