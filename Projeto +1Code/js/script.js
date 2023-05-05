/* menu hamburguer */

const button = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");
const img  = document.querySelector(".hamburguer img");

button.addEventListener("click", function() {
  const fechar =  menu.classList.toggle("mobile-ativo");
  
  if (fechar) {
    img.setAttribute("src","close.svg");
  } else {
    img.setAttribute("src","menu.svg");
  }
}); 

/*--------------------------------------------------------------------------*/

/*API imagem */

const container = document.querySelectorAll(".produto");
async function dados() {

  let dados = await fetch("http://www.mocky.io/v2/5b15c4923100004a006f3c07");
  let descricao2 = await dados.json();
  console.log(descricao2);

    descricao2.items.forEach(function(produtos, index) {

      let fotoProduto = container[index].querySelector(".fotoProduto");
      let nomeProduto = container[index].querySelector(".nomeProduto");
      let preco = container[index].querySelector(".valor");
      console.log(preco);
      
      fotoProduto.setAttribute('src', produtos.product.imageObjects[0].medium);
      nomeProduto.innerText = produtos.product.name;
      preco.innerText = produtos.product.priceSpecification.price;

    });
}

dados();





/*------------------------------------------------------------------------- */

/*Sacola*/

let sacola = document.querySelector(".sacola");
let arrayProdutos = document.querySelectorAll("button");
let produtosSacola  = localStorage.getItem("Sacola") ? JSON.parse(localStorage.getItem("Sacola")) : [] ;

sacola.innerHTML = produtosSacola.length;
arrayProdutos.forEach(function(produto) {

  produto.addEventListener("click", function() {
   let produtoSerAdicionado =  this.closest(".produto").getAttribute("data-id");
    if (!produtosSacola.length) {
      produtosSacola.push({"idProduto": produtoSerAdicionado});
    } 


    let existeProduto = produtosSacola.find(element => element.idProduto == produtoSerAdicionado);
    if (!existeProduto) {
      produtosSacola.push({"idProduto": produtoSerAdicionado});
    }
    
    localStorage.setItem("Sacola", JSON.stringify(produtosSacola));
    sacola.innerHTML = produtosSacola.length;
    
  });
}); 

/*-------------------------------------------------------------------------- */