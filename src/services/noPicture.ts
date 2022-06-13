const noPicture = () => {
  const lista = [
    require("assets/filme0.jpg"),
    require("assets/filme1.jpg"),
    require("assets/filme2.jpg"),
    require("assets/filme3.jpg"),
    require("assets/filme4.jpg"),
    require("assets/filme5.jpg"),
    require("assets/filme6.jpg"),
    require("assets/filme7.jpg"),
    require("assets/filme8.jpg"),
  ];
  const elemento = lista[Math.floor(Math.random() * lista.length)];
  return elemento;
};
export default noPicture;
