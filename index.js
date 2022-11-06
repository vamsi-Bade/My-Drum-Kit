function fun(bu){
    switch(bu){
        
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:console.log(bu);
    }
}
function anime(bu){
    var but=document.querySelector("."+bu);
    but.classList.add("pressed");
    setTimeout(() => {
        but.classList.remove("pressed");

    }, 100);
}
for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        fun(this.innerHTML);
        anime(this.innerHTML);

    });
    document.addEventListener("keypress",function(event){
        fun(event.key);
        anime(event.key);
    })
}
