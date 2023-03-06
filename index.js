const parrafos = document.querySelectorAll('.parrafo')
const section =  document.querySelectorAll('.section')
const remov =  document.querySelectorAll('.remover')
parrafos.forEach(indice =>{
    indice.addEventListener("dragstart", event =>{
        console.log("Click" + indice.innerText)
        indice.classList.add("dragging")
        event.dataTransfer.setData("id", indice.id)
        const img = document.getElementById("imagen")
        event.dataTransfer.setDragImage(img,0,0)
    })

    indice.addEventListener("dragend", ()=>{
        console.log("Ya no esta el click")
        indice.classList.remove("dragging")
    })
})


section.forEach(indice => {
    indice.addEventListener("dragover", evento =>{
        evento.preventDefault()
        evento.dataTransfer.dropEffect = "copy"
    })

    indice.addEventListener("drop", event =>{
        const id_parrafo = event.dataTransfer.getData("id")
        const parr = document.getElementById(id_parrafo)
        indice.appendChild(parr)
    })
})

remov.forEach(indice => {

    indice.addEventListener("dragover", evento =>{
        evento.preventDefault()
        //evento.dataTransfer.dropEffect = "copy"
    })

    indice.addEventListener("drop", event =>{
        const id_parrafo = event.dataTransfer.getData("id")
        console.log(id_parrafo + "aquí")
        const parr = document.getElementById(id_parrafo)
        parr.parentNode.removeChild(parr)
    })
})
