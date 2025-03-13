document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        if (e.key == "Escape")e.target.value = "";
        document.querySelectorAll(".table tbody tr").forEach(app =>{
            app.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?app.classList.remove("filtro")
            :app.classList.add("filtro")
        })
    }
})
    
    
const texto = "Apps y Juegos Gratis";
let i = 0;

function escribir(){
  if(i<texto.length){
    document.getElementById('escribir').textContent = texto.slice(0, i+1) + "|";
    i++;
    setTimeout(escribir, 100);
  } else {
    document.getElementById("escribir").textContent = texto;
  }
}

setTimeout(escribir, 500);


  
        