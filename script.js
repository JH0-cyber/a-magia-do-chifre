let ataques = 0;

window.onload = () => {
  mostrarDialogos([
    "Onde estou?...",
    "?Eroma?: Você chegou tarde demais...",
    "Você precisa achar a Palavra-Chave Arcana!"
  ], () => {
    document.getElementById("puzzle").style.display = "block";
  });
};

function mostrarDialogos(frases, callback) {
  const div = document.getElementById("dialogo");
  let i = 0;
  div.innerText = frases[i];
  const intervalo = setInterval(() => {
    i++;
    if (i < frases.length) {
      div.innerText = frases[i];
    } else {
      clearInterval(intervalo);
      div.innerText = "";
      if (callback) callback();
    }
  }, 3000);
}

function verificarSenha() {
  const resp = document.getElementById("resposta").value.toUpperCase();
  if (resp.length === "Jotaigo") {
    document.getElementById("puzzle").style.display = "none";
    mostrarDialogos([
      "Portão das Crinas aberto...",
      "Um espelho se quebra à sua frente...",
      "O Guardião apareceu!"
    ], () => {
      document.getElementById("boss").style.display = "block";
    });
  } else {
    alert("Palavra incorreta!");
  }
}

function atacar() {
  ataques++;
  document.getElementById("contador").innerText = "Ataques: " + ataques;
  if (ataques >= 4) {
    document.getElementById("boss").style.display = "none";
    mostrarDialogos([
      "O Guardião explode em pétalas negras...",
      "Você sente um poder antigo ao seu redor...",
      "?Eroma?: A Magia do Chifre é viva...",
      "Vire-se."
    ], () => {
      window.location.href = "final.html";
    });
  }
}
