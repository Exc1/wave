const datesInfo = document.getElementById('for-select')
const select = document.getElementById('select')
const dota = document.getElementById('dota')
const cs = document.getElementById('cs')

select.addEventListener('input', fakeChange)

function fakeChange() {
	var op = 0;
	if (select.value == "csgo"){
		var op = 0;
		cs.style.display.opacity = 0
		dota.style.display = "none";
		cs.style.display = "block";
		cs.style.opacity = 0;
		setTimeout(function func4() {
         if (op > 1)
             return;
         cs.style.opacity = op;
         op += 0.1;
         setTimeout (func4, 30);
     	}, 60); 



    }

		
	
	if (select.value == "dota2"){
		var op = 0;
		cs.style.display.opacity = 0
		cs.style.display = "none";
		dota.style.display = "block";
		dota.style.opacity = 0;
		setTimeout(function func4() {
         if (op > 1)
             return;
         dota.style.opacity = op;
         op += 0.1;
         setTimeout (func4, 30);
     	}, 60);  
    }}





function changeDota() {
    document.getElementById("welcome").style.backgroundImage = "url('../img/dota.jpg')";
    document.getElementById("btn-dota").style.display= "none";
    document.getElementById("btn-csgo").style.display = "flex";
}

function changeCs() {
    document.getElementById("welcome").style.backgroundImage = "url('../img/csgo.jpg')";
    document.getElementById("btn-dota").style.display= "flex";
    document.getElementById("btn-csgo").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){
		
		el_autohide = document.querySelector('.autohide');
		
		// add padding-top to bady (if necessary)
		// navbar_height = document.querySelector('.navbar').offsetHeight;
		// document.body.style.paddingTop = navbar_height + 'px';

		if(el_autohide){
			
			var last_scroll_top = 0;
			window.addEventListener('scroll', function() {
	       		let scroll_top = window.scrollY;
		       if(scroll_top < last_scroll_top) {
		            el_autohide.classList.remove('scrolled-down');
		            el_autohide.classList.add('scrolled-up');
		        }
		        else {
		            el_autohide.classList.remove('scrolled-up');
		            el_autohide.classList.add('scrolled-down');
		        }
		        last_scroll_top = scroll_top;

			}); 
			// window.addEventListener

		}
		// if
		
	}); 
	// DOMContentLoaded  end



function openNav() {
    document.getElementById("sideNavigation").style.width = "300px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var node = document.getElementsByClassName('watched')
node.onclick = function(){
   closeNav();
}