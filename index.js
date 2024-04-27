import express from 'express'
import path from 'path'

const app = express()

app.listen(5001, () => console.log( ' API running on port 5001'))

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.json( 'My API Running :)'))
