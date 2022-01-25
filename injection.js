ufds_people = ["windreaper", "ritulkrsingh", "aryan12", "avaneeshk098", "sidpark1", "saarang", "devomega07", "sumitkk10", "arujbansal", "sichomohit", "Srivatsav"];
ufds_rank = 1;
table = document.querySelector("#myTable");
var num_of_rows = table.rows.length - 1;

console.log(num_of_rows);
tablehead = document.querySelector("#myTable > thead > tr");
var header = document.createElement("th");
header.setAttribute("scope", "col");
header.append("UFDS Rank");
tablehead.insertBefore(header, tablehead.childNodes[2]);
for (var i = 1; i <= ufds_people.length; i++) {
    var tablerow = document.querySelector("#myTable > tbody > tr:nth-child(" + i + ")");
    row = tablerow.children;
    var username = row[1].textContent.trim();
    console.log(username === "socho");
    if (ufds_people.includes(username)) {
        rank = row[0].textContent;
        const cell = document.createElement("th");
        cell.setAttribute("scope", "col");
        cell.append(ufds_rank);
        tablerow.insertBefore(cell, tablerow.childNodes[2]);
        ufds_rank += 1;
        console.log(i - 1);
    } else {
        table.deleteRow(i);
        i -= 1;
    }
}
while (document.querySelector("#myTable > tbody > tr:nth-child(" + i + ")")) {
    table.deleteRow(i);
}