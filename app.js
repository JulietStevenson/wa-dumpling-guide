function getUserName(){
    let userName = prompt('Please Enter Your Name: ');
    console.log(userName);
    document.write('<h3>Welcome ' + userName + '!</h3>');
    return userName;
}


let user1 = getUserName();
    console.log(user1);

function getUserAnswer(){
    let userAnswer = prompt('Do you like dumplings? Yes or No');
    console.log(userAnswer);

        if (userAnswer.toLowerCase() == 'yes') {
            document.write('<h3>Get Excited ' + user1 + ' You are now part of the Crispy Bottom Family!</h3>');
        } else {
            document.write("<h3>It's ok if you don't like dumplings, this webiste will show you the dumpling's way</h3>");
        }
    }

function getAnimalAnswer(){
    let likeAnimals = prompt('Do you like animals? Yes or No')

        if (likeAnimals.toLowerCase() == 'yes') {
            document.write('<h3>Check out these cute animal dumplings!!!</h3>')
            document.write('<img src="https://cdn.vox-cdn.com/thumbor/wQLx4heM4jpYSVnO8mjPbN7Y0-Q=/0x430:6000x3571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19370637/_DSF3043.jpg"/>');
            } else {
                document.write('<h3>Sad, you must like burnt dumplings</h3>')
                document.write('<img src="https://lessonslearned2014.files.wordpress.com/2014/01/dumplings.jpg"/>');
            }
        }

 function userGuessingGame () {
    correctAnswer = Math.floor(Math.random() * 100) + 1;
    console.log(correctAnswer)
    userAttempts = 5;
    for(let i = 0; i < userAttempts; i++){
        let userGuess = prompt('Please enter a number 1 - 100. You have 5 attempts');
        while (userGuess < 1 || userGuess > 100){
            userGuess = prompt('Wrong Range. Please enter a number 1 - 100');
        }
        if (userGuess == correctAnswer) {
            alert('Congrats You Got it Right!!!')
            break;
        } else if(userGuess < correctAnswer){
            alert('To low, Guess again')
        }  else if(userGuess > correctAnswer) {
            alert('To high, Guess again')
        } else {
            alert('Something else went wrong');
        }
        console.log(i);
        if (i == userAttempts - 1){
            alert('You did not win. Correct Answer is: ' + correctAnswer);
        }
    }
}
       

function getTipAnswer() {
    let wantTip = prompt("Would you like a crispy bottom insider's tip? Yes or No")

        if (wantTip.toLowerCase() == 'yes') {
            document.write('<h2>Crispy Tip!</h2><p>When cooking your dumplings, make sure to make a "dumpling skirt" to ensure maximum crispyness. To do this, make a slurry of water and flour and add to the bottom of a pan while cooking your dumplings. Cover, and once you can see the golden brown, crispy, lace bottom, place a plate over the pan and flip over to remove the dumplings. Enjoy the crispyness!</p>');
            document.write('<img src="https://redhousespice.com/wp-content/uploads/2020/05/Chicken-potsticker-with-crispy-skirt-2-scaled.jpg"/>');
            } else {
                document.write("<h2> You'll never know how crispy a dumpling can get</h2>");
                document.write('<img src="https://www.pressurecookingtoday.com/wp-content/uploads/2017/02/Asian-Steamed-Dumplings-Picture-720x405.jpg"/>');
            }
        }


function crispyBottoms(){
    let numberOfCrispyBottoms = prompt('How many crispy bottoms could you eat in a day?')
        for(let i = 0; i < numberOfCrispyBottoms; i ++){
            document.write('<h3> Here are your Crispy Bottoms!</h3> <img src="https://mission-food.com/wp-content/uploads/2011/07/Vegetable-Dumplings-Featured.jpg"/>');
    }
}