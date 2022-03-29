/*main fonction*/
/*document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault()
    console.log("loaded!!!!")
    /*declaration des variables*//*
    let parents, elements, title, dates
    parents = document.querySelector("body")
    title = document.querySelector("h1")
    title.textContent += " en javasript"

    dates = new Date().getFullYear()
    console.log(dates)
    footer.textContent += dates //2021
    
    console.log(parents.parentElement) //parent de body
    console.log(parents.childNodes) //les enfants de body
})*/

document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e.target)
    const el = document.querySelector(".inner-form")
    let list = document.createElement("ul")
    el.appendChild(list)
    
    const form = ({// <------objet  //
        first_name : document.getElementsByName("prenom")[0],
        last_name : document.getElementsByName("nom")[0],
        date : document.getElementsByName("date")[0],
        phone : document.getElementsByName("phone")[0],
        btn_validation : document.getElementById('btn'),
        warning : document.querySelectorAll(".warning"),
        Info : [],//  <-------table //
            controle(){
                if(this.first_name && this.last_name && this.phone && this.date){
                    console.log(
                        `Nom : ${this.last_name.value}
                        Prenom : ${this.last_name.value}
                        Date : ${this.last_name.value}
                        Phone : ${this.last_name.value}`
                    )
                    form.Info.push(this.last_name.value, this.first_name.value, this.date.value, this.phone.value)
                    console.table(form.Info)
                    localStorage.setItem('User', JSON.stringify(form.Info));
        //            form.warning.classList.remove("show-warning")
                }
                else{
                    form.warning.classList.add("show-warning")
                    form.warning.innerTexte = "Remplir les champs"
//                    alert("Remplir les champs")
                }
            }
    })

    form.btn_validation.addEventListener("click", (e) => {
        e.preventDefault();
        form.controle();
    });
});
