



let usern = prompt("please enter your name:")

do {
    


let user = prompt("Please Choose anyone of these s or w or g")

let rand = Math.floor(Math.random() * 3)
let cpu = ["s", "w", "g"][rand]

function game(user,cpu){



    if (user == cpu) {
        return "nobody else";
    }
    else if (user == "s" && cpu == "w") {
        return usern;
    }
    else if (user == "s" && cpu == "g") {
        return "computer";
    }
    else if (user == "g" && cpu == "w") {
        return "computer";
    }
    else if (user == "g" && cpu == "s") {
        return usern;
    }
    else if (user == "w" && cpu == "g") {
        return usern;
    }
    else if (user == "w" && cpu == "s") {
        return "computer";
    }


    else{
        alert("please enter a valid input")
    }


}


document.write(`${usern}:${user}<br> computer:${cpu}<br>Winner is : ${game(user, cpu)} <br>
`);

    let again = confirm("if play again so press ok");
    
    if (again) {
        
        
    }
    else{
        break;
        
    }
    

    
}while(true);
    