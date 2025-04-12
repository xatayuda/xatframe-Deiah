const colores = [
    "#A8C3BC",  // Verde grisáceo suave
    "#D5B8D3",  // Lila pastel
    "#F3D6B5",  // Durazno claro
    "#F5C9C7",  // Rosa pálido
    "#BFD8D2",  // Verde azulado suave
    "#E4CFE1",  // Rosa lavanda claro
    "#000001", // negro
    "#A52A2A",
    "#4169E1",
    "#FF69B4",
];
    let indiceColor = 0;

    document.getElementById('colorButton').addEventListener('click', () => {
    indiceColor = (indiceColor + 1) % colores.length;
    document.body.style.backgroundColor = colores[indiceColor];
    });