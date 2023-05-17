const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click", () => { //Função executada em resposta a um evento específico (no caso, a string "click")
    let qrValue = qrInput.value; // A propriedade value é usada para ler o valor inserido no campo.
    if (!qrValue) return; //Se o campo input estiver vazio, ele retornará daqui.
    generateBtn.innerText = "Generating QR Code..."

    //Obtendo um código QR do valor inserido pelo usuário usando a API, e atribuindo a imagem retornada pela API à variável qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;


    //quando a imagem for carregada, adiciona a classe "active" no wrapper.
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active"); //O método add() adiciona especificamente a classe "active" ao elemento wrapper.
        generateBtn.innerText = "Generate QR Code"

    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.add("active");
    }
});
