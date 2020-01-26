"use strict";

{//start scope
    let els = document.querySelectorAll('.project-thumbnail');
    for(let i = 0; i < els.length; ++i)
    {
        let myDiv;
        let myImg;

        // get div
        for(let j = 0; j < els[i].childNodes.length; ++j)
        {
            myDiv = els[i].childNodes[j];
            if(myDiv.className === 'show-on-hover')
            {
                break;
            }
        }

        // get image
        for(let j = 0; j < els[i].childNodes.length; ++j)
        {
            myImg = els[i].childNodes[j];
            if(myImg.className === 'image-inside')
            {
                break;
            }
        }

        // fade out
        els[i].addEventListener('mouseover', (event) => {
                myDiv.style.visibility = "visible";
                myImg.style.opacity = 0.1;

                // if(event.target === myImg)
                // {
                    // console.log("in");
                    // myDiv.style.visibility = "visible";
                    // myImg.style.opacity = 0.2;

                    // // let fadeOutHandler = setInterval(() => {
                        // // if(myImg.style.opacity > 0.2)
                        // // {
                            // // myImg.style.opacity -= 0.05;
                        // // }
                        // // else
                        // // {
                            // // // console.log(myImg.style.opacity);
                            // // // myImg.style.opacity = 0.2;
                            // // clearInterval(fadeOutHandler);
                        // // }
                    // // }, 20);
                // }
            });

        // fade in
        els[i].addEventListener('mouseout', (event) => {
                
                    myDiv.style.visibility = "hidden";
                    myImg.style.opacity = 1.0;
                
            });
    }
	
	


}//end scope


function selectFunction(){
	document.getElementById("demo").innerHTML = "";		
}