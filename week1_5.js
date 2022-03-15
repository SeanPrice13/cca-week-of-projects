const calcTip = (bills) => {
    const tips = [];
    const total = [];
    bills.forEach(bill => {
        parseInt(bill) > 50 && parseInt(bill) < 300 ? tips.push((parseFloat(bill) * 0.15)) : tips.push((parseFloat(bill) * 0.20));
    });
    for (i = 0; i < bills.length; i++) {
        total.push((parseInt(bills[i]) + (tips[i])).toFixed(2));
    }
    console.log(`Bills: ${bills}`);
    console.log(`Tips: ${tips}`);
    console.log(`Totals: ${total}`);
    document.getElementById('tips').textContent = tips;
    document.getElementById('totals').textContent = total;
}

document.getElementById('calc-btn').addEventListener('click', () => {
    document.getElementById('bills').value !== '' ? calcTip(document.getElementById('bills').value.split(',')) : '';
})

// TEST DATA
// calcTip([100,125,555,44]);