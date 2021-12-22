var lists = document.querySelectorAll("li");
var sounds = document.querySelector(".sound");
var audio_lists = ['applause.mp3','Boo.mp3','gasp.mp3','Tada.mp3','victory.mp3','wrong.mp3'];
var dom_audio = document.createElement('audio');

for(let i=0; i < lists.length; i++) {
    lists[i].addEventListener('click', function () {
        dom_audio.src = "assets/vendor/"+audio_lists[i];
        dom_audio.setAttribute("autoplay", "");
        dom_audio.setAttribute("muted", "");
        dom_audio.muted = false;
        console.log(dom_audio);
    });
}
