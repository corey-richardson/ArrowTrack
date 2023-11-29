const testData = [
    {
        type:"Bow",
        brand:"PSE Stinger ATK",
        condition:"Good",
        value:327.00,
        quantity:1,
        bowstyle:"Compound",
        poundage:50,
        handed:"Right Handed"
    },
    {
        type:"Arrows",
        brand:"Easton X7",
        condition:"Good",
        value:15.00,
        quantity:8,
        length:28.5,
        spine:2014
    },
    {
        type:"Arrows",
        brand:"Easton ACC",
        condition:"Good",
        value:18.00,
        quantity:10,
        length:28.5,
        spine:630
    },
    {
        type:"Target",
        brand:"WA",
        condition:"Used",
        value:0.28,
        quantity:25,
        targetType:"Face",
        size_cm:60,
        isThreeSpot:"Three Spot", // Use boolean input forms but convert to text for readabilty
        isNovelty:"Standard"
    },
    {
        type:"Target",
        brand:"A-Frame",
        condition:"Okay",
        value:35.00,
        quantity:5,
        targetType:"Stand"
    },
    {
        type:"Workshop",
        brand:"Bowmaster Portable Bow Press",
        condition:"Good",
        value:100.00,
        quantity:1
    },
    {
        type:"PPE",
        brand:"Arm Guard",
        condition:"Okay",
        value:5.00,
        quantity:10
    }
    
];

let sum = 0.0;
for (let obj in testData) {
    let object = testData[obj];
    
    if (!object.quantity)
    {
        object.quantity = 1;
    }

    sum += object.value * object.quantity;

}

const para = document.createElement("p");
para.innerHTML = "<br><strong>£" + sum.toFixed(2) + "</strong>";
const vp = document.getElementById("view-page");
vp.appendChild(para);