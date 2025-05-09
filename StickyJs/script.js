const addbutton = document.querySelector('#addbutton')

const notecontainer = document.querySelector('#notescontainer')


document.addEventListener('DOMContentLoaded',getlocalstore)

//when website is load getlocalstore function called and run it

addbutton.addEventListener('click',() => {
    newnotes('Write You Note....')
})

//content note function

function newnotes(contents) {
    const note = document.createElement('div')
    note.classList.add('note')
    note.style.backgroundColor = randomcolor()

    note.innerHTML = `
    <textarea class = "textarea_input">${contents}</textarea>
    <button class = "delete_btn" > X </button>
    `

    const textarea = note.querySelector('.textarea_input')
    const deletenote = note.querySelector('.delete_btn')

    textarea.addEventListener('focus' ,() => {
        if(textarea.value === "Write You Note...."){
            textarea.value = ""
        }
    })

    deletenote.addEventListener("click", () => {
        note.remove()
        localstore()
    })

    textarea.addEventListener('input',localstore)

    notecontainer.appendChild(note)
}

//rondom color function 
function randomcolor() {
    const colors = ["#de7f78","#487b82","#e6a58a","#8c78cf","#ad5050"]
    return colors[Math.floor(Math.random() * colors.length)]
}

//local storage senitme

function localstore(){
    const storages = [...document.querySelectorAll(
        ".note .textarea_input")
    ].map(notess => notess.value)

    localStorage.setItem('uservalue',JSON.stringify(storages))
}

//local storage getitem

function getlocalstore(){
    JSON.parse(localStorage.getItem("uservalue") || []).forEach(newnotes);
}