const form = document.querySelector("form");

function resultBMI(height, weight) {
  height = height / 100;
  let result = weight / (height * height);
  return result.toFixed(2);
}
function clearResult() {
  document.querySelector("#result").innerHTML = "";
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearResult();
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (weight.trim() === "" || height.trim() === "") {
    alert("لطفا مقداری را وارد کنید . ");
    return false;
  } else if (isNaN(weight) || isNaN(height)) {
    alert("لطفا مقدار عددی وارد کنید.");
    return false;
  } else if (weight < 0 || height < 0) {
    alert("لطفا عدد را صحیح وارد کنید");
    return false;
  }

  height = parseInt(height);
  weight = parseInt(weight);

  document.querySelector("#result").innerHTML = resultBMI(height, weight);
});

document.querySelector("#height").addEventListener("keydown", clearResult);
document.querySelector("#weight").addEventListener("keydown", clearResult);
