//Problem link: http://www.codewars.com/kata/547fb94931cce5f5de00024f
//You'll need an account to follow the link successfully

function tug_o_war(teams) {
  var teamsums = [0,0];
  var team2_anchor_idx = teams[1].length-1;
  
  //Compute & store the sums of each team
  for(i=0;i<2;i++) {
    for(j=0;j<teams[i].length;j++) {
      teamsums[i] += teams[i][j];
    }
  }
  
  //Perform comparisons
  if(teamsums[0] > teamsums[1]) {
    return "Team 1 wins!";
  } else if (teamsums[0] < teamsums[1]) {
    return "Team 2 wins!";
  } else if (teamsums[0] == teamsums[1]) {
  
    //Sums are equal, look at anchors instead
    if(teams[0][0] > teams[1][team2_anchor_idx]) {
      return "Team 1 wins!";
    } else if (teams[0][0] < teams[1][team2_anchor_idx]) {
      return "Team 2 wins!";
    } else if (teams[0][0] == teams[1][team2_anchor_idx]) {
      return "It's a tie!";
    }
    
  }
}