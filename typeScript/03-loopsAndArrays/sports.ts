let sportsOne: string[] = ["golf" , "cricket", "football"];
for(let i=0; i< sportsOne.length; i++)
    {
        console.log(sportsOne[i]);
        
    } 

    console.log("---------------------------------------");
    
    //simplified version

    for(let tempSport of sportsOne)
    {
        if(tempSport == "cricket")
        {
            console.log(tempSport + ">> my favourite");
            
        }
        else{
            console.log(tempSport);
            
        }
    }