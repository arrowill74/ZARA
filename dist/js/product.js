$(document).ready(function() {
    $("#dialog").css("display", "none");
    $("#msg").css("display", "none");
    $("#dialog").css("opacity", "0.5");
});

function closeDialog() {
    $("#dialog").css("display", "none");
    $("#msg").css("display", "none");
}

function showDialog() {
    /*秀出對話框*/
    $("#dialog").css("display", "");
    $("#msg").css("display", "");

    var w = $("#msg").width();
    var h = $("#msg").height();
    var _top = _sh / 2 - h / 2 + $(document).scrollTop(); //更好的方法 使用jQuery解決
    var _left = _sw / 2 - w / 2;
    /*設定視窗出現位置*/
    $("#msg").css("top", _top + 'px');
    $("#msg").css("left", _left + 'px');
}