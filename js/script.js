var personName = prompt("Ismingizni va Familiyangizni kiriting").trim();
var idNumber = prompt(` ${personName}! Id raqamingizni kirinting`).trim();
var score = prompt("DTM Balingizni kiriting").trim();
var maxPoint = 180;



if (isNaN(score)) {
  var score = prompt("Raqam kiriting!")
} else {
  if (score >= maxPoint) {
    document.querySelector('.text').textContent = "Tabriklaymiz Grant asosida o'qishga qabul qilindingiz!";
    document.querySelector('.name').textContent = personName

  } else if (score >= 90) {
    console.log(score);
    document.querySelector('.text').textContent = "Tabriklaymiz Kontrakt asosida o'qishga qabul qilindingiz!";
    document.querySelector('.text').style.color = "gold"
    document.querySelector('.name').textContent = personName
    
  } else  {
    document.querySelector('.text').textContent = "Uzur imtihondan o'ta olmadingiz!";
    document.querySelector('.text').style.color = "red"
    document.querySelector('.name').textContent = personName
  }
}