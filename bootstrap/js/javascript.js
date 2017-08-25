<script type="text/javascript">
        // variables
        var totalQuestions = 5;

        var questionOneAnswer;
        var questionTwoAnswer;
        var questionThreeAnswer;
        var questionFourAnswer;
        var questionFiveAnswer;
        var totalQuestionsCorrect;

        var audio = new Audio("assets/audio/computer-beep.mp3")

        $("#questionSection").toggle(1);

        $("#startTimer").on("click", function() {
            document.getElementById("q1").reset();
            document.getElementById("q2").reset();
            document.getElementById("q3").reset();
            document.getElementById("q4").reset();
            document.getElementById("q5").reset();
            totalQuestionsCorrect = 0;
            $("#gameResults").html("");
            var count = 15;
            var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
            $("#questionSection").toggle(2000);
            // $("#gameResults").toggle(1000);//hide this section on start of game


            function timer() {

                count = count - 1;
                if (count == -1) {
                    clearInterval(counter);
                    $("#questionSection").toggle(1000);
                    showResults();


                    return;
                }
                $("#timeLeft").html("<h3>Seconds Remaining   </h3>" + "<h2>" + count + "</h2>");

            }
        })

        // Question 1 -----------------------------------------

        $(".question1").on("click", function() {
            audio.play();

            questionOneAnswer = $(this).attr("data-name");


            if (questionOneAnswer == "choice3") {
                totalQuestionsCorrect++;

            }
        });

        // Question 2  ------------------------------------------          

        $(".question2").on("click", function() {
            audio.play();

            questionTwoAnswer = $(this).attr("data-name");


            if (questionTwoAnswer == "choice4") {
                totalQuestionsCorrect++;

            }
        });

        // Question 3 -------------------------------------------

        $(".question3").on("click", function() {
            audio.play();

            questionThreeAnswer = $(this).attr("data-name");


            if (questionThreeAnswer == "choice2") {
                totalQuestionsCorrect++;

            }
        });

        // Question 4 -------------------------------------------

        $(".question4").on("click", function() {
            audio.play();

            questionFourAnswer = $(this).attr("data-name");


            if (questionFourAnswer == "choice1") {
                totalQuestionsCorrect++;

            }
        });

        // Question 3 -------------------------------------------

        $(".question5").on("click", function() {
            audio.play();

            questionFiveAnswer = $(this).attr("data-name");


            if (questionFiveAnswer == "choice3") {
                totalQuestionsCorrect++;

            }
        });

        // Game Clock -------------------------------------------


        function showResults() {
            setTimeout(function() {


                $("#gameResults").html("<h3 class='text-center text-danger'>   *** You got " + totalQuestionsCorrect + "   out of " + totalQuestions + " correct ***</h3>");
            }, 1500);
            // $("#gameResults").toggle(5000);


        }
        // countdown timer

    </script>