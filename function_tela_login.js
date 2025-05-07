function validator_info(event){
    event.preventDefault();

    const inputValuename = document.getElementById("nome").value;
    const inputValuepassword = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");
    console.log("name:", nome);
    console.log("password:",senha);


    if(inputValuename&&inputValuepassword){
        mensagem.style.color = 'green';
        mensagem.textContent="Está tudo correto!";
    }
    else{
        mensagem.style.color = 'red';
        mensagem.textContent=`Verifique os campos. Nome: "${nome}", Senha: "${senha}"`;
    }
}
document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("loginForm");
    FormData.addEventListener("submit",validator_info);
})