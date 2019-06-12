function consultaCep(){
    var cep = $("#inputCep")[0].value,
        url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            if(response.erro && response.erro === true){
                alert("Cep inválido");
            }else{
                $("#logradouro").html("Logradouro: " + response.logradouro);
                $("#bairro").html("Bairro: " + response.bairro);
                $("#localidade").html("Localidade: " +response.localidade);
                $("#uf").html("UF: " + response.uf);
            }
        },
        error: function(xhr, oError, message){
            alert("Desculpe ocorreu um erro desconhecido, confira seus dados e \
            tente novamente!");
        }
    });
}