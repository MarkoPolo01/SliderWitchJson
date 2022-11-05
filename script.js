  var select, value, select2, value2;

  function getValue() {
      select = document.getElementById("s1");
      value = select.value;
      select2 = document.getElementById("s2");
      value2 = select2.value;
     // populateHeroes();

  }

  async function populate() {
      // создание запроса к серверу
      const requestURL = `http://localhost:8080/holidays?month=${value2}&day=${value}`;
      const request = new Request(requestURL);

      const response = await fetch(request)
          .then(t => t.text())
      const holidays = JSON.parse(response);
      console.log(holidays)
      populateHeroes(holidays);
  }

  function populateHeroes(obj) {
      window.location.reload();
      const section = document.querySelector('p');
      //for (var i = 0; i < obj.length; i++) {

      section.textContent = `Событие: ${obj[0]}`;
      //}
      document.getElementById('song').innerHTML = '<audio id="audio-player" controls="controls" src="answerSound.mp3" type="audio/mpeg">';
  }

  const button = document.querySelector('#play');
  let audio = new Audio();
  button.addEventListener('click', function(e){
      audio.src = e.target.getAttribute('src');
      audio.play();
  });