const app = require('./app/app')
require("dotenv").config({
    path: ".env"
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server en port ${port}`)
})