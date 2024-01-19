// olha só, eu não quero ter que pagar um servidor pra ter um backend, só pra
// poder ter UPVOTES SEGUROS. to usando o gh pages + firebase, tudo de gracinha,
// show de bola. eu perfeitamente entendo que você teria a capacidade de
// """""hackear""""" meu banco de dados e inutilizar o sistema de upvotes.
// só que se isso acontecer, eu simplesmente vou apagar esse sisteminha, e meus
// posts vão continuar como estão, só que sem upvote. então, né. não gaste o
// meu nem o seu tempo, e deixa isso aqui como tá :) thanks
function initFirebase() {
  firebase.initializeApp({
    apiKey: "AIzaSyCCkQQR_bwPyXOa5uo_uavYK8UQVkD0Ylk",
    authDomain: "avellar-website.firebaseapp.com",
    projectId: "avellar-website"
  });

  const db = firebase.firestore();

  const like_txt = document.getElementById("like-count");
  const meh_txt = document.getElementById("meh-count");
  const dislike_txt = document.getElementById("dislike-count");

  let id = "";

  const btns = {
    likes: document.getElementById("btn-like-post"),
    mehs: document.getElementById("btn-meh-post"),
    dislikes: document.getElementById("btn-dislike-post")
  };
  const counts = {
    likes: 0,
    mehs: 0,
    dislikes: 0,
    total: 0
  };

  function updateLabels() {
    like_txt.textContent = counts.likes;
    const lk = document.createElement("div");
    lk.textContent = `(${getPctg(counts.likes)}%)`;
    like_txt.appendChild(lk);

    meh_txt.textContent = counts.mehs;
    const mh = document.createElement("div");
    mh.textContent = `(${getPctg(counts.mehs)}%)`;
    meh_txt.appendChild(mh);

    dislike_txt.textContent = counts.dislikes;
    const dl = document.createElement("div");
    dl.textContent = `(${getPctg(counts.dislikes)}%)`;
    dislike_txt.appendChild(dl);
  }

  function getPctg(v) {
    const res = Math.round(v / counts.total * 100 * 100) / 100;
    return isNaN(res) ? 0 : res;
  }

  const path = location.pathname.replace(/\//g,"-").substr(1);
  const date = path.substr(0,10);

  db.collection("blog").where("date","==",date).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      id = doc.id;
      const obj = doc.data();
      counts.total = 0;

      counts.likes = obj.likes;
      counts.total += counts.likes;

      counts.mehs = obj.mehs;
      counts.total += counts.mehs;

      counts.dislikes = obj.dislikes;
      counts.total += counts.dislikes;

      updateLabels();

      // Mostra seção de rating caso firebase tenha carregado corretamente
      document.getElementById("post-rating").removeAttribute("hidden");
    });
  });

  // Adiciona click event handlers
  ["likes", "mehs", "dislikes"].forEach(e => {
    btns[e].onclick = () => {
      // Caso não tenhamos ID, woopsie daisy, temos um problema
      // Quem sabe ele cria sozinho caso não exista :) Torceremos
      if(!id) id = path;

      // Desabilita botões
      disableButtons();
      localStorage.setItem(path, e);

      // Incrementa o valor local do botão clicado
      counts[e]++;
      // Incrementa o total
      counts.total++;
      // Atualiza os textos
      updateLabels();
      // Marca o botão clicado, pra ser estilizado diferentemente
      btns[e].classList.add("selected");
      // Incrementa o valor do banco
      incrementValue(id, e);
    }
  });

  function disableButtons() {
    btns.likes.disabled = true;
    btns.mehs.disabled = true;
    btns.dislikes.disabled = true;
  }

  // Incrementar atomicamente, evita race condition etc
  // [Ref] firebase.google.com/docs/firestore/manage-data/add-data#increment_a_numeric_value
  function incrementValue(id, field) {
    db.collection("blog").doc(id).update({
      [field]: firebase.firestore.FieldValue.increment(1),
      last_update: firebase.firestore.Timestamp.fromDate(new Date())
    });
  }

  // Verifica se algum botão já foi clicado em outra sessão
  const prev = localStorage.getItem(path);
  if(prev) {
    // Se o valor salvo faz sentido,
    if(["likes","mehs","dislikes"].includes(prev)) {
      // Desabilita outros votos, marca botão clicado como selecionado
      disableButtons();
      btns[prev].classList.add("selected");
    } else {
      // qisu não entendi vamo tira
      localStorage.removeItem(path);
    }
  }
}

if(location.hostname != "localhost") initFirebase();