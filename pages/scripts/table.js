var table = "<tr><th>COUNTRY</th><td>" + localStorage.getItem("country").toUpperCase() + "</td></tr>";
table += "<tr><th>CITY</th><td>" + localStorage.getItem("city") + "</td></tr>";
table += "<tr><th>PROVINCE</th><td>" + localStorage.getItem("province") + "</td></tr>";
table += "<tr><th>ADDRESS LINE 1</th><td>" + localStorage.getItem("address1") + "</td></tr>";
table += "<tr><th>ADDRESS LINE 2</th><td>" + localStorage.getItem("address2") + "</td></tr>";
table += "<tr><th>POSTAL CODE</th><td>" + localStorage.getItem("postalcode") + "</td></tr>";
table += "<tr><th>PHONE</th><td>" + localStorage.getItem("phone") + "</td></tr>";

var estructure = document.createElement("table");
estructure.innerHTML = table;
document.getElementById("tableData").appendChild(estructure);
