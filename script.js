let button_audio = new Audio("https://monoame.com/awi_class/ballsound/click14.wav");

$(".i5").click(function(){
  $(".phone").css("width","");
  $(".screen").css("height","");
  $(".phonename").text($(this).text());
  button_audio.play();
});

$(".i5s").click(function(){
  $(".phone").css("width","250px");
  $(".screen").css("height","400px");
  $(".phonename").text($(this).text());
  button_audio.play();
});

$(".i6").click(function(){
  $(".phone").css("width","270px");
  $(".screen").css("height","440px");
  $(".phonename").text($(this).text());
  button_audio.play();
});

$(".i6s").click(function(){
  $(".phone").css("width","300px");
  $(".screen").css("height","480px");
  $(".phonename").text($(this).text());
  button_audio.play();
});

let screen_audio=new Audio("https://monoame.com/awi_class/ballsound/click18.wav");

let page=0;
$(".screen").click(function(){
  page++;
  if(page>2){
    page=0;
  };
  $(".pages").css("left","-"+100*page+"%");
  screen_audio.play();
});

let home_audio = new Audio("https://monoame.com/awi_class/ballsound/click23.wav");

$(".button").click(function(){
  page=0;
  $(".pages").css("left","-"+100*page+"%");
  home_audio.play();
});

let deg=0;
$(".turn").click(function(){
  deg+=360;
  $(".phone").css("transform","rotate("+deg+"deg)");
});

let wiggle_audio = new Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3");

$(".wiggle").click(function(){
  wiggletime=0;
  wiggle_audio.play();
});

let wiggletime=22;

setInterval(function(){
  if(wiggletime<=20){
    wiggletime+=1;
    if (wiggletime%2==0){
      $(".phone").css("left","-30px");
    } else {
      $(".phone").css("left","30px");
    }
  
    if(wiggletime==21){
      $(".phone").css("left","");
    }
  }
},60);