let e;

function Scimmia(turns, moves, myMoves){

  for(var i = 0; i < turns; i++){
    if (i = 0){
      myMoves.push(1);
      return 1;
    }
    else{
      myMoves.push(moves[i]);
      return moves[i];
    }

  }

}



function Lines(c){
    this.myMoves = [];
    this.x = 0;
    this.y = 0;
    this.c = c;

    this.set = function(x, y){

      this.x = x;
      this.y = y;
    }
    this.show = function(x1, y1, x2, y2) {
      stroke(this.c);
      line(x1, y1, x2, y2);
     
  }


  this.play = function(enemy, turns){

    if (this.person = 0){
      return Scimmia(turns, enemy.myMoves, this.myMoves);
    }

  }

}