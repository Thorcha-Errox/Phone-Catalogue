const scriptURL = 'https://script.google.com/macros/s/AKfycbzR0olA92pHF85eegDwo1nXEnrOdC_7pxBjgDVlI2t1dQgw_ID49zBR8ONIr3sNFMzzrg/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();

  const submitButton = form.querySelector('[type="submit"]');
  submitButton.disabled = true;

  const formData = {
    name: form.Name.value,
    email: form.Email.value,
    brand: form.Brand.value,
    model: form.Model.value
  };

  fetch(scriptURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    mode: 'no-cors', // Add this line
  })
  .then(() => {
    alert("Thank You for Your Suggestion! Our team will definatly try to add it as soon as possible.  ");
    form.reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Oops! Something went wrong.");
  })
  .finally(() => {
    submitButton.disabled = false;
  });
});
