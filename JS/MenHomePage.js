
// <----- OBJECT DATAS -----> //
var dealsArr = [{
    img: "https://bit.ly/3JRzkMK"
},
{
    img: "https://bit.ly/3IMN36c"
},
{
    img: "https://bit.ly/370ZT3C"
},
{
    img: "https://bit.ly/3NsYyDb"
},
{
    img: "https://bit.ly/3wM9hTp"
},

{
    img: "https://bit.ly/3JNVFe3"
},

];

dealsArr.map(function (el) {
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", el.img);
    box.append(img);
    document.querySelector("#topdeals").append(box);
});

var bestArr = [{
    img: "https://bit.ly/3DnfTst"
},
{
    img: "https://bit.ly/3uB2WHQ"
},
{
    img: "https://bit.ly/3NvrZEB"
},
{
    img: "https://bit.ly/3JP1BmV"
},
{
    img: "https://bit.ly/3Nt0VG5"
},
{
    img: "https://bit.ly/3uEEhC2"
},

];

bestArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#best").append(box);
});


var topArr = [{ img: 'https://bit.ly/3wTrgam' },
{ img: 'https://bit.ly/3Ln7fx1' },
{ img: 'https://bit.ly/3wKizze' },
{ img: 'https://bit.ly/3iLkgUQ' },
{ img: 'https://bit.ly/3uzcDX3' },

];

topArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#top").append(box);
});


var categoriesArr = [{ img: "https://bit.ly/3NxSRUs" },
{ img: "https://bit.ly/36DkXwX" },
{ img: "https://bit.ly/3Diiowi" },
{ img: "https://bit.ly/3Nu4j3y" },
{ img: "https://bit.ly/3DkgEm6" },
{ img: "https://bit.ly/3NG3TY6" },
];

categoriesArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#categories").append(box);
});

var dealsTopArr = [
    { img: "https://bit.ly/3uB3jlE" },
    { img: "https://bit.ly/3Dmujct" },
    { img: "https://bit.ly/3uELKRA" },
    { img: "https://bit.ly/3JS3pvv" },
    { img: "https://bit.ly/3tMDnEk" },
];

dealsTopArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#dealsTop").append(box);
});

var unmissableArr = [
    { img: "https://bit.ly/3qLHGOe" },
    { img: "https://bit.ly/3ux7UVU" },
    { img: "https://bit.ly/3Losbnr" },
    { img: "https://bit.ly/35l3SaH" },
    { img: "https://bit.ly/3qL0DAB" },
];

unmissableArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#unmissable").append(box);
});

var coloursArr = [
    { img: "https://bit.ly/3iHXRI4" },
    { img: "https://bit.ly/3JRJPj8" },
    { img: "https://bit.ly/3DkZQvq" },
    { img: "https://bit.ly/3DzgXdf" },
    { img: "https://bit.ly/36G5TPb" },
];

coloursArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#colours").append(box);
});

var topInfluencersArr = [
    { img: "https://bit.ly/3Nt9VLn" },
    { img: "https://bit.ly/36Aqt3q" },
    { img: "https://bit.ly/3IMY4o4" },
    { img: "https://bit.ly/3wIag7b" },
    { img: "https://bit.ly/3uAK8Iv" },
];

topInfluencersArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#topInfluencers").append(box);
});


