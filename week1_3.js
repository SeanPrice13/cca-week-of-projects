const calcAverage = (s1, s2, s3, s4, s5, s6) => {
    const dScores = [s1,s2,s3];
    const kScores = [s4,s5,s6];

    avgDolphins = dScores.reduce((sum, value) => {
        return parseInt(sum) + parseInt(value);
    }) / dScores.length;
    avgKoalas = kScores.reduce((sum, value) => {
        return parseInt(sum) + parseInt(value);
    }) / kScores.length;

    checkWinner(avgDolphins, avgKoalas);
}

const checkWinner = (avgD, avgK) => {
    console.log(avgK / avgD >= 2 ? `Koalas win (${avgK.toFixed(0)}:${avgD.toFixed(0)})` : 
    avgD / avgK >= 2 ? `Dolphins win (${avgD.toFixed(0)}:${avgK.toFixed(0)})` : 
    `No Winner (${avgD.toFixed(0)}:${avgK.toFixed(0)})`);
    
    document.getElementById('results').firstElementChild.textContent = avgK / avgD >= 2 ? `Koalas win (${avgK.toFixed(0)}:${avgD.toFixed(0)})` : 
    avgD / avgK >= 2 ? `Dolphins win (${avgD.toFixed(0)}:${avgK.toFixed(0)})` : 
    `No Winner (${avgD.toFixed(0)}:${avgK.toFixed(0)})`;
}

document.getElementById('calc-btn').addEventListener('click', () => {
    const score1 = document.getElementById('score1').value,
    score2 = document.getElementById('score2').value,
    score3 = document.getElementById('score3').value,
    score4 = document.getElementById('score4').value,
    score5 = document.getElementById('score5').value,
    score6 = document.getElementById('score6').value;

    calcAverage(score1,score2,score3,score4,score5,score6);
})

// TEST DATA
// calcAverage(44,23,71,65,54,49);
// calcAverage(85,54,41,23,34,27);