let contas = [];

function criarconta() {
    var emailrecebido = document.getElementById("inputEmail").value;
    var senharecebida = document.getElementById("inputSenha").value;

    let contas = JSON.parse(localStorage.getItem('contas')) || [];
    contas.push({email: emailrecebido, senha: senharecebida});
    localStorage.setItem('contas', JSON.stringify(contas));
    
    console.log("Conta criada:", { emailrecebido, senharecebida });
    alert("Sua conta foi criada!");
}