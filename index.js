var position=0;
var elements=['logo', 'description', 'service', 'contact', 'imprint'];

window.onload = function(){
	moveby(0);
	
	document.addEventListener('keyup', function(e){
		e = e || window.event;

		if(e.keyCode == 37){
			if(position > 0){
				moveby(-1);
			}
		} else if(e.keyCode == 38){
			if(position > 0){
				moveby(-1);
			}
		} else if(e.keyCode == 39){
			if(position < elements.length - 1){
				moveby(1);
			}
		} else if(e.keyCode == 40){
			if(position < elements.length - 1){
				moveby(1);
			}
		}
	});
	
	document.querySelector('.up').addEventListener('click', function(){
		moveby(-1);	
	});

	document.querySelector('.down').addEventListener('click', function(){
		moveby(1);
	});
}

function moveby(direction){
	document.querySelector('.' + elements[position]).style.borderBottom = '';
	
	position=Math.trunc(window.scrollY/(document.querySelector('.container').offsetHeight/elements.length));

	if(isNaN(direction)){
		for(i = 0; i < elements.length; i++){
			if(elements[i] == direction){
				position = i;
				direction = 0;
			}
		}
		if(isNaN(direction)){
			direction = 0;
		}
	}

	position+=direction;

	document.querySelector('#' + elements[position]).scrollIntoView({behavior: 'smooth'});
	
	if(position == elements.length - 1){
		document.querySelector('.up').style.visibility = 'visible';
		document.querySelector('.down').style.visibility = 'hidden';
	} else if(position == 0){
		document.querySelector('.up').style.visibility = 'hidden';
		document.querySelector('.down').style.visibility = 'visible';
	} else {
		document.querySelector('.up').style.visibility = 'visible';
		document.querySelector('.down').style.visibility = 'visible';
	}
	
	if(position > 0){
		document.querySelector('.' + elements[position]).style.borderBottom = '1px solid #9b1d20';
	}
}

function sendmail() {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.querySelector('.output').innerHTML = this.responseText;
		}
	}
	request.open('POST', 'mail.php', true);
	request.send();
}
