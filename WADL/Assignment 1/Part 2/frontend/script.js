const output = document.getElementById("output");

function fetchData() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(xhr.responseText);

      let string = `<p>Name: ${data.firstName} ${data.lastName}</p><p>Email: ${data.email}</p>`;

      output.innerHTML = string;
    }
  };
  xhr.open("GET", "http://localhost:3000/", true);
  xhr.send();
}
document.body.onload = () => {
  fetchData();

  document.forms.addNumberForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;

    $("#msg").html("");
    $.ajax({
      type: "post",
      url: "http://localhost:3000/",
      data: JSON.stringify({
        firstName,
        lastName,
        email,
      }),
      contentType: "application/json; charset=utf-8",
      traditional: true,
      success: function (data) {
        fetchData();
        $("#msg").html("User Details Updated");
      },
    });
  });
};
