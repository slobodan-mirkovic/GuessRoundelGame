
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



var setGame = function(){
   var list = getRandomNumbers(6,10);    
  
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
       }
       else {
           setTimeout(setGame,2000);
       }
           
       });
  };
    
}

setGame();
 

	
	


