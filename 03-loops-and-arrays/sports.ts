let sportsOne: string[] = ["Golf", "Cricket", "Football", "Tennis", 'Swimming'];

for(let i = 0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}

// Using advanced for lop

for(let tempSport of sportsOne){

    if(tempSport == "Football"){
        console.log(tempSport + " is my favourite sport")
    }else{
        console.log(tempSport);
    }
}