document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", true);
      document.getElementById("message").textContent = "Login successful!";
      document.getElementById("message").style.display = "block";
      setTimeout(function () {
        window.location.href = "dashboard.html";
      }, 2000);
    } else {
      document.getElementById("message").textContent = "Invalid username or password!";
      document.getElementById("message").style.display = "block";
    }
  });
  
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  if (isLoggedIn) {
    window.location.href = "F:\myproject\RECYCLO\templates\mainpage.html";
  }

  