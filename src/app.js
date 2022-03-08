

const getValueInput = () => {
  num = document.querySelector("#number1").value;

  if (num === "") {
    alert("introduce algun valor");
  }

  console.log(num);
  for (let i = 1; i < num; i++) {
    let result = "";
    if (i % 15 == 0) {
      result = "FizBuzz";
    } else if (i % 3 == 0) {
      result = "Fizz";
    } else if (i % 5 == 0) {
      result = "Buzz";
    } else {
      console.log(i);
    }
    let res = document.querySelector("#valueInput");

    res.innerHTML += `${result || i}<br /> `;
  }

  let btnLimpiar = document.querySelector(".btnLimpiar");


  btnLimpiar.addEventListener("click", () => {

    location.reload();
  });
};
