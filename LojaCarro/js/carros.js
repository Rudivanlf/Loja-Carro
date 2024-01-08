"use strict";

const items = [
    {
        id: 0,
        nome: 'Onix',
        img: 'LojaCarro/fotos/onix.jpeg',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'Camaro',
        img: 'LojaCarro/fotos/camaro.png',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'Tracker',
        img: 'LojaCarro/fotos/tracker.png',
        quantidade: 0
    }
]

iniciarLoja = () => {
    let containerChevro = document.getElementById('che');
    items.map((val)=>{
        console.log(val.nome);
        containerChevro.innerHTML += `

        <div class="produto-single">
        <img src="${val.img}" alt="Imagens dos respectivos carros">
        <p>${val.nome}</p>
        <a key="${val.id}" href="">Comprar Carro</a>
        </div>
        `;
    })
}

iniciarLoja();