document.getElementById('total').style.display = "none";
document.getElementById('tips-form').addEventListener('submit', calculateTip);

function calculateTip(event) {
    event.preventDefault(); //evita que a página recarregue quando o formulário for submetido

    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('service').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill =='' | serviceQuality == 0) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if(numOfPeople == '' | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each'). style.display = "none";
    } else {
        document.getElementById('each'). style.display = "block";
    }

    let total = (bill * serviceQuality) / numOfPeople;
    total = total.toFixed(2).replace('.', ','); //O total fica com 2 casas decimais com separação por vírgula.
    document.getElementById('tip').innerHTML = total;
    document.getElementById('total').style.display = "block";
}