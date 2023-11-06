async function fetching(){
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    let data = '';
    try{
        const response = await fetch(apiUrl)
        
        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        data = await response.json();
        console.log(data);
        console.log(data.results[0]);
    }catch(error){
        console.error('There was a problem with the fetch operation:', error);
    }

    document.getElementById("poke1").innerHTML=data.results[0].name;
    document.getElementById("btn1").onclick = function () {location.href = data.results[0].url;};

    document.getElementById("poke2").innerHTML=data.results[1].name;
    document.getElementById("btn2").onclick = function () {location.href = data.results[1].url;};

    



    document.getElementById("poke3").innerHTML=data.results[2].name;
    document.getElementById("btn3").onclick = function () {location.href = data.results[2].url;};


    document.getElementById("poke4").innerHTML=data.results[3].name;
    document.getElementById("btn4").onclick = function () {location.href = data.results[3].url;};


    document.getElementById("poke5").innerHTML=data.results[4].name;
    document.getElementById("btn5").onclick = function () {location.href = data.results[4].url;};


    document.getElementById("poke6").innerHTML=data.results[5].name;
    document.getElementById("btn6").onclick = function () {location.href = data.results[6].url;};


    document.getElementById("poke7").innerHTML=data.results[6].name;
    document.getElementById("btn7").onclick = function () {location.href = data.results[6].url;};


    document.getElementById("poke8").innerHTML=data.results[7].name;
    document.getElementById("btn8").onclick = function () {location.href = data.results[7].url;};


    document.getElementById("poke9").innerHTML=data.results[8].name;
    document.getElementById("btn9").onclick = function () {location.href = data.results[8].url;};


    document.getElementById("poke10").innerHTML=data.results[9].name;
    document.getElementById("btn10").onclick = function () {location.href = data.results[9].url;};


    document.getElementById("poke11").innerHTML=data.results[10].name;
    document.getElementById("btn11").onclick = function () {location.href = data.results[10].url;};


    document.getElementById("poke12").innerHTML=data.results[11].name;
    document.getElementById("btn12").onclick = function () {location.href = data.results[11].url;};


    document.getElementById("poke13").innerHTML=data.results[12].name;
    document.getElementById("btn13").onclick = function () {location.href = data.results[12].url;};


    document.getElementById("poke14").innerHTML=data.results[13].name;
    document.getElementById("btn14").onclick = function () {location.href = data.results[13].url;};


    document.getElementById("poke15").innerHTML=data.results[14].name;
    document.getElementById("btn15").onclick = function () {location.href = data.results[14].url;};

    document.getElementById("poke16").innerHTML=data.results[15].name;
    document.getElementById("btn16").onclick = function () {location.href = data.results[15].url;};


    document.getElementById("poke17").innerHTML=data.results[16].name;
    document.getElementById("btn17").onclick = function () {location.href = data.results[16].url;};


    document.getElementById("poke18").innerHTML=data.results[17].name;
    document.getElementById("btn18").onclick = function () {location.href = data.results[17].url;};


    document.getElementById("poke19").innerHTML=data.results[18].name;
    document.getElementById("btn19").onclick = function () {location.href = data.results[18].url;};

    document.getElementById("poke20").innerHTML=data.results[19].name;
    document.getElementById("btn20").onclick = function () {location.href = data.results[19].url;};

}

fetching();