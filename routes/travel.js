const express = require('express');
const router = express.Router();
const db = require('../db');

// 여행지 전체 목록
router.get('/', async (req, res) => {
  try {
    const _query = 'SELECT * FROM travellist';
    const [results] = await db.query(_query);
    res.render('travel', { travelList: results });
  } catch (err) {
    console.error('데이터베이스 쿼리 실패', err);
    res.status(500).send('Internal Server Error');
  }
});

// 여행지 추가 페이지로 이동
router.get('/add', (req, res) => {
  res.render('addTravel');
});

// 여행지 추가
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const _query = 'INSERT INTO travellist (name) VALUES (?)';
    await db.query(_query, [name]);
    res.redirect('/travel');
  } catch (err) {
    console.error('데이터베이스 쿼리 실패', err);
    res.status(500).send('Internal Server Error');
  }
});

// 여행지 상세 조회
router.get('/:id', async (req, res) => {
  const travelId = req.params.id;
  try {
    const _query = 'SELECT * FROM travellist WHERE id = ?';
    const [results] = await db.query(_query, [travelId]);
    const travel = results[0];
    res.render('travelDetail', { travel });
  } catch (err) {
    console.error('데이터베이스 쿼리 실패', err);
    res.status(500).send('Internal Server Error');
  }
});

// 여행지 수정 페이지로 이동
router.get('/:id/edit', async (req, res) => {
  const travelId = req.params.id;
  try {
    const _query = 'SELECT * FROM travellist WHERE id = ?';
    const [results] = await db.query(_query, [travelId]);
    const travel = results[0];
    res.render('editTravel', { travel });
  } catch (err) {
    console.error('데이터베이스 쿼리 실패', err);
    res.status(500).send('Internal Server Error');
  }
});

// 여행지 수정
router.put('/:id', async (req, res) => {
  const travelId = req.params.id;
  const { name } = req.body;
  try {
    const _query = 'UPDATE travellist SET name = ? WHERE id = ?';
    await db.query(_query, [name, travelId]);
    res.render('updateSuccess');
  } catch (err) {
    console.error('데이터베이스 쿼리 실패', err);
    res.status(500).send('Internal Server Error');
  }
});

// 여행지 삭제 
router.delete('/:id', async (req, res) => {
  const travelId = req.params.id;
  try {
    const _query = 'DELETE FROM travellist WHERE id = ?';
    await db.query(_query, [travelId]);
    res.render('deleteSuccess');
  } catch (err) {
    console.error('데이터베이스 쿼리 실패', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
