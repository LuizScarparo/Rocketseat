let estudantes = [
    {
        name: 'Luiz',
        firstGrade: 10,
        secondGrade: 10,
    },
    {
        name: 'Alo',
        firstGrade: 0,
        secondGrade: 7,
    },
    {
        name: 'Rapaz',
        firstGrade: 7,
        secondGrade: 8,
    },
    {
        name: 'Zap',
        firstGrade: 4,
        secondGrade: 7,
    },
];

function calcularMedia(estudante) {
   return (estudante.firstGrade + estudante.secondGrade) / 2;
}

function verificarNota() {
    for (let i = 0; i < estudantes.length; i++) {
        let media = calcularMedia(estudantes[i]);
        if (media >= 7) {
            alert(`Parabéns ${estudantes[i].name}, sua média foi de ${media}`);
        } else {
            alert(`Que pena ${estudantes[i].name}, sua média foi de ${media}, tente novamente`);
        }
    }
}

verificarNota();