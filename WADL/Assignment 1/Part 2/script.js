const fetchData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
  xhr.onload = () => {
    const res = JSON.parse(xhr.responseText);
    localStorage.setItem("users", JSON.stringify(res));
    displayData();
  };
};

const displayData = () => {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  const storedUser = JSON.parse(localStorage.getItem("users"));
  storedUser.map(
    (user) =>
      (tbody.innerHTML += `
        <tr>
            <td>${user.username}</td>
            <td>${user.email}</td>                       
        </tr>`)
  );
};

fetchData();

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
  const usernameElement = document.getElementById("username");
  const emailElement = document.getElementById("email");

  const user = {
    username: usernameElement.value,
    email: emailElement.value,
  };

  usernameElement.value = "";
  emailElement.value = "";

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/users/");
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify(user));

  xhr.onload = () => {
    if (xhr.status == 201) {
      const storedUser = JSON.parse(localStorage.getItem("users"));
      storedUser.unshift(user);
      localStorage.setItem("users", JSON.stringify(storedUser));
      displayData();
    }
  };
});
