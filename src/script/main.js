AOS.init();

const dataDoEvento = new Date("Feb 25, 2024 22:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const ContaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampDoAtual = agora.getTime();
    
    const distanciaAteOEvento = timeStampDoEvento - timeStampDoAtual;



    const diasAteOEvento = Math.floor(distanciaAteOEvento /(1000 * 60 * 60 * 24));

    const horasAteOEvento = Math.floor(distanciaAteOEvento % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % (1000 * 60 * 60) / (1000 * 60));

    const segundosAteOEvento = Math.floor(distanciaAteOEvento % (1000 * 60) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${segundosAteOEvento}s`;
}, 1000);
