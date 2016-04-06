
'use strict'

var roundels = [
	{ id: 1, airforce: "Serbian Air Force", roundel: "Roundel_of_the_Serbian_Air_Force_2006.svg"},
	{ id: 2, airforce: "Montenegrin Air Force", roundel: "Roundel_of_the_Montenegran_Air_Force.svg"},
	{ id: 3, airforce: "Russian Air Force", roundel: "URSS-Russian_aviation_red_star.svg"},
	{ id: 4, airforce: "French Air Force", roundel: "French-roundel.svg"},
	{ id: 5, airforce: "United States Air Force", roundel: "Roundel_of_the_USAF.svg"},
	{ id: 6, airforce: "Royal Air Force", roundel: "RAF_roundel.svg"},
	{ id: 7, airforce: "Royal Australian Air Force", roundel: "RAAF_Roundel.svg"},
	{ id: 8, airforce: "Royal New Zealand Air Force", roundel: "Rnzaf_roundel.svg"},
	{ id: 9, airforce: "Spanish Air Force", roundel: "Roundel_of_the_Spanish_Air_Force.svg"},
	{ id: 10, airforce: "Italian Air Force", roundel: "LV_Italian_Air_Force_roundel.svg"},
	{ id: 11, airforce: "German Air Force", roundel: "Roundel_of_the_German_Air_Force_(with_Border).svg"},
	{ id: 12, airforce: "Croatian Air Force", roundel: "Roundel_of_the_Croatian_Air_Force.svg"},
	{ id: 13, airforce: "Hellenic Air Force", roundel: "Hellenic_Air_Force_Roundel.svg"},
	{ id: 14, airforce: "Macedonian Air Force", roundel: "Roundel_of_the_Macedonian_Air_Force.svg"},
	{ id: 15, airforce: "Slovenian Air Force", roundel: "Roundel_of_the_Slovenian_Air_Force.svg"},
	{ id: 16, airforce: "Portuguese Air Force", roundel: "Portuguese_Air_Force_roundel.svg"},
	{ id: 17, airforce: "Air Wing of the Armed Forces of Malta", roundel: "Roundel_of_Malta.svg"},
	{ id: 18, airforce: "Swiss Air Force", roundel: "Swiss_roundel.svg"},
	{ id: 19, airforce: "Polish Air Force", roundel: "Roundel_of_Poland.svg"},
	{ id: 20, airforce: "Austrian Air Force", roundel: "Roundel_of_the_Austrian_Air_Force.svg"},
	{ id: 21, airforce: "Czech Air Force", roundel: "Czech_roundel.svg"},
	{ id: 22, airforce: "Slovak Air Force", roundel: "Coat_of_arms_of_Slovakia.svg"},
];

'use strict'

function getRandomNumber(max) {
	return Math.floor(Math.random() * max) ;
} 


function getRandomNumbers(n,max) {
	
	var list = new Array();
	
	list.push(getRandomNumber(max));
	
	while(list.length < n){
		var random = getRandomNumber(max);
		if(list.indexOf(random) == -1){
			list.push(random);
		}
	}	
	return list;
} 

var points = 0;

var setGame = function(){
    
   var list = getRandomNumbers(6,22);    
  
   var roundel = list[getRandomNumber(6)];

   var galery = document.getElementById("flexcontainer");
    
    while (galery.firstChild) {
    galery.removeChild(galery.firstChild);
    }
 
  list.forEach(function(element){     

    var listItem = document.createElement('div');
	listItem.className = "item";
    listItem.id = roundels[element].id;
    var img = document.createElement('img');
    img.src = "img/" + roundels[element].roundel ;
    listItem.appendChild(img);
    galery.appendChild(listItem);
	
	document.getElementById("roundel").innerText = roundels[roundel].airforce;
	  
  });
  
  var roundelsImg = document.querySelectorAll("#flexcontainer .item");
  for(var i = 0; i < roundelsImg.length ; i++){
	   roundelsImg[i].addEventListener('click', function(){
       if(this.id - 1 == roundel){
           setGame();
           points++;
       }
       else {
            while (galery.firstChild) {
             galery.removeChild(galery.firstChild);
           }
           var cover = document.createElement('div');           
           cover.className = "cover";
           var corectImg = document.createElement('img');
           corectImg.src = "img/" + roundels[roundel].roundel ;
          cover.appendChild(corectImg);
          galery.appendChild(cover);
           setTimeout(function(){
               setGame();
           },2000);
       }
           
       });
  };
    
}
// setTimeout(function() {alert('End game, points: ' + points)},20000);
setGame();
 

	
	




'use strict'



