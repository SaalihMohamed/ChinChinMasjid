function audioPlayer() {
    var currentSong = 0;
    $("#audioPlayer") [0].src = $("#playlist li a") [0];
    $("#playlist li a").click(function(e) {
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    })

}