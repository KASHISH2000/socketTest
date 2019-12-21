const path = require('path');
const PublicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(PublicPath));

app.listen(port, () => {
    console.log(`Server is up at ${port}`);
});