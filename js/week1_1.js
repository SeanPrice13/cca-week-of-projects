// Attempting to use more objects in my code as a side challenge.
// The BMI formula used
// const BMI = m * h ** 2 || m * (h * h);

document.getElementById('calc-btn').addEventListener('click', calcBMI = () => {
  const person = [
    {mark: {
      mM: document.getElementById("mark-mass").value,
      mH: document.getElementById("mark-height").value,
      }
    }, 
    {john: {
      jM: document.getElementById("john-mass").value,
      jH: document.getElementById("john-height").value,
      }
    },
  ];
  const [{mark: {mM, mH}}, {john: {jM, jH}}] = person;
  const mBMI = mM * mH ** 2;
  const jBMI = jM * jH ** 2;
  document.getElementById("results").firstElementChild.textContent = mBMI > jBMI ? `Mark has a higher BMI. ${mBMI.toFixed(1)}` : `John has a higher BMI. ${jBMI.toFixed(1)}`;
});