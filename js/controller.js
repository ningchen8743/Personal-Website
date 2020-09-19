"use strict";

{//start scope
    let btnInfoDesign = document.querySelector("#info-design");
    let btnGisMap     = document.querySelector("#gis-map");
    let btnUrbanPlan  = document.querySelector("#urban-plan");
    let btnAllWorks   = document.querySelector("#all-works");
    let els = document.querySelectorAll('.project-thumbnail');

    //------------------------------------------------------------
    // helper function
    //------------------------------------------------------------
    function getDivAndImg(myElement) {
        let myDiv;
        let myImg;

        // get div
        for(let j = 0; j < myElement.childNodes.length; ++j)
        {
            myDiv = myElement.childNodes[j];
            if(myDiv.className === 'show-on-hover')
            {
                break;
            }
        }

        // get image
        for(let j = 0; j < myElement.childNodes.length; ++j)
        {
            myImg = myElement.childNodes[j];
            if(myImg.className === 'image-inside')
            {
                break;
            }
        }

        return {"myDiv" : myDiv,
                "myImg" : myImg};
    }

    //------------------------------------------------------------
    // helper function
    //------------------------------------------------------------
    let mouseOverHandler = (event) => {
        // event.currentTarget always refers to the parent element <div class="project-thumbnail">
        let myResult = getDivAndImg(event.currentTarget);

        let myDiv = myResult["myDiv"];
        let myImg = myResult["myImg"];

        myDiv.style.opacity = 1.0;
        myImg.style.opacity = 0.1;
    };

    //------------------------------------------------------------
    // helper function
    //------------------------------------------------------------
    let mouseOutHandler = (event) => {
        // event.currentTarget always refers to the parent element <div class="project-thumbnail">
        let myResult = getDivAndImg(event.currentTarget);

        let myDiv = myResult["myDiv"];
        let myImg = myResult["myImg"];

        myDiv.style.opacity = 0.0;
        myImg.style.opacity = 1.0;
    };

    //------------------------------------------------------------
    // helper function
    //------------------------------------------------------------
    function configureSelectedEls(activeElsIndex, myButton) {
        // add event listener to buttons
        myButton.addEventListener("click", () => {
            // remove event listener from all divs
            for(let i = 0; i < els.length; ++i)
            {
                let myResult = getDivAndImg(els[i]);

                let myDiv = myResult["myDiv"];
                let myImg = myResult["myImg"];

                // check if the element is active or inactive
                let bIsActive = activeElsIndex.includes(i);

                // for active elements
                if(bIsActive)
                {
                    myDiv.style.opacity = 0.0;
                    myImg.style.opacity = 1.0;

                    els[i].addEventListener("mouseover", mouseOverHandler);
                    els[i].addEventListener("mouseout", mouseOutHandler);
                }
                // for inactive elements
                else
                {
                    myDiv.style.opacity = 0.0;
                    myImg.style.opacity = 0.1;

                    els[i].removeEventListener("mouseover", mouseOverHandler);
                    els[i].removeEventListener("mouseout", mouseOutHandler);
                }
            }
        }); // end myButton.addEventListener
    }

    //------------------------------------------------------------
    // main
    //------------------------------------------------------------
    // initialize
    for(let i = 0; i < els.length; ++i)
    {
        let myResult = getDivAndImg(els[i]);

        let myDiv = myResult["myDiv"];
        let myImg = myResult["myImg"];

        myDiv.style.opacity = 0.0;
        myImg.style.opacity = 1.0;

        els[i].addEventListener("mouseover", mouseOverHandler);
        els[i].addEventListener("mouseout", mouseOutHandler);
    }

    configureSelectedEls([0, 1, 2, 3, 4, 5, 6], btnInfoDesign);
    configureSelectedEls([7, 8, 9], btnGisMap);
    configureSelectedEls([10, 11, 12, 13, 14], btnUrbanPlan);
    configureSelectedEls([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], btnAllWorks);

}//end scope


