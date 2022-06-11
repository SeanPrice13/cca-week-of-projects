document.getElementById('calc-btn').addEventListener('click', calcAverage = () => {
    const teams = [
        {dolphins : 
            {scores: [document.getElementById('score1').value, document.getElementById('score2').value, document.getElementById('score3').value],
            average: [document.getElementById('score1').value, document.getElementById('score2').value, document.getElementById('score3').value].reduce((sum, val) => sum + parseFloat(val), 0) / 3}
        }, 
        {koalas: 
            {scores: [document.getElementById('score4').value, document.getElementById('score5').value, document.getElementById('score6').value],
            average: [document.getElementById('score4').value, document.getElementById('score5').value, document.getElementById('score6').value].reduce((sum, val) => sum + parseFloat(val), 0) / 3}
        },
        ];
    const [{dolphins: {average: avgD}},{koalas: {average: avgK}}] = teams;
    document.getElementById("results").firstElementChild.textContent =
      avgK / avgD >= 2
        ? `Koalas win (${avgK.toFixed(0)}:${avgD.toFixed(0)})`
        : avgD / avgK >= 2
        ? `Dolphins win (${avgD.toFixed(0)}:${avgK.toFixed(0)})`
        : `No Winner (${avgD.toFixed(0)}:${avgK.toFixed(0)})`;
})