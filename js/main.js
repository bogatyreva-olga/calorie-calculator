let activityFactor = {
    'min': 1.2,
    'low': 1.375,
    'medium': 1.55,
    'high': 1.725,
    'max': 1.9,
}

let getAgeValue = () => {
    return parseInt(document.querySelector('#age').value, 10);
}

let getHeightValue = () => {
    return parseInt(document.querySelector('#height').value, 10);
}

let getWeightValue = () => {
    return parseInt(document.querySelector('#weight').value, 10);
}

let checkEnableCalculateButton = () => {
    document.querySelector('#button-calculator').disabled = !(getAgeValue() && getHeightValue() && getWeightValue());
}

let checkEnableResetButton = () => {
    if (getAgeValue() !== '' || getHeightValue() !== '' || getWeightValue() !== '') {
        document.querySelector('.form__reset-button').disabled = false;
    }
    if (!(getAgeValue() || getHeightValue() || getWeightValue())) {
        document.querySelector('.form__reset-button').disabled = true;
    }
}

let getGenderValue = () => document.querySelector("input[name='gender']:checked").value;

let getActivityValue = () => {
    let activityValue = document.querySelector("input[name='activity']:checked").value;
    return activityFactor[activityValue];
};

let calculate = (event) => {
    event.preventDefault();
    let result = 0;
    if (getGenderValue() === 'male') {
        result = ((10 * getWeightValue()) + (6.25 * getHeightValue()) - (5 * getAgeValue()) + 5) * getActivityValue();
    }
    if (getGenderValue() === 'female') {
        result = ((10 * getWeightValue()) + (6.25 * getHeightValue()) - (5 * getAgeValue()) - 161) * getActivityValue();
    }

    let resultSection = document.querySelector('.counter__result');
    resultSection.classList.remove('counter__result--hidden');
    resultSection.querySelector('#calories-norm').innerHTML = result.toFixed();
    let minResultCalories = result - (result * 0.15);
    let maxResultCalories = result + (result * 0.15);
    resultSection.querySelector('#calories-minimal').innerHTML = minResultCalories.toFixed();
    resultSection.querySelector('#calories-maximal').innerHTML = maxResultCalories.toFixed();
};

let checkEnabledButtons = () => {
    checkEnableCalculateButton();
    checkEnableResetButton();
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#button-calculator').addEventListener('click', calculate);
    document.querySelector('#age').addEventListener('change', checkEnabledButtons);
    document.querySelector('#height').addEventListener('change', checkEnabledButtons);
    document.querySelector('#weight').addEventListener('change', checkEnabledButtons);
    document.querySelector('.form__reset-button').addEventListener('click', () => {
        document.querySelector('.counter__result').classList.add('counter__result--hidden');
        setTimeout(checkEnabledButtons, 200);
    });
});