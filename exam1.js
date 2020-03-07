function BodyMassIndex(height, weight) {
  let bmi = 0;
  if (typeof height == 'number' && typeof weight == 'number') {
    bmi = (height / weight) ** 2;
    return bmi;
  }
}

function showMessage(bmi) {
  if (bmi < 18.4) {
    message = `ok  ${bmi} is underweight `;
  } else if (bmi > 18.5 && BMI < 24.9) {
    message = `ok ${bmi} is Normal`;
  } else if (bmi > 25) {
    message = `ok  ${bmi} is overweight`;
  }
  document.getElementById('the-bmi').innerHTML = `${message} `;
}

const main = () => {
  let height = document.getElementById('input1').value;
  let weight = document.getElementById('input2').value;
  height = Number(height);
  weight = Number(weight);

  let bmi = BodyMassIndex(height, weight);
  showMessage(bmi);
};
