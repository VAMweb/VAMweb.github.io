var sheets = document.getElementById('cssSheet');

window.addEventListener('resize', function(event){
  mobileCheck();
});

function mobileCheck() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  console.log(check);
  if (check==true) {
    document.getElementById("unity-container").style.display="none";
    sheets.href = "ui/mobile.css";
  }else{
    sheets.href = "ui/index.css";
  }
  return check;
};

var header = document.getElementById("header");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function gameON() {
  document.getElementById("main").style.opacity="0";

  setTimeout(() => {
    document.getElementById("unity-container").style.display="block";
    document.getElementById("unity-container").style.opacity="1";
    document.getElementById("main").style.display="block";
  }, "500")
 
}

function expandLabel(which) {

  switch(which){
    case 0:
      document.getElementById("labelBar"+which).style.left="15vw";
      document.getElementById("labelBar"+which).style.width="10vw";
      break;
    case 1:
      document.getElementById("labelBar"+which).style.left="44vw";
      document.getElementById("labelBar"+which).style.width="10vw";
      break;
    case 2:
      document.getElementById("labelBar"+which).style.left="75vw";
      document.getElementById("labelBar"+which).style.width="10vw";
      break;
    case 4:
      document.getElementById("labelBar0").style.left="17vw";
      document.getElementById("labelBar0").style.width="6vw";
      document.getElementById("labelBar1").style.left="46vw";
      document.getElementById("labelBar1").style.width="6vw";
      document.getElementById("labelBar2").style.left="77vw";
      document.getElementById("labelBar2").style.width="6vw";
      break;
  }
  
}

function multimedia(amount){
  amount=artigos.length;
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "multiSelect");
  newDiv.setAttribute("class", "MagicScroll");
  newDiv.setAttribute("data-options", "mode: carousel; draggable: true;");
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  while(amount>0){
    amount=amount-1;
    
    const newImg = document.createElement("img");

    console.log(artigos[amount])

    newImg.src = artigos[amount][1];
  
    // and give it some content
    newImg.setAttribute("id", "Img" + amount);
    newImg.setAttribute("class", "multiImg");
    //newImg.setAttribute("onmouseover", "prevarticle("+amount+")");

    document.getElementById("multiSelect").appendChild(newImg);
  }
  setTimeout(() => {
    let numberoso = artigos.length;
    const boxes = document.querySelectorAll('.mcs-item');
    boxes.forEach(box => {
      numberoso=numberoso-1;
      box.setAttribute("onmouseover", "prevarticle("+numberoso+")");
      box.setAttribute("onclick", "location.href='" + artigos[numberoso][3]+"'");
    });
  }, "500")
  document.getElementById("multiSelect").style.height="20vw";
}


function prevarticle(whomst) {
  clearTimeout(this.timeoutID);
  document.getElementById("carTlt").style.opacity = "0%";
  document.getElementById("carNam").style.opacity = "0%";
  this.timeoutID = setTimeout(() => {
    document.getElementById("carTlt").innerHTML = artigos[whomst][0];
    document.getElementById("carNam").innerHTML = artigos[whomst][2];
    document.getElementById("carTlt").style.opacity = "100%";
    document.getElementById("carNam").style.opacity = "100%";
  }, "300");
}

let busy=false;

function titleanim(whomsts){
  if (busy==false) {
    busy=true;
    if (whomsts==0) {
      clearTimeout(this.timeoutID);
      document.getElementById("foreffect2").style.display="block";
      document.getElementById("artigoTitle").style.transition="none";
      document.getElementById("artigoTitleG").style.transition="none";
      this.timeoutID = setTimeout(() => {
        document.getElementById("artigoTitle").style.top="11vw";
        document.getElementById("artigoTitleG").style.top="10vw";
        document.getElementById("artigoTitle").style.transition="all 0.1s";
        document.getElementById("artigoTitleG").style.transition="all 0.15s";
      }, "10");
      this.timeoutID = setTimeout(() => {
        document.getElementById("artigoTitle").style.top="6.625vw";
      }, "1000");
      this.timeoutID = setTimeout(() => {
        document.getElementById("foreffect2").style.display="none";
        document.getElementById("artigoTitleG").style.top="11vw";
        busy=false;
      }, "1100");
    }else{
      clearTimeout(this.timeoutID);
      document.getElementById("foreffect2").style.display="block";
      document.getElementById("multimediaTitle").style.transition="none";
      document.getElementById("multimediaTitleG").style.transition="none";
      this.timeoutID = setTimeout(() => {
        document.getElementById("multimediaTitle").style.top="11vw";
        document.getElementById("multimediaTitleG").style.top="10vw";
        document.getElementById("multimediaTitle").style.transition="all 0.1s";
        document.getElementById("multimediaTitleG").style.transition="all 0.15s";
      }, "10");
      this.timeoutID = setTimeout(() => {
        document.getElementById("multimediaTitle").style.top="6.625vw";
      }, "1000");
      this.timeoutID = setTimeout(() => {
        document.getElementById("foreffect2").style.display="none";
        document.getElementById("multimediaTitleG").style.top="11vw";
        busy=false;
      }, "1100");
    }
    
  }
  
}

function selectInterested(whichone){
  switch (whichone){
    case 0:
      document.getElementById("selectorIntere").style.top="14.1vw";
      document.getElementById("selectorIntere").style.opacity="100%";
      break;
    case 1:
      document.getElementById("selectorIntere").style.top="17.1vw";
      document.getElementById("selectorIntere").style.opacity="100%";
      break;
    case 2:
      document.getElementById("selectorIntere").style.top="20.1vw";
      document.getElementById("selectorIntere").style.opacity="100%";
      break;
    case 3:
      document.getElementById("selectorIntere").style.top="23.1vw";
      document.getElementById("selectorIntere").style.opacity="100%";
      break;
    case 4:
      document.getElementById("selectorIntere").style.opacity="0%";
      break;
  }
  
}

function selectFooter(whichone){
  document.getElementById("footerselector").style.opacity="100%";
  switch (whichone){
    case 0:
      document.getElementById("footerselector").style.top="7.7vw";
      break;
    case 1:
      document.getElementById("footerselector").style.top="9.7vw";
      break;
    case 2:
      document.getElementById("footerselector").style.top="11.7vw";
      break;
    case 3:
      document.getElementById("footerselector").style.top="13.7vw";
      break;
    case 4:
      document.getElementById("footerselector").style.top="15.7vw";
      break;
  }
  
}

var currentJogos = 0;

function gmaie(indeti) {
  if (indeti==1) {
    currentJogos=currentJogos+1;
  }else{
    currentJogos=currentJogos-1;
  }
  if (currentJogos<0) {
    currentJogos=jogos.length-1;
  }else{
    if (currentJogos>=jogos.length) {
      currentJogos=0;
    }
  }

  document.getElementById("gamesdiv").style.opacity="0%";
  setTimeout(() => {
    document.getElementById("jogosImg2").src=jogos[currentJogos][1];
    document.getElementById("jogosName").innerHTML=jogos[currentJogos][0];
    document.getElementById("jogosDesc").innerHTML=jogos[currentJogos][4];
    document.getElementById("jogosInfo1").innerHTML=jogos[currentJogos][2];
    document.getElementById("jogosInfo0").innerHTML=jogos[currentJogos][5];
    document.getElementById("jogosLink").href=jogos[currentJogos][3];
    document.getElementById("gamesdiv").style.opacity="100%";
  }, "500")
  
}