const { Dosei } = require("@dosei/dosei/bin");

new Dosei({
    name: "express-app",
    port: 3000,
    run: "node index.js"
});
