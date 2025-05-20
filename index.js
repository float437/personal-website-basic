document.addEventListener('DOMContentLoaded', function(){
    if(!document.getElementById('tracker')){
        //creating the tracker element
        const tracker = document.createElement('div');
        tracker.id = 'tracker';
        tracker.className = 'hidden';
        //appending to the document, its not made yet
        let main = document.getElementById('main-content');
        main.appendChild(tracker);
    }

    //mouse and follower data stored. Note they're different locations
        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;
        let speed = 0.09;

        document.addEventListener('mousemove', function(e){
            tracker.className = 'tracker';
            mouseX = e.clientX;
            // console.log("Mouse X position: " + mouseX);
            mouseY = e.clientY;
            // console.log("Mouse Y position: " + mouseY);
        });

        function smoothFollow(){
            followerX += (mouseX - followerX) * speed;
            // console.log("Follower X position: " + followerX);
            followerY += (mouseY - followerY) * speed;
            // console.log("Follower Y position: " + followerY);


            const tracker = document.getElementById('tracker');
             if (tracker){
                //caluculating the new position
                const leftPos = (((followerX ) * 100) / window.innerWidth) + '%';
                const topPos = (((followerY ) * 100) / window.innerHeight) + '%';

                //applying it
                tracker.style.top = topPos;
                tracker.style.left = leftPos;
             }

             // Continuing the Animation loop
             // WHY IS THERE NO PARENTHESIS AFTER THIS??
             requestAnimationFrame(smoothFollow);
        }

        smoothFollow();
});

