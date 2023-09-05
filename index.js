
let btnSubmit = document.getElementById('button')
let display = document.getElementById('result')
let explanation = document.getElementById('explanation')
    
btnSubmit.addEventListener('click', () => {
    let value = document.getElementById('number').value
    console.log(value)

    getKural(value)
})





async function getKural(value) {
    try {
        let response = await fetch(`https://api-thirukkural.vercel.app/api?num=${value}`)
        let data = await response.json();

        console.log(data.sect_tam)
        console.log(data.line1)
        console.log(data.line2)
        console.log(data.tam_exp)
        console.log(data.eng_exp)

        let card = `<div class="card" >
            <h5 class="card-header">${data.chap_tam}</h5>
            <div class="card-body">
                <p class="card-text">${data.line1}</p>
                <p class="card-text">${data.line2}</p>
            </div>
        </div>` 

        let meaning = `<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div id="exp" class="card-body">
        <h5 class="card-title">Tamil Meaning</h5>
        <p class="card-text">${data.tam_exp}</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div id="exp" class="card-body">
        <h5 class="card-title">English Meaning</h5>
        <p class="card-text">${data.eng_exp}</p>
      </div>
    </div>
  </div>
</div>`
        display.innerHTML = card;
        explanation.innerHTML = meaning;


    } catch (error) {
        console.log(error)
    }
}


