

function populateUFs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => {return res.json() })
    .then( states => {

        for( const state of states) {
            ufselect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event)  {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    
    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true
    
    fetch(url)
    .then( (res) => {return res.json() })
    .then( cities => {

        for( const city of cities) {
            citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//Itens de coleta
//Pegar todos os li
const itemsToCollect = document.querySelectorAll(".itens-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

//atualizar o campo escondido
const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
   
    const itemLi = event.target   
   
    //adicionar ou remover uma classe com js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //verificar se existem itens selecionados, se sim, pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( function(item) {
        const itemFound = item == itemId //isso será true ou false
        return itemFound //retorna a variavel
        
    })


    //se ja estiver selecionado, tirar da seleção
    if( alreadySelected >= 0) {
        //tirar da seleção
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
          //se nao estiver selecionado, adicionar a seleção
          selectedItems.push(itemId)

    }

     //atualizar o campo escondido com os itens selecionados
    
     collectedItems.value = selectedItems
    
}


  
    
   





