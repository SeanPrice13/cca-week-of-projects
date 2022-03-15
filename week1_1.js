// Attempting to use more objects in my code as a side challenge.
// The BMI formula used
// const BMI = m * h ** 2 || m * (h * h);

const person = {
    mark : {
        m : 0,
        h : 0,
    },
    john : {
        m : 0,
        h : 0,
    },
};

const calcBMI = (mM, mH, jM, jH) => {
    person.mark.m = mM;
    person.mark.h = mH;
    person.john.m = jM;
    person.john.h = jH;

    const markBMI = person.mark.m * (person.mark.h ** 2);
    const johnBMI = person.john.m * (person.john.h * person.john.h);
    const markHigherBMI = markBMI > johnBMI;

    console.log(markHigherBMI ? 'Mark has a higher BMI' : 'Mark does not have a higher BMI');
    document.getElementById('results').firstElementChild.textContent = markHigherBMI ? 'Mark has a higher BMI' : 'Mark does not have a higher BMI';
};

document.getElementById('calc-btn').addEventListener('click', () => {
    const markM = document.getElementById('mark-mass').value,
    markH = document.getElementById('mark-height').value,
    johnM = document.getElementById('john-mass').value,
    johnH = document.getElementById('john-height').value;

    calcBMI(markM,markH,johnM,johnH);
});

// TEST DATA
// calcBMI(78,1.69,92,1.95);
// calcBMI(95,1.88,85,1.76);