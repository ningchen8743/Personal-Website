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

    let btnInfoDesign = document.querySelector("#info-design");
    let btnGisMap     = document.querySelector("#gis-map");
    let btnUrbanPlan  = document.querySelector("#urban-plan");
	let btnAllWorks   = document.querySelector("#all-works");

    let projectList = document.querySelectorAll(".project-thumbnail");

    btnInfoDesign.addEventListener("click", () => {
        for(let i = 0; i < 6; ++i)
        {
            if(i < 3)
            {
                projectList[i].style.visibility = "visible";
            }
            else
            {
                projectList[i].style.visibility = "hidden";
            }
        }
    });

    btnGisMap.addEventListener("click", () => {
        for(let i = 0; i < 6; ++i)
        {
            if(i == 3)
            {
                projectList[i].style.visibility = "visible";
            }
            else
            {
                projectList[i].style.visibility = "hidden";
            }
        }
    });

    btnUrbanPlan.addEventListener("click", () => {
        for(let i = 0; i < 6; ++i)
        {
            if(i == 4 || i == 5)
            {
                projectList[i].style.visibility = "visible";
            }
            else
            {
                projectList[i].style.visibility = "hidden";
            }
        }
    });
	
	btnAllWorks.addEventListener("click", () => {
		for(let i = 0; i < projectList.length; ++i)
		{
			projectList[i].style.visibility = "visible";
		}
	});
	
}//end scope


