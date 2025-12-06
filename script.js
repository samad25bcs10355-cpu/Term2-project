let timer;

        function startTimer() {
            let seconds = document.getElementById("secondsInput").value;
            let display = document.getElementById("time");

            if (seconds <= 0) {
                alert("Enter valid seconds!");
                return;
            }

            display.innerText = seconds;

            clearInterval(timer);

            timer = setInterval(function() {

                
                document.getElementById("tickSound").play();

                seconds--;
                display.innerText = seconds;

                if (seconds <= 0) {
                    clearInterval(timer);

                    
                    document.getElementById("endSound").play();

                    alert("⏰ Time’s up!");
                }

            }, 1000);
        }