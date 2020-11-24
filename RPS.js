const winsound = new Audio('aww.mp3');
const losesound = new Audio('win.wav');


function rpsGame(yourChoice){
    var humanChoice = yourChoice.id;

    var botChoice = randChoice(randInt());
    console.log(humanChoice);    
    console.log(botChoice);


     result = decideWinner(humanChoice, botChoice);
     console.log(result);

    message = finalMessage(result);
    console.log(message);
    if(result[0] == 0 && result[1] == 1){
        winsound.play();
    }
    if(result[0] == 1 && result[1] == 0){
        losesound.play();
    }

    rpsfrontend(humanChoice,botChoice,message);
}


function randInt(){
    return Math.floor(Math.random() * 3);
}
function randChoice(number){
    return ['rock','paper','scissors'][number]
}
function decideWinner(yourChoice, compChoice){
    var rpsData = {
        'rock' : {'scissors': 1,'rock': 0.5,'paper': 0},
        'paper' : {'scissors': 0,'rock': 1,'paper': 0.5},
        'scissors' : {'scissors': 0.5,'rock': 0,'paper': 1}
    };
    var yourScore = rpsData[yourChoice][compChoice];
    var compScore = rpsData[compChoice][yourChoice];

    return [yourScore, compScore];
}
function finalMessage([yourScore]){
    if(yourScore == 0){
        return {'message': 'oops!, you lost','color':'red'};
    }
    else if(yourScore == 0.5){
        return {'message': 'you Tied!','color':'yellow'};
    }
     else if(yourScore == 1){
        return {'message': 'Wow!, you won','color':'green'};
    }
}

function rpsfrontend(humanImageChoice,botImageChoice,finalMessage){
    var imageData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageData[humanImageChoice] + "' height=150 width=150>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + " ; font-size: 60px; padding: 20px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageData[botImageChoice] + "' height=150 width=150>"

    document.getElementById('flex-container').appendChild(humanDiv);
    document.getElementById('flex-container').appendChild(messageDiv);
    document.getElementById('flex-container').appendChild(botDiv);
    
    
}