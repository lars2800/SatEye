/*
© 2025 Lars Van Goethem. All rights reserved.
Use permitted under LICENSE ( file )
*/

// Becuase browsers include their navbar is a margin in the app we hav to dynamicly adjust for that

        // First we get the viewport height and set it as a CSS variable
        function setVh() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh * 100}px`);
        }

        // Initial set
        setVh();

        // Update on resize/orientation change
        window.addEventListener('resize', setVh);
        window.addEventListener('orientationchange', setVh);

        // Add on load functionality
        window.addEventListener("DOMContentLoaded",function(){

            // Add listener to go to other page
            document.querySelector("#findSatBtnDiv p").addEventListener("click",function(){
                if (window.location.protocol === "file:") {
                    // Dev mode
                    window.location.href = "home.html";
                } else{
                    // Real website
                    window.location.href = "home";
                }
            })

        });