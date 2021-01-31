var path = require("path");
var notesData = require("../db/db")
var noteCount = 0;


module.exports = function(app) {
// all information saved
app.get("/api/notes", function(req, res) {
    console.log(notesData);
   res.json(notesData);
});

app.get("/api/notes/:id", function(req, res) {
    var chosen = req.params.id;

    console.log(chosen);
    for (var i = 0; i < notesData.length+1; i++) {
      if (chosen === notesData[i].routeName) {
        return res.json(notesData[i]);
      }
    }
  
    return res.json(false);
 });
 

app.post("/api/notes/", function (req, res) {
    var title = req.body.title;
    var text = req.body.text;
    noteCount += 1;
    var id = noteCount;
    var routeName = id;
    var note = {title, text, id, routeName};
    notesData.push(note);
    res.json(true);
});

app.delete("/api/notes/:noteID", function(req, res) {
    var index = req.params.noteID;
    console.log(index);
    var temp = [];
    for (var i = 0; i < notesData.length; i++) {
        if (notesData[i].routeName !== parseInt(index)) {
          temp.push(notesData[i]);
        }
    }
    notesData = temp;
    res.send("table removed")
});

};