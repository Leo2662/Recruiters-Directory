import express from 'express';

    const app = express();
    const PORT = process.env.PORT || 3000;

    app.get('/api', (req, res) => {
      res.json({ message: 'Hello from the Node.js server!' });
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
