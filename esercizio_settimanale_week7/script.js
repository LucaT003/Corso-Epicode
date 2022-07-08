let users = []

let f = fetch('/users.json')
f.then((response)=> {           //questo blocco di codice è sempre uguale
    return response.json();
}).then(
    function(result) {
        console.log(result.users);
        users = result.users

        users.forEach((e)=>{
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = "persona.png"; //aggiungere img
            div.className = "carta";
            div.append(img);
            div.innerHTML += "<br>" + e.name+ "<br>" + e.email;
            let btn = document.createElement("button");
            btn.className = "btn-primary";
            btn.addEventListener("click", function(){
                //alert(e.id);
                alert("Leggerai l'username e l'indirizzo infondo alla pagina")
                let dettagli = document.getElementById("dettagli")
                dettagli.innerHTML += e.username + "<br>" + e.address.street + ", " + e.address.city 
            })
            div.append(btn)
            document.getElementById("card").append(div);
        })

    }
)


//classList
//element.classList.add("visibile")


//Per aggiungere un server veloce per testare le funzionalità di POST e DELETE useremo
//json-server https://github.com/typicode/json-server

//Come usare json-server
//nella cartella progetto aprire il terminale

//npm i json-server

//avviare il server
//json-server --watch users.json
//leggere in console l'indirizzo dell'api (dovrebbe essere  http://localhost:3000/users)

//NB: il file JSON deve essere impostato come un oggetto con la proprietà "users" che è l'array di utenti (se gli utenti nell'array hanno una proprietà "id" possiamo lavorare anche sul delete o leggere un utente specifico)

//Opzioni del fetch per eliminare un utente
let deleteOptions = {
    method: "DELETE"
}
//per eliminare un utente indicare /id nell'url da contattare con il fetch e aggiungere le opzioni
function deleteUsers(id) {
    fetch("http://localhost:3000/users/"+id, deleteOptions)
}

//Opzioni del fetch per aggiungere un utente.
//In body passare JSON.stringify() dell'oggetto da aggiungere, la cosa migliore sarebbe avere un form per inserire i dati e l'oggetto deve essere creato con i dati presi dal form
let postOptions = {
    method: "POST",
    headers: {
        'Accept': 'Application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: "Flavio Martinelli", username: "FlavioM"})
}
//per aggiugnere un utente usare un fetch con le opzioni sopra, indicare l'utente corretto
function addUser(id) {
    fetch("http://localhost:3000/users", postOptions)
}

//Per vedere le modifiche in interfaccia ricaricare la pagina