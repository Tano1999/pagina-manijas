/*<li class="categoria">
          Cubetas
          <img src="imgs/cubeta/cub35.jpg" alt="" />
          <ul class="productos">
            <li>CUBETA DE APOYAR DE 32MM</li>
          </ul>
        </li>*/

catalogoData.forEach((element) => {
  let miLi = document.createElement("li");
  let miParrafo = document.createElement("p");
  miParrafo.className = "namecategoria";
  miParrafo.innerHTML = element.nombre;
  miLi.appendChild(miParrafo);
  miLi.className = "categoria";
  document.getElementById("lista_productos").appendChild(miLi);
  let miImg = document.createElement("img");
  miImg.src = "imgs/" + element.carpeta + "/" + element.imagen;
  miLi.appendChild(miImg);
  let miUl = document.createElement("ul");
  miUl.className = "productos";
  miLi.appendChild(miUl);
  element.info.forEach((producto) => {
    let miName = document.createElement("li");
    miName.innerHTML = producto.nombre;
    miName.onclick = () => {
      document.getElementById("modal").style.display = "block";
      document.getElementById("modalname").innerHTML = producto.nombre;
      document.getElementById("imgPrincipal").src =
        "imgs/" + element.carpeta + "/" + producto.imagen;
      document.getElementById("imgPrincipal").alt = producto.nombre;
      producto.productos.forEach((productoFinal) => {
        let miTr = document.createElement("tr");
        miTr.className = "trAgregado";
        let miTd1 = document.createElement("td");
        let miTd2 = document.createElement("td");
        miTd1.innerHTML = productoFinal.codigo;
        miTd2.innerHTML = productoFinal.estilo;
        miTr.appendChild(miTd1);
        miTr.appendChild(miTd2);
        document.getElementById("tbody").appendChild(miTr);
      });
    };
    miUl.appendChild(miName);
  });
  miLi.onclick = () => {
    miLi.lastChild.style.display = "block";
    var overlay = document.getElementById("backgroundOverlay");
    overlay.style.display = "block";
  };
});
document.getElementById("cruz").onclick = () => {
  document.getElementById("modal").style.display = "none";
  let tbody = document.getElementById("tbody");
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
};
window.onload = function () {
  let productos = document.getElementsByClassName("productos");
  let overlay = document.getElementById("backgroundOverlay");
  document.onclick = function (e) {
    console.log(e);
    if (e.target.id == "backgroundOverlay") {
      for (
        let numeroProducto = 0;
        numeroProducto < productos.length;
        numeroProducto++
      ) {
        productos[numeroProducto].style.display = "none";
      }
      console.log(productos);
      overlay.style.display = "none";
    }
  };
};
