import app from './app'
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT)
})
