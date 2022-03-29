const Button = document.getElementById('Button');
Button.addEventListener('click', Connect);
let mein = null;

let cons = fetch("https://the-dune-api.herokuapp.com/quotes")
  .then(response => response.text())
  .then(result => mein = result)
  .catch(error => console.log('error', error));


function Connect()
{  
    let text = JSON.parse(mein)[0]['quote'];
    let P = document.createElement('p');
    P.innerHTML =  text ;
    document.body.append(P);
    Button.removeEventListener('click', Connect);
}

