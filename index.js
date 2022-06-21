const base_url = 'http://data.fixer.io/api/';
const key = '24a0b8891c38e8dad587364f5abb0819';

let ratesObj = {
}

fetch(`${base_url}/latest?access_key=${key}`)
.then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
})
.then(data => {
    const keys = Object.keys(data.rates);
    ratesObj = Object.assign({}, data.rates);
    keys.forEach(e => {
        const option = document.createElement('option');
        option.setAttribute('value', e);
        option.append(e)
        From.appendChild(option);
        const option2 = document.createElement('option');
        option2.setAttribute('value', e);
        option2.append(e)
        To.appendChild(option2);
    })
    
})

convert.onclick = e => {
    if (result.firstElementChild){
        result.firstElementChild.remove();
    }
    rate = SUM.value;
    const res = (ratesObj[To.value]/ratesObj[From.value]) * rate;
    const h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(`${rate} ${From.value} = ${parseFloat(res).toFixed(3)} ${To.value}`));
    result.appendChild(h1);
    
    }




