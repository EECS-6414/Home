function recListFull() {

  var file = require("./test.json");
  var i;
  var groupVal;
  const options = {};
  //const data = new vis.DataSet(options);

  for (i = 0; i < file["nodes"].length; i++) {
    console.log(file["nodes"][i]);
    if (file["nodes"][i]["bipartite"] == 0) {
      groupVal = "author";
    }
    else {
      groupVal = "app";
    }
    /*data.add([
      { id: i+1, id: file["nodes"][i]["id"], group: groupVal}
    ]);*/

  }
  //console.log(data);
}

recListFull();