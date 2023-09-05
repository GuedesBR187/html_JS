
const SubmitForm = document.getElementById('form-numbers');


let Validacao = false;

function Validavalor(primeiro,segundo){
    return primeiro > segundo;
}

SubmitForm.addEventListener('submit', function(e){
    const FirstNum = document.getElementById('first-number');
    const SecondNum = document.getElementById('second-number');
    const resposta = document.querySelector('.answer');

    e.preventDefault();

    Validacao = Validavalor(FirstNum.value,SecondNum.value);

    if (Validacao){
        const mensagemsucesso = `O valor <b>${FirstNum.value}</b> é maior que o <b>${SecondNum.value}</b>`;
        resposta.innerHTML = mensagemsucesso;
        resposta.style.display = 'block';
        resposta.classList.add('sucess')
        resposta.classList.remove('fail')
    } else{
        const mensagemerro = `O valor <b>${FirstNum.value}</b> não é maior que o <b>${SecondNum.value}</b>`;
        resposta.innerHTML = mensagemerro;
        resposta.style.display = 'block';
        resposta.classList.add('fail')
        resposta.classList.remove('sucess')
    }
})
