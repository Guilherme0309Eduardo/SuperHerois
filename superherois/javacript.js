function carregarSuperHerois(){

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET","https://akabab.github.io/superhero-api/api/all.json",false)
    requisicaoHttp.send()
    
    const resposta = JSON.parse(requisicaoHttp.responseText)
    const listaherois = resposta

    for( let index = 0 ; index < listaherois.length; index ++){
        const heroi = listaherois[index]
        adicionarCardSuperHeroi(heroi)
    }

}
function adicionarCardSuperHeroi(heroi) {
        const divCardElemento = document.createElement("div")
        divCardElemento.classList.add("card")
        
        const imagemElemento = document.createElement("img")
        imagemElemento.setAttribute("src", heroi.images.md)
        imagemElemento.style.width="90%"

        const textoElemento = document.createElement("h1")
        textoElemento.innerHTML = heroi.name

        const divElemento = document.getElementById("conteudo-super-herois")

        divCardElemento.appendChild(imagemElemento)
        divCardElemento.appendChild(textoElemento)

        divElemento.appendChild(divCardElemento)
}
