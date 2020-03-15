const del = require("del");

del.sync("www");

module.exports = {
  dir: {
    input: "src",
    output: "www"
  }
};
