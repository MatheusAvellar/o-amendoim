const like_btn = document.getElementById("btn-like-post");
const like_txt = document.getElementById("like-count");
const meh_btn = document.getElementById("btn-meh-post");
const meh_txt = document.getElementById("meh-count");
const dislike_btn = document.getElementById("btn-dislike-post");
const dislike_txt = document.getElementById("dislike-count");

let id = "";
let like_count = 0;
let meh_count = 0;
let dislike_count = 0;
let total_count = 0;

firebase.initializeApp({
  apiKey: "AIzaSyCCkQQR_bwPyXOa5uo_uavYK8UQVkD0Ylk",
  authDomain: "avellar-website.firebaseapp.com",
  projectId: "avellar-website"
});

const db = firebase.firestore();

function updateLabels() {
  like_txt.textContent = like_count;
  const lk = document.createElement("div");
  lk.textContent = `(${getPctg(like_count)}%)`;
  like_txt.appendChild(lk);

  meh_txt.textContent = meh_count;
  const mh = document.createElement("div");
  mh.textContent = `(${getPctg(meh_count)}%)`;
  meh_txt.appendChild(mh);

  dislike_txt.textContent = dislike_count;
  const dl = document.createElement("div");
  dl.textContent = `(${getPctg(dislike_count)}%)`;
  dislike_txt.appendChild(dl);
}

function getPctg(v) {
  const res = Math.round(v / total_count * 100 * 100) / 100;
  return isNaN(res) ? 0 : res;
}

function getDate() {
  return firebase.firestore.Timestamp.fromDate(new Date());
}
const path = location.pathname.replace(/\//g,"-").substr(1);
const date = path.substr(0,10);

db.collection("blog").where("date","==",date).get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    id = doc.id;
    const obj = doc.data();

    like_count = obj.likes;
    total_count += like_count;

    meh_count = obj.mehs;
    total_count += meh_count;

    dislike_count = obj.dislikes;
    total_count += dislike_count;

    updateLabels();
  });
});

function disableButtons() {
  like_btn.disabled = true;
  meh_btn.disabled = true;
  dislike_btn.disabled = true;
}

like_btn.onclick = function() {
  if(!id) return;
  disableButtons();
  like_count++;
  total_count++;
  like_btn.classList.add("selected");
  updateLabels();
  db.collection("blog").doc(id).set({
    "likes": like_count,
    "last_update": getDate()
  },{ merge: true }).then(success).catch(error);
}
meh_btn.onclick = function() {
  if(!id) return;
  disableButtons();
  meh_count++;
  total_count++;
  meh_btn.classList.add("selected");
  updateLabels();
  db.collection("blog").doc(id).set({
    "mehs": meh_count,
    "last_update": getDate()
  },{ merge: true }).then(success).catch(error);
}
dislike_btn.onclick = function() {
  if(!id) return;
  disableButtons();
  dislike_count++;
  total_count++;
  dislike_btn.classList.add("selected");
  updateLabels();
  db.collection("blog").doc(id).set({
    "dislikes": dislike_count,
    "last_update": getDate()
  },{ merge: true }).then(success).catch(error);
}

function success() {
  console.log("Document successfully written");
}

function error(err) {
  console.error("Error adding document: ", err);
}