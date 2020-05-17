var path = require("path");

module.exports = function (app) {
    app.get("/", (req, res) => {
        console.log("get request for homepage")
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", (req, res) => {
        console.log("get request for stats")
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    app.get("/exercise", (req, res) => {
        console.log("get request for exercises")
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
}