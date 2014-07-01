var slaying = true;
var youHit = Math.floor(Math.random() * 2); // 0 <= youHit <= 1
var damageThisRound = Math.floor(Math.random() * 5 + 1); // 1 <= damageThisRound <= 5
var totalDamage = 0;

while(slaying) {
    if(youHit === 1){ // 공격 성공
        console.log("You hit the dragon!");
        totalDamage += damageThisRound;
        
        if(totalDamage >= 4){
            console.log("You slew the dragon");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random() * 2);
            continue;
        }
    }
    else { // 공격 실패
        console.log("The dragon defeated you");
        slaying = false;
    }
    slaying = false;   
}
