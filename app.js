const authenPopBtn = document.querySelector(".authenPopBtn");
const authenPop = document.querySelector(".authenPop");
const startBtn = document.querySelector(".startBtn");
authenPopBtn.onclick = () => {
  authenPop.style.display = "block";
};
startBtn.onclick = () => {
  authenPop.style.display = "block";
};

const closePop = () => {
  authenPop.style.display = "none";
};
//for better UX Start button on display
const manualSignUp = () => {
  let email = document.getElementById("userName").value;
  let password = document.getElementById("password").value;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("userName").value = "";
      document.getElementById("password").value = "";
    })
    .catch((err) => alert(err));
  // authenPop.style.display = "none";
  close();
};

const manualSignIn = () => {
  let email = document.getElementById("userName").value;
  let password = document.getElementById("password").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("userName").value = "";
      document.getElementById("password").value = "";
    })
    .catch((err) => alert(err));
};

const googleLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch((res) => alert(res));
};
const facebookLogin = () => {
  let facebookProvider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(facebookProvider).catch((res) => alert(res));
};
auth.onAuthStateChanged((user) => {
  if (user) {
    firestore.collection("users").doc(user.uid).set({
      email: user.email,
    });
    {
      location.replace("gameRound/game.html");
    }
  }
});
