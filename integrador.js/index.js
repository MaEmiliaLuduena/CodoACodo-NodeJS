const queryID = (id) => document.getElementById(`${id}`);

const totalAPagar = () => {
  let categoria = queryID("categoria").value;
  if (categoria === "estudiante") {
    categoria = 40;
  } else if (categoria === "trainee") {
    categoria = 100;
  } else {
    categoria = 170;
  }
  const cantidad = parseInt(queryID("cantidad").value);
  let porcentaje = cantidad * categoria;
  queryID("total").innerHTML = `${porcentaje}`;
};

const borrarDatos = () => {
  const categoria = queryID("categoria").value;
  const cantidad = parseInt(queryID("cantidad").value);
  const total= queryID("total").value;
  categoria = "";
  cantidad = "";
  total= "";
};

queryID("resumen").addEventListener("click", totalAPagar);

queryID("borrar").addEventListener("click", borrarDatos);