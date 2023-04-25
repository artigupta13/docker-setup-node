const express = require('express');
const app =express();
app.use(express.json());

const books = [
  {title: 'Harry Potter', id: 1},
  {title: 'Twilight', id: 2},
  {title: 'Lorien Legacies', id: 3}
  ]

  //READ Request Handlers
app.get('/', (req, res) => {
  res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
  });
   
  app.get('/api/books', (req:any,res: any)=> {
  res.send(books);
  });
app.get('/api/book/:id',(req: any,res: any) =>{
  console.log(req.params);
  const book = books.find(c=> c.id === parseInt(req.params.id));
  if(!book){
    res.status(400).send('<h2>Not found</h2>');
  }

  else{
    res.send(book);
  }
});
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));  