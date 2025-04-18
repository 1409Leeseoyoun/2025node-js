const express = require('express');
const router = express.Router();
const db = require('../db')

router.get('/add', (req, res) => {
  res.render('addTravel');
});

router.post('/', (req, res) => {
  const { name } = req.body;
  const _query = 'INSERT INTO travellist (name) VALUES (?)';
  db.query(_query, [name], (err) => {
    if (err) {
      console.error('데이터베이스 쿼리 실패', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.redirect('/travel');
  });
});

router.get('/', (req, res) => {
  const _query = 'SELECT * FROM travellist';
  db.query(_query, (err, results) => {
    if (err) {
      console.error('데이터베이스 쿼리 실패', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const travelList = results;
    res.render('travel', { travelList });
  });
});

router.get('/:id', (req, res) => {
  const travelId = req.params.id;
  const _query = 'SELECT * FROM travellist WHERE id=?';
  db.query(_query, [travelId], (err, results) => {
    if (err) {
      console.error('데이터베이스 쿼리 실패', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const travel = results[0];
    res.render('travelDetail', { travel });
  });
});

router.get('/:id/edit', (req, res) => {
  const travelId = req.params.id;
  const _query = 'SELECT * FROM travellist WHERE id = ?';
  db.query(_query, [travelId], (err, results) => {
    if (err) {
      console.error('데이터베이스 쿼리 실패', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('editTravel', { travel: results[0] });
  });
});

router.put('/:id', (req, res) => {
  const travelId = req.params.id;
  const { name } = req.body;
  const _query = 'UPDATE travellist SET name = ? WHERE id = ?';
  db.query(_query, [name, travelId], (err) => {
    if (err) {
      console.error('데이터베이스 쿼리 실패', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('updateSuccess');
  });
});

router.delete('/:id', (req, res) => {
  const travelId = req.params.id;
  const _query = 'DELETE FROM travellist WHERE id = ?';
  db.query(_query, [travelId], (err) => {
    if (err) {
      console.error('데이터베이스 쿼리 실패', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('deleteSuccess');
  });
});

module.exports = router;
