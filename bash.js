const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

const done = output => {
  process.stdout(output);
  process.stdout.write("prompt > ");
};

process.stdin.on("data", data => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd();
  }
  if (cmd === "ls") {
    ls();
  }
  if (cmd.split(" ")[0] === "cat") {
    cat(cmd.split(" ")[1]);
  }
  if (cmd.split(" ")[0] === "curl") {
    //console.log("WEBPAGE", cmd.split(" ")[1]);
    curl(cmd.split(" ")[1]);
  }
});

module.exports = done;
