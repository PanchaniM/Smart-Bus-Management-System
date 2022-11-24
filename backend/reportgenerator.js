//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("./template.html", "utf8");

var options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
  header: {
      height: "45mm",
  },
  footer: {
      height: "28mm",
      contents: {
          first: 'Cover page',
          2: 'Second page', // Any page number is working. 1-based index
          default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
          last: 'Last Page'
      }
  }
};

var users = [
  {
    NIC: "ss",
    Name:"ss",
    Phone:"88",
    Type:"ss",
    Email:"ss",
    Password:"ss"
  },
];

var document = {
  html: html,
  data: {
    users: users,
  },
  path: "./public/pdf/output.pdf",
  type: "",
};

module.exports={
  options,
  document
}