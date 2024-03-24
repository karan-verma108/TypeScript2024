async function fetchData():Promise<unknown> {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city}&appid={id}`);
    let data = await response.json();
    return data;
}

async function processData(){
    let response = await fetchData();

    if(typeof response === 'object'){
        console.log(response);
    } else{
        console.log('response is of another type');
    }
}

processData();