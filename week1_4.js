// Attempting to use more objects in my code as a side challenge.
// The BMI formula used
// const BMI = m * h ** 2 || m * (h * h);

const person = {'Mark Miller': {
    mass: 0,
    height: 0,
    bmi: 0,
},
    'John Smith': {
    mass: 0,
    height: 0,
    bmi: 0,
    },
};

const calcBMI = (mM, mH, jM, jH) => {
    person['Mark Miller'].mass = mM;
    person['Mark Miller'].height = mH;
    person['John Smith'].mass = jM;
    person['John Smith'].height = jH;
    person['Mark Miller'].bmi = (person['Mark Miller'].mass * (person['Mark Miller'].height ** 2)).toFixed(2);
    person['John Smith'].bmi = (person['John Smith'].mass * (person['John Smith'].height * person['John Smith'].height)).toFixed(2);
    
    const markHigherBMI = person['Mark Miller'].bmi > person['John Smith'].bmi;
    
    console.log(markHigherBMI ? `Mark Miller's BMI (${person['Mark Miller'].bmi}) is higher than John Smith's BMI (${person['John Smith'].bmi})!` : 
    `John Smith's BMI (${person['John Smith'].bmi}) is higher than Mark Miller's BMI (${person['Mark Miller'].bmi})!`);
    document.getElementById('results').firstElementChild.textContent = markHigherBMI ? `Mark Miller's BMI (${person['Mark Miller'].bmi}) is higher than John Smith's BMI (${person['John Smith'].bmi})!` : 
    `John Smith's BMI (${person['John Smith'].bmi}) is higher than Mark Miller's BMI (${person['Mark Miller'].bmi})!`;
}

document.getElementById('calc-btn').addEventListener('click', () => {
    const markM = document.getElementById('mark-mass').value,
    markH = document.getElementById('mark-height').value,
    johnM = document.getElementById('john-mass').value,
    johnH = document.getElementById('john-height').value;

    calcBMI(markM,markH,johnM,johnH);
});

// TEST DATA
// calcBMI(78,1.69,92,1.95);