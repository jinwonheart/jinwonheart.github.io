const scriptURL = 'https://script.google.com/macros/s/AKfycby9hYRwpNs0nHKEJf34nEnR8MkqXt7o2rMflFMLyLHloUPhrTo5/exec'
const form = document.forms['google-form']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
  var userLang = navigator.language;
  if (userLang == "ko-KR")
    alert("참석여부를 알려주셔서 감사합니다!");
  else if (userLang == "en-US")
    alert("Thanks for confirming your attendance!");
  else
    alert("Thanks for confirming your attendance!");
})
