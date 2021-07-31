let container = document.getElementById('grid')
let reset = document.querySelector('button')

function changeCells(row, columns){
    container.style.gridTemplateRows=`repeat(${row},3fr)`

    container.style.gridTemplateColumns = `repeat(${columns},3fr)`
}


function makeGrids(gridNumber){
    gridNumber = gridNumber * gridNumber;
    for (let i=0; i < gridNumber; i++){
        let cell = document.createElement('div')
        cell.setAttribute('style',' height: 50px; width: 50px;')
        container.appendChild(cell).className="grid-div"
    }
    console.log("Created grid")

}


function color(){
    let grids = document.getElementsByClassName('grid-div')


    grids=Array.prototype.slice.call(grids);
    grids.forEach(element =>  element.addEventListener('mouseover' , function(e){

        element.setAttribute('style', 'background-color: green;')
    })
    )

}

changeCells(16, 16)
makeGrids(16)
color()

reset.addEventListener('click', ()=>{
    container.innerHTML=""
    let gridPrompt=prompt("How many grids to create?")

    if (gridPrompt > 100){
        alert("Input can't be over 100!")
        gridPrompt=prompt("How many grids to create?")
        }
        
    changeCells(gridPrompt, gridPrompt)


    makeGrids(gridPrompt)
    color()
    }
)