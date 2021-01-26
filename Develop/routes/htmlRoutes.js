var path = require("path");


module.exports = function(app) {
// homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// note page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});
};