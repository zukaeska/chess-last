$(document).ready(function(){
    var object = JSON.parse(games);
    var index = -1;
    var colorIndex = 0;
    var startingPosition;
    var endingPosition;
    var pieceName;
    var moveType;
    var movingPiece;

    $("#next").click(function(){
        if (index <= 39){
            if(colorIndex == 0)index++;
            if(index > 39){index = 39}else{          
            moveType = object.number1.move[index].colors[colorIndex].move_type;
            if (moveType != "castling"){
            startingPosition = object.number1.move[index].colors[colorIndex].starting_position;
            endingPosition = object.number1.move[index].colors[colorIndex].ending_position;
            pieceName = object.number1.move[index].colors[colorIndex].color + "_" +  object.number1.move[index].colors[colorIndex].name;
            }
            else {
            startingPosition = object.number1.move[index].colors[colorIndex].pieces[0].starting_position;
            endingPosition = object.number1.move[index].colors[colorIndex].pieces[0].ending_position;
            pieceName = object.number1.move[index].colors[colorIndex].color + "_" + object.number1.move[index].colors[colorIndex].pieces[0].name;
            }
            console.log(index, colorIndex, pieceName, startingPosition, endingPosition)
            movingPiece = document.getElementById(startingPosition).firstChild;
            endingPiece = document.getElementById(endingPosition);
            $(startingPosition).remove(this.firstChild);
            endingPiece.append(movingPiece);
            if (colorIndex == 0) colorIndex = 1; else colorIndex = 0;
        }
        }     
      }); 
    $("#back").click(function(){
        if (index >= 0){ 
            if (colorIndex == 0) colorIndex = 1; else colorIndex = 0;
            if(index < 0){index = 0}else{
            moveType = object.number1.move[index].colors[colorIndex].move_type;
            if (moveType != "castling"){
            startingPosition = object.number1.move[index].colors[colorIndex].starting_position;
            endingPosition = object.number1.move[index].colors[colorIndex].ending_position;
            pieceName = object.number1.move[index].colors[colorIndex].color + "_" +  object.number1.move[index].colors[colorIndex].name;
            }
            else {
            startingPosition = object.number1.move[index].colors[colorIndex].pieces[0].starting_position;
            endingPosition = object.number1.move[index].colors[colorIndex].pieces[0].ending_position;
            pieceName = object.number1.move[index].colors[colorIndex].color + "_" + object.number1.move[index].colors[colorIndex].pieces[0].name;
            }
            console.log(index, colorIndex, pieceName, startingPosition, endingPosition)            
            movingPiece = document.getElementById(endingPosition).firstChild;
            endingPiece = document.getElementById(startingPosition);
            $(endingPosition).remove(this.firstChild);
            endingPiece.append(movingPiece);
            if(colorIndex == 0 )index--;
            
        }
        }
    });
});
