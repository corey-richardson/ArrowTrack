function promiseWrapper()
{
    testGetAllChildren();
    
    fetch('./static/items.json')
        .then(response => response.json()) // http 200 OK
        .then(json => {
            console.log(json);
            return json;
        });
}

async function getAllChildren () 
{
    let data = await promiseWrapper(); 
    console.log(data);
    return data;
}

function testGetAllChildren() {

    const testData = [
        {
            "brand":"PSE Stinger ATK",
            "condition":"Good",
            "value":327.00,
            "quantity":1,
            "location":"Widewell",
            "notes":"Compound 50# Right Handed"
        },
        {
            "brand":"Easton X7",
            "condition":"Good",
            "value":15.00,
            "quantity":8,
            "location":"YMCA",
            "notes":"28.5\" 2014"
        }
    ]

    console.log(testData);
    return testData;
}

// https://stackoverflow.com/questions/39021870/fetch-returns-promise-instead-of-actual-data-even-after-using-then