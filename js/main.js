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
    if (getAgeValue() !== "" && getHeightValue() !== "" && getWeightValue() !== "") {
        document.querySelector('#button-calculator').disabled = false;
    } else {
        document.querySelector('#button-calculator').disabled = true;
    }
}

let getGenderValue = () => document.querySelector( "input[name='gender']:checked");

let activeValue = () => document.querySelector( "input[name='activity']:checked");

let calculate = () => {
    if (getGenderValue.value === 'male') {
        return (10 * getWeightValue()) + (6.25 * getHeightValue()) - (5 * getAgeValue()) + 5;
    }
    if (getGenderValue.value === 'female') {
        return (10 * getWeightValue()) + (6.25 * getHeightValue()) - (5 * getAgeValue()) - 161;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#button-calculator').addEventListener('click', calculate);
    document.querySelector('#age').addEventListener('change', () => {
        checkEnableCalculateButton()
    });
    document.querySelector('#height').addEventListener('change', () => {
        checkEnableCalculateButton()
    });
    document.querySelector('#weight').addEventListener('change', () => {
        checkEnableCalculateButton()
    });
})
