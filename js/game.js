
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
 

	
	


