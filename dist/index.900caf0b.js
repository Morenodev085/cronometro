AOS.init();
const dataDoEvento = new Date("Feb 25, 2024 22:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const ContaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampDoAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampDoAtual;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / 86400000);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % 86400000 / 3600000);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % 3600000 / 60000);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % 60000 / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${segundosAteOEvento}s`;
}, 1000);

//# sourceMappingURL=index.900caf0b.js.map
