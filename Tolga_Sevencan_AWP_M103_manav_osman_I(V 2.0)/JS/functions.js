/*
function addButtonToTable(button, table) {
    let cell = document.createElement("td");
        //Get first row of table
    let row = table.rows[0];
}
*/
function secimFonksiyonu() {
    let sec = document.querySelector(".sebzeListe").rows[0].cells.length;
    document.querySelector("#secilenler").innerHTML = sec;
};