const express = require('express')
const morgan =  require('morgan')

const app = express()

app.set('view engine','ejs');
// //Listening for requests
// app.get('/', (req, res) => {
//   res.send('data fetching')
// })

// app.get('/home', (req, res) => {
//   res.sendFile('./views/index.html', { root: __dirname })
// })

// app.get('/about', (req, res) => {
//   res.sendFile('./views/about.html', { root: __dirname })
// })

// //redirects

// app.get('/about-us', (req, res) => {
//   res.redirect('/about')
// })
// //404 page

// app.use((req, res) => {
//     res.sendFile('./views/404.html', { root: __dirname })
    
//   })


//Listening for requests
app.listen(3001)
app.use(express.static('public'))
app.use(morgan('tiny'));

app.get('/', (req, res) => {

  const blogs = [
    {title: 'yoshi finds eggs', snippet:'lorem ipsum dolor sit amet consectetur'},
    {title: 'mario finds stars', snippet:'lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet:'lorem ipsum dolor sit amet consectetur'},
  ]
  res.render('index',{title:'Home',blogs});
})

app.get('/about', (req, res) => {
  res.render('about',{title:'About'})
})

app.get('/blogs/create',(req,res) =>{

res.render('create',{title:'Create a new Blog'});
})


  
//404 page

app.use((req, res) => {
    res.status(404).render('404',{title : '404'})
    
  })




