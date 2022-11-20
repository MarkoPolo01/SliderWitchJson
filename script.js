var select = document.getElementById("s1"),
    val1,
    select2 = document.getElementById("s2"),
    val2;
let dayValue =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let i,j,opt1,opt2;
let monthValue = ['sentyabr','oktyabr','noyabr','dekabr','yanvar','fevral','mart','aprel','may','iyun','iyul','avgust'];
let monthText = ['Сентябрь','Октябрь','Ноябрь','Декабрь','Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август'];
for(i=0;i<dayValue.length;++i){
    opt1 =  document.createElement('option');
    opt1.value=dayValue[i].toString();
    opt1.textContent =dayValue[i].toString();
    select.add(opt1);
}
for(j=0;j<monthValue.length;++j){
    opt2 =  document.createElement('option');
    opt2.value=monthValue[j];
    opt2.textContent =monthText[j];
    select2.add(opt2);
}

const buton = document.querySelector('#btn');

buton.addEventListener('click', function(){
    val1 = select.value;
    val2 = select2.value;
     populateHeroes();
});


  async function populate() {
      // создание запроса к серверу
      const requestURL = `http://localhost:8080/holidays?month=${val2}&day=${val1}`;
      const request = new Request(requestURL);
      const response = await fetch(request).then(t => t.text())
      const holidays = JSON.parse(response);
      console.log(holidays)
      populateHeroes(holidays);
  }

  function populateHeroes(obj) {
      window.location.reload();
      const section = document.querySelector('p');
      section.textContent = `Событие: ${obj[0]}`;
      document.getElementById('song').innerHTML = '<audio id="audio-player" controls="controls" src="answerSound.mp3" type="audio/mpeg">';
  }

  const button = document.querySelector('#play');
  let audio = new Audio();
  button.addEventListener('click', function(e){
      audio.src = e.target.getAttribute('src');
      audio.play();
  });