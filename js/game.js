
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

  var list = getRandomNumbers(6,10);
  
  var roundel = list[getRandomNumber(6)];
 
  list.forEach(function(element){
	var galery = document.getElementById("flexcontainer");

    var listItem = document.createElement('div');
	listItem.className = "item";
    var img = document.createElement('img');
    img.src = "img/" + roundels[element].roundel ;
    listItem.appendChild(img);
    galery.appendChild(listItem);
	
	document.getElementById("roundel").innerText = roundels[roundel].airforce;
	  
  });
  
  var roundelsImg = document.querySelectorAll("#flexcontainer .item");
  for(var i = 0; i < roundelsImg.length ; i++){
	   roundelsImg[i].addEventListener('click', function () {alert('sasa');});
  };

	
	


