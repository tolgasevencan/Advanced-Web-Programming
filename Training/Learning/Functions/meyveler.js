let meyvelerNesnesi = {
    name: "Cin Armutu",
    fiyati: 24.50,
    bittimi: false,
    sezonu: ["bahar", "yaz"],
}

console.log(meyvelerNesnesi);

console.log(JSON.stringify(meyvelerNesnesi));

console.log(JSON.parse('{"name":"Cin Armutu","fiyati":24.5,"bittimi":false,"sezonu":["bahar","yaz"]}'));