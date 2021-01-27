var path = require("path");
var notesData = require("../db/db")


module.exports = function(app) {
// all information saved
app.get("/api/notes", function(req, res) {
   res.json(notesData);
});

app.post("/api/notes/", function (req, res) {
    var data = req.body;
    var title = data.title;
    var text = data.text;
    var id = notesData.length + 1; 
    var note = {title, text, id};
    notesData.push(note);
    res.json(true);
});

app.delete("/api/notes", function(req, res) {
    res.json({ok: true});
});

};