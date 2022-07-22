const calcMedia = (nota1, nota2, nota3) => {
    const result = (nota1 + nota2 + nota3) / 3;
    if (result >= 7) {
        return 'Aprovado';
    }

    return 'Reprovado';
}

module.exports = { calcMedia };
