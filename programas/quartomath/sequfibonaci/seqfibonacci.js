const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let pular = document.getElementById("pular");
var tempo = 5000;
function skip(){
    tempo = 0;
    pular.innerText="Aguarde..."
}
async function sequenciar() {
  let num = document.getElementById("num");
  let quanterm = Number(num.value);
  if (quanterm > 2) {
    let snail = document.getElementById("snail");
    let slime = document.getElementById("slime");
    let titulo = document.getElementById("titulo");
    let menu = document.getElementById("menu");
    let lgbtsnail = document.getElementById("lgbtsnail");
    let folha1 = document.getElementById("folha1");
    let folha2 = document.getElementById("folha2");
    let resultado = document.getElementById("resultado");
    let numesq = document.getElementById("numesq");
    let numdir = document.getElementById("numdir");
    let t1 = 0;
    let t2 = 1;
    let lista = [0, 1];
    let cont = 3;
    titulo.style.animation = "fadeout 1500ms forwards";
    menu.style.animation = "fadeout 1500ms forwards";
    resultado.style.display = "grid";
    resultado.style.animation =
      "fadein 1500ms forwards, desce2 5s forwards linear alternate infinite";
    await sleep(1500);
    titulo.style.visibility = "hidden";
    menu.style.visibility = "hidden";
    snail.style.display = "block";
    slime.style.display = "block";
    lgbtsnail.style.animation = "desce 2s forwards linear alternate infinite";
    pular.style.display = "block";
    pular.style.animation =
      "fadein 1500ms forwards"
    while (cont <= quanterm) {
      folha1.style.animation = "none";
      folha2.style.animation = "none";
      let t3 = t1 + t2;
      lista.push(t3);
      t1 = t2;
      t2 = t3;
      if (cont % 2 == 0) {
        numesq.innerHTML = `${t1}`;
        folha1.style.animation = "fadeout 500ms forwards infinite";
        folha1.style.animationDelay = "4s";
      } else {
        numdir.innerHTML = `${t1}`;
        folha2.style.animation = "fadeout 500ms forwards infinite";
        folha2.style.animationDelay = "4s";
      }
      resultado.innerHTML = `${t3}`;
      await sleep(tempo);
      cont += 1;
    }
    titulo.style.display = "none";
    menu.style.display = "none";
    snail.style.display = "none";
    slime.style.display = "none";
    folha2.style.display = "none";
    folha1.style.display = "none";
    numesq.style.display = "none";
    numdir.style.display = "none";
    pular.style.display = "none";
    resultado.style.display = "none";
    lgbtsnail.style.display = "none";
    let background = document.getElementById("background");
    let styles = {
        fontFamily: 'consolas, "Courier New", monospace',
        fontSize: "2em",
        fontWeight: "bold",
        color: "black",
        textShadow: "white 0px 0px 6px",
        wordBreak: "break-all" 
      };
      Object.assign( background.style, styles);
      for(let pos in lista){
           background.innerHTML+= `${lista[pos]} &#x2192; `
    }
    background.innerHTML+= `Fim da sequência &#128012; `
  } else {
    num.value = "";
    window.alert("Valor inválido");
  }
}