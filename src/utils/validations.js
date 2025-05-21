function validateInputField(value) {
  const valueNumber = parseFloat(value);
  return isNaN(valueNumber) || valueNumber <= 0;
}

export function validate(data) {
  const newMessageError = {};

  if (validateInputField(data.amount)) {
    newMessageError.errorAmount = true;
  }
  if (validateInputField(data.years)) {
    newMessageError.errorYears = true;
  }
  if (validateInputField(data.rate)) {
    newMessageError.errorRate = true;
  }
  if (data.categorie === "" || typeof data.categorie === 'number' ) {
    newMessageError.errorCategorie = true;
  }
  
  return newMessageError;
}
