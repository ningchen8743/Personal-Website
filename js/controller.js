"use strict";

{//start scope
	let elementsToShow = document.querySelectorAll('.show-on-hover');
	let elementsToShowArray = Array.from(elementsToShow);
	
	for(let i = 0; i < elementsToShowArray.length; ++i){
		let item = elementsToShowArray[i];
		
		item.addEventListener('mouseover', (event) => {
			/* event.target.style.color = "red"; */
			event.target.classList.add('is-visible');
		})
		item.addEventListener('mouseleave', (event) => {
			/* event.target.style.color = "black"; */
			event.target.classList.remove('is-visible');
		})
	}
/* 	
	let elementsToGoaway = document.querySelectorAll('.image-inside');
	let elementsToGoawayArray = Array.from(elementsToGoaway);
	
	for(let i = 0; i < elementsToGoawayArray.length; ++i){
		let item = elementsToGoawayArray[i];
		
		item.addEventListener('mouseover', (event) => {
			event.target.classList.remove('is-visible');
		})
		item.addEventListener('mouseleave', (event) => {
			event.target.classList.add('is-visible');
		})
	} */
	
}//end scope