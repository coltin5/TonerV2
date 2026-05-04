const toner = [
    {name: "CF287A", value: 3},
    {name: "CF287X", value: 3},
    {name: "CF360X", value: 3},
    {name: "CF361X", value: 3},
    {name: "CF362X", value: 3},
    {name: "CF363X", value: 3},
    {name: "CF280A", value: 3},
    {name: "CF258A", value: 3},
    {name: "CF226X", value: 4},
    {name: "CF237A", value: 3},
    {name: "Q5942X", value: 2},
    {name: "CF281A", value: 3},
    {name: "CE400X", value: 3},
    {name: "CE401A", value: 3},
    {name: "CE402A", value: 3},
    {name: "CE403A", value: 3},
    {name: "CF289A", value: 3},
    {name: "CF410X", value: 2},
    {name: "CF411X", value: 2},
    {name: "CF412X", value: 2},
    {name: "CF413X", value: 2},
    {name: "CE410A", value: 2},
    {name: "CE411A", value: 2},
    {name: "CE412A", value: 2},
    {name: "CE413A", value: 2},
    {name: "CE310A", value: 2},
    {name: "CE311A", value: 2},
    {name: "CE312A", value: 2},
    {name: "CE313A", value: 2},
    {name: "Q1339A", value: 2},
    {name: "CE255A", value: 3},
    {name: "CE505A", value: 3},
    {name: "CC364A", value: 2},
    {name: "W2120X", value: 4},
    {name: "W2121X", value: 4},
    {name: "W2122X", value: 4},
    {name: "W2123X", value: 4},
    {name: "CE390A", value: 4},
    {name: "W1480A", value: 3},
    {name: "W1340A", value: 2},
]


function calculateToner() {
    let output = []
    for(let i = 0; i < toner.length; i++){
        let temp = toner[i];
        let num = document.getElementById(temp.name).value;
        if (temp.value - num > 0) {
            output.push(`${temp.name}: ${temp.value - num}`);
        }
    }
    const listContent = output.join('\n');
    const blob = new Blob([listContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TonerWeNeed.txt'; 
    a.click();
    URL.revokeObjectURL(url);
}

function calculateList() {
    let output2 = []
    for(let j = 0; j < toner.length; j++){
        let temp = toner[j];
        let num = document.getElementById(temp.name).value;
        output2.push(`${temp.name}: ${num}`);
    }
    const listContent = output2.join('\n');
    const blob2 = new Blob([listContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob2);
    const a2 = document.createElement('a'); 
    a2.href = url;
    a2.download = 'TonerWeHave.txt'; 
    a2.click();
    URL.revokeObjectURL(url);
}