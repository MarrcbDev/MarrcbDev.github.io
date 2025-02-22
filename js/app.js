document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        if (e.key == "Escape")e.target.value = "";
        document.querySelectorAll("#table tr").forEach(app =>{
            app.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?app.classList.remove("filtro")
            :app.classList.add("filtro")
        })
    }
})