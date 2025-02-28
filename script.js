function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a tag img

  const img = document.querySelector("#Profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/assets/Otniel.png")
  }
}