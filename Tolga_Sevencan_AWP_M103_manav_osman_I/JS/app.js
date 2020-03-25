let sebzeler = [{
    name: "Biber",
    country: "Turkiye",
    },
    {
    name: "Domates",
    country: "Turkiye",    
    },
    {
    name: "Hiyar",
    country: "Turkiye",
    },
];
    

let meyveler = [{ 
    name: "Ananas",
    country: "Brezilya",
    }, 
    {
    name: "Armut",
    country: "Turkiye",
    }, 
    {
    name: "Ayva",
    country: "Turkiye",
    },
   {
    name: "Elma",
    country: "Yunanistan",
    },    
   {
    name: "Mandalina",
    country: "Turkiye",
    },
   {
    name: "Muz",
    country: "Brezilya",       
    },
    {
    name: "Portakal",
    country: "Turkiye",
    },
];

let html = "<table border='1|1'>";
for (let i = 0; i < sebzeler.length; i++) {
    html+="<tr>";
    html+="<td>"+sebzeler[i].name+"</td>";
    html+="<td>"+sebzeler[i].country+"</td>";

    html+="</tr>";

}
html+="</table>";
document.querySelector(".columnLeftSebzeTablo").innerHTML = html;

/*
let html = "<table border='1|1'>";
for (let i = 0; i < meyveler.length; i++) {
    html+="<tr>";
    html+="<td>"+meyveler[i].name+"</td>";
    html+="<td>"+meyveler[i].country+"</td>";

    html+="</tr>";

}
html+="</table>";
document.querySelector(".columnLeftMeyveTablo").innerHTML = html;


/*
output("<strong>Meyveler:</strong> &nbsp" + meyveler);
output("<br><br>");

output("<strong>Sebzeler:</strong> &nbsp" + sebzeler);
output("<br><br>");
*/