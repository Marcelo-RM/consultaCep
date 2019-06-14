function consultaCep() {
    var value = $("#inputCep")[0].value,
        cep = value.replace(/\D+/g, ""),
        url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            if (response.erro && response.erro === true) {
                alert("Cep inválido");
            } else {
                var arr = ["logradouro", "bairro", "localidade", "uf", "complemento", "gia", "ibge", "unidade"];
                for (var i = 0; i < arr.length; i++) {
                    var value = arr[i];
                    if (response[value]) {
                        $("#" + value).html(value.toLocaleUpperCase() + ": " + response[value]);
                    }
                }
            }
        },
        error: function (xhr, oError, message) {
            alert("Desculpe ocorreu um erro desconhecido, confira seus dados e \
            tente novamente!");
        }
    });
}

function formatar(mascara, element) {
    var i = element.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i)

    if (texto.substring(0, 1) != saida) {
        element.value += texto.substring(0, 1);
    }

}