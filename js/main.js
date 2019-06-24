function consultaCep() {
    var value = $("#inputCep")[0].value,
        cep = value.replace(/\D+/g, ""),
        url = "https://viacep.com.br/ws/" + cep + "/json/",
        arr = ["logradouro", "bairro", "localidade", "uf", "complemento", "gia", "ibge", "unidade"];
        
    $.ajax({
        url: url,
        type: "GET",
        success: response => {
            if (response.erro && response.erro === true) {
            	for (var i = 0; i < arr.length; i++) {
                    var place = arr[i];
                    clearValue(place);
                }
                alert("Cep inválido");
            } else {
                for (i = 0; i < arr.length; i++) {
                    place = arr[i];
                    clearValue(place);
                    if (response[place]) {
                    	setValue(place, response[place]);
                    }
                }
            }
        },
        error: (xhr, oError, message) => {
        	for (i = 0; i < arr.length; i++) {
                    place = arr[i];
                    clearValue(place);
            }
            alert("Desculpe ocorreu um erro desconhecido, confira seus dados e tente novamente!");
        }
    });
}

function formatar(mascara, element) {
    var i = element.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i);

    if (texto.substring(0, 1) !== saida) {
        element.value += texto.substring(0, 1);
    }

}

function clearValue(place){
	$("#" + place).html("");
}

function setValue(place, value){
	$("#" + place).html(place.toLocaleUpperCase() + ": " + value);
}