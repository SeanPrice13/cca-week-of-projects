// Attempting to use more objects in my code as a side challenge.
// The BMI formula used
// const BMI = m * h ** 2 || m * (h * h);

document.getElementById('calc-btn').addEventListener('click', calcBMI = () => {
    const person = [
        {'Mark Miller': 
            {mass: document.getElementById('mark-mass').value,
            height: document.getElementById('mark-height').value,
            mBMI: (document.getElementById('mark-mass').value * (document.getElementById('mark-height').value ** 2)).toFixed(1)}
        },
        {'John Smith': 
            {mass: document.getElementById('john-mass').value,
            height: document.getElementById("john-height").value,
            jBMI: (document.getElementById('john-mass').value * (document.getElementById("john-height").value ** 2)).toFixed(1)}
        },
    ];
    const [{'Mark Miller': {mBMI}}, {'John Smith': {jBMI}}] = person;
    document.getElementById("results").firstElementChild.textContent =
      parseFloat(mBMI) > parseFloat(jBMI)
        ? `Mark Miller's BMI (${mBMI}) is higher than John Smith's BMI (${jBMI})!`
        : `John Smith's BMI (${jBMI}) is higher than Mark Miller's BMI (${mBMI})!`;
});