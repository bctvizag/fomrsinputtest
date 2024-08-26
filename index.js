// import express from 'express';
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/', (req, res) => {
  
  res.json({ message: 'data received', body: req.body })
});

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});