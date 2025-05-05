function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`;

    if (hora >= 0 && hora < 12){

        img.src = 'img/foto-manha.png';
        document.body.style.backgroundImage = "url('img/milagre-da-manha-para-vendedores.jpg')";

    } else if (hora >= 12 && hora < 18){
        img.src = 'img/ceu-dia.png';
        document.body.style.backgroundImage = "url('img/351c78a9918ecddfb91e15a587ab37c9.jpg')"
        document.getElementById("section").style.backgroundColor = "lightcyan";

    } else {
        img.src = 'img/foto-noite.png';
        document.body.style.backgroundImage = "url('img/photo-1488866022504-f2584929ca5f.jpeg')"
        document.getElementById("section").style.backgroundColor = "lightblue";
    }
        
}
