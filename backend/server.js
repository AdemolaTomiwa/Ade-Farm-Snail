import express from 'express';

const app = express();

app.get('/api/customers', (req, res) => {
   const customers = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Brad', lastName: 'Traversy' },
      { id: 3, firstName: 'The', lastName: 'Media' },
   ];

   res.json(customers);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
