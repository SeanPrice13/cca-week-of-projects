document.getElementById('calc-btn').addEventListener('click', calcTip = () => {
    const bills = document.getElementById('bills').value.replace(/[^0-9,.]/g, '').split(',').map(Number),
        tips = bills.map(bill => (bill > 50 && bill < 300) ? ` $${(bill * 0.15).toFixed(2)}` : ` $${(bill * 0.20).toFixed(2)}`),
        totals = bills.map((bill, i) => ` $${(bill + Number(tips[i].replace(/[^0-9,.]/g, ''))).toFixed(2)}`);
    document.getElementById('bills').value !== '' ? (document.getElementById('tips').textContent = tips, document.getElementById('totals').textContent = totals) : '';
})