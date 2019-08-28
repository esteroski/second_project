function Editar(tbUsers,indice_selecionado){
    //location.href = 'index.html';
    location.replace('index.html');
    tbUsers[indice_selecionado] = JSON.stringify({
        name   : $("#name").val(),
        });
    localStorage.setItem("tbUsers", JSON.stringify(tbUsers));
    alert("Edited")
    operacao = "A"; 
    return true;
}