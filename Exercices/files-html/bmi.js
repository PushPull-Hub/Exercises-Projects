// let height = document.getElementById('first-input').value;
// let weight = document.getElementById('second-input').value;

function bodyMassIndex(height, weight) {
  let bmi;
  if (typeof height == 'number' && typeof weight == 'number') {
    return (bmi = weight / height ** 2);
  }
}

function showMessage(bmi) {
  let message = `Your Body Mass Index is <b>${bmi}</b> that's`;
  let status;
  if (bmi < 18) {
    status = ` <b id="underweight">Uderweight</b> `;
    document.getElementById(
      'arrow',
    ).innerHTML = `<span id="arrow-loc-underweight"><img src="arrow-down.png" alt="" /></span>`;
  } else if (bmi > 18 && bmi < 25) {
    status = ` <b id ="normal">Normal</b> `;
    document.getElementById(
      'arrow',
    ).innerHTML = `<span id="arrow-loc-normal"><img src="arrow-down.png" alt="" /></span>`;
  } else if (bmi > 25) {
    status = ` <b id="overweight">Overweight</b>`;
    document.getElementById(
      'arrow',
    ).innerHTML = `<span id="arrow-loc-overweight"><img src="arrow-down.png" alt="" /></span>`;
  }

  return (document.getElementById('output').innerHTML = `${message} ${status}`);
}

const mainFunction = () => {
  let height = document.getElementById('first-input').value;
  let weight = document.getElementById('second-input').value;
  height = parseInt(height);
  weight = parseInt(weight);
  let bmi = bodyMassIndex(height, weight);
  showMessage(bmi);

  document.getElementById(
    'bmi-status',
  ).innerHTML = `<img src="bmi-adult.png" alt="" />`;
};

function statusBmi() {}
