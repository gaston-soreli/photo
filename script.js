// Identifiants "hardcodés" (à toi de les changer)
const VALID_USERNAME = "moi";
const VALID_PASSWORD = "secret123";

const loginContainer = document.getElementById("login-container");
const app = document.getElementById("app");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const logoutBtn = document.getElementById("logout-btn");

// Si déjà connecté (stocké dans localStorage)
if (localStorage.getItem("loggedIn") === "true") {
  showApp();
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    loginError.textContent = "";
    localStorage.setItem("loggedIn", "true");
    showApp();
  } else {
    loginError.textContent = "Identifiant ou mot de passe incorrect.";
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  app.classList.add("hidden");
  loginContainer.style.display = "block";
});

function showApp() {
  loginContainer.style.display = "none";
  app.classList.remove("hidden");
}

