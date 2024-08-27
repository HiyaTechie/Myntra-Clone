
// <----- OBJECT DATAS -----> //
var dealsArr = [
    { img: "https://bit.ly/3Dk3plz" },
    { img: "https://bit.ly/3NyBqDe" },
    { img: "https://bit.ly/3qN2Ewp" },
    { img: "https://bit.ly/3NyivIY" },
    { img: "https://bit.ly/3NwbdVT" },
    { img: "https://bit.ly/3NrgMVT" },
    { img: "https://bit.ly/3IJeKg4" },
    { img: "https://bit.ly/3DlD3zC" },
    { img: "https://bit.ly/36Ymhu7" },
    { img: "https://bit.ly/3IN5iZ5" },
];

dealsArr.map(function (el) {
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", el.img);
    box.append(img);
    document.querySelector("#topdeals").append(box);
});

var bestArr = [
    { img: 'https://bit.ly/3wMvK2N' },
    { img: 'https://bit.ly/3wY0TA6' },
    { img: 'https://bit.ly/3IWRXxk' },
    { img: 'https://bit.ly/36I2HCP' },
    { img: 'https://bit.ly/3LtKeIK' },
    { img: 'https://bit.ly/3uEEhC2' },
];

bestArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#best").append(box);
});


var topArr = [
    { img: 'https://bit.ly/3qOmNSH' },
    { img: 'https://bit.ly/3Dx4Lth' },
    { img: 'https://bit.ly/3uGBVTh' },
    { img: 'https://bit.ly/3DxPVCY' },
    { img: 'https://bit.ly/3iQbIfq' },

];

topArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#top").append(box);
});


var categoriesArr = [
    { img: "https://bit.ly/3wMju21" },
    { img: "https://bit.ly/3NvX0ID" },
    { img: "https://bit.ly/3tMNJ75" },
    { img: "https://bit.ly/3qJVBV4" },
    { img: "https://bit.ly/3uBoKCX" },
];

categoriesArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#categories").append(box);
});

var dealsTopArr = [
    { img: "https://bit.ly/3K69wN7" },
    { img: "https://bit.ly/3iODr09" },
    { img: "https://bit.ly/3IOGpw4" },
    { img: "https://bit.ly/38furzf" },
    { img: "https://bit.ly/36I8HeC" },
];

dealsTopArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#dealsTop").append(box);
});

var unmissableArr = [
    { img: "https://bit.ly/3K69y7H" },
    { img: "https://bit.ly/3iN4YPn" },
    { img: "https://bit.ly/36YoFkz" },
    { img: "https://bit.ly/3wINHPL" },
    { img: "https://bit.ly/3ISRhsO" },
];

unmissableArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#unmissable").append(box);
});

var coloursArr = [
    { img: "https://bit.ly/3Lm8hJN" },
    { img: "https://bit.ly/3wOjfDM" },
    { img: "https://bit.ly/3uCXq7p" },
    { img: "https://bit.ly/36VIvx8" },
    { img: "https://bit.ly/3IR4WR4" },
];

coloursArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#colours").append(box);
});

var topInfluencersArr = [
    { img: "https://bit.ly/3DnaNMZ" },
    { img: "https://bit.ly/3wN8xxt" },
    { img: "https://bit.ly/3LnQNwv" },
    { img: "https://bit.ly/35jAgu6" },
    { img: "https://bit.ly/3IN87cD" },
];

topInfluencersArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#topInfluencers").append(box);
});


