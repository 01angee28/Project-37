class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    //write code to change the background color here
    background("purple");
    //write code to show a heading for showing the result of Quiz
    textSize(20);
    text("Result",225,100);
    //call getContestantInfo( ) here
    getContestantInfo();
    //write condition to check if contestantInfor is not undefined
    if (allContestants !== undefined){
    //write code to add a note here
      fill("Blue");
      textSize(18);
      text("Note : Contestant who answered correctly are highlighted in green colour",130,230);
    }
    //write code to highlight contest who answered correctly
    for (var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
      fill("Green");
      else 
      fill("Red");
    }
  }

}
