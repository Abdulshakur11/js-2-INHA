var elForme = document.querySelector(".form-js");
var elResult = document.querySelector(".result");
var elNameJs = document.querySelector(".name-js");
var elInputCheckBox = document.querySelector(".check-input");


var BUDGET = 80;
var CONTRACT = 65;
var SUPER_CONTRACT = 50;

elForme.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var elEnterInput = parseFloat(document.querySelector(".enter-score").value, 10);
  var elName = document.querySelector(".name-input").value;
  var elSureName = document.querySelector(".surename-input").value;
  var isChecked = elInputCheckBox.checked

  if (elInputCheckBox.checked) {
    elResult.textContent = "Uzur biz korupsiyaga qarshimiz :)"
    document.querySelector(".result").style.color = "red"
  } else if (elEnterInput >= BUDGET) {
    elResult.textContent = "Tabriklaymiz o'qishga grant asasida kirdingiz!"
    elNameJs.textContent = `${elName} ${elSureName}`
    document.querySelector(".result").style.color = "gold"
  } else if (elEnterInput >= CONTRACT) {
    elResult.textContent = "Tabrikalymiz o'qishga kontrakt asasida kirdingiz!"
    elNameJs.textContent = `${elName} ${elSureName}`
    document.querySelector(".result").style.color = "yellow"
  } else if (elEnterInput >= SUPER_CONTRACT) {
    elResult.textContent = "Tabrikalymiz o'qishga Super kontrakt asasida kirdingiz!"
    elNameJs.textContent = `${elName} ${elSureName}`
    document.querySelector(".result").style.color = "lightgreen"
  } else {
    elResult.textContent = "Uzur o'qishga qabul qilinmadingiz!"
    elNameJs.textContent = `${elName} ${elSureName}`
    document.querySelector(".result").style.color = "red"
  }
})

var pageLoader = document.querySelector('.loader')
window.addEventListener('load', function (e) {
  pageLoader.remove();
});


// var personName = prompt("Ismingizni va Familiyangizni kiriting").trim();
// var idNumber = prompt(` ${personName}! Id raqamingizni kirinting`).trim();
// var score = prompt("DTM Balingizni kiriting").trim();
// var maxPoint = 100;



// if (isNaN(score)) {
//   // var score = prompt("Raqam kiriting!")
// } else {
//   if (score >= maxPoint) {
//     document.querySelector('.text').textContent = "Tabriklaymiz Grant asosida o'qishga qabul qilindingiz!";
//     document.querySelector('.name').textContent = personName

//   } else if (score >= 90) {
//     console.log(score);
//     document.querySelector('.text').textContent = "Tabriklaymiz Kontrakt asosida o'qishga qabul qilindingiz!";
//     document.querySelector('.text').style.color = "gold"
//     document.querySelector('.name').textContent = personName

//   } else  {
//     document.querySelector('.text').textContent = "Uzur imtihondan o'ta olmadingiz!";
//     document.querySelector('.text').style.color = "red"
//     document.querySelector('.name').textContent = personName
//   }
// }