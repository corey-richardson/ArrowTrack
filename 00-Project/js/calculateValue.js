const testData = [
    {
        brand:"PSE Stinger ATK",
        condition:"Good",
        value:327.00,
        quantity:1,
        location:"Widewell",
        notes:"Compound 50# Right Handed"
    },
    {
        brand:"Easton X7",
        condition:"Good",
        value:15.00,
        quantity:8,
        location:"YMCA",
        notes:"28.5\" 2014"
    },
    {
        brand:"Easton ACC",
        condition:"Good",
        value:18,
        quantity:10,
        location:"Widewell",
        notes:"28.5\" 630"
    },
    {
        brand:"WA 60cm Face",
        condition:"Used",
        value:0.28,
        quantity:25,
        location:"YMCA",
        notes:"Three Spot"
    },
    {
        brand:"A-Frame Stand",
        condition:"Okay",
        value:35.00,
        quantity:5,
        location:"Widewell",
        notes:""
    },
    {
        brand:"Bowmaster Portable Bow Press",
        condition:"Good",
        value:100.00,
        quantity:1,
        location:"Widewell",
        notes:""
    },
    {
        type:"PPE",
        brand:"Arm Guard",
        condition:"Okay",
        value:5.00,
        quantity:10,
        location:"Widewell",
        notes:""
    }
    
];

let sum = 0.0;

// _all is prefixed with an underscore as it should not be displayed to the user
// the underscore should hopefully be immeadiatley obvious on the webpage if this rule is not followed
const locations = {"_all" : 0.0};

for (let obj in testData)
{
    let object = testData[obj];
    if (!locations[object.location])
    {
        locations[object.location] = 0.0;
    }
}
console.log(locations);

for (let obj in testData) {
    let object = testData[obj];
    
    // Set default value if not already set
    if (!object.quantity)
    {
        object.quantity = 1;
    }

    // Update values
    locations["_all"] += object.value * object.quantity;
    locations[object.location] += object.value * object.quantity;
}

// Temp buffer
let text = "";

// For each storage location
for (let loc in locations)
{
    if (loc == "_all") // only display sum, not name
    {
        text += "£" + locations["_all"].toFixed(2);
        continue;
    }

    text += " | " + loc + ": £" + locations[loc].toFixed(2);
}

// Create DOM object and style it
const para = document.createElement("p");
para.style.textAlign = "center";
para.style.fontWeight = "bold";
// Add created DOM element to view-page
para.innerHTML = text;
const vp = document.getElementById("view-page");
vp.appendChild(para);