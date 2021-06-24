const router = require('express').Router();
const fetch = require('node-fetch');

const SENTIMENT_API_URL = 'http://localhost:5000';
const DATA_API_URL = 'http://54.157.199.149:3002'

router.get('/news/:ticker', async (req, res) => {
  try {
    const ticker = req.params.ticker.toUpperCase();
    const response = await fetch(SENTIMENT_API_URL + `/news/${ticker}`);
    const parseRes = await response.json()

    console.log(parseRes);
    res.json(parseRes);
    
  } catch (err) {
    console.log(err.message);
    res.status(500).json('Server Error');
  }
})

router.get('/stocktwits/:ticker', async (req, res) => {
  try {
    const ticker = req.params.ticker.toUpperCase();
    const response = await fetch(SENTIMENT_API_URL + `/stocktwits/${ticker}`);
    const parseRes = await response.json()

    console.log(parseRes);
    res.json(parseRes);
    
  } catch (err) {
    console.log(err.message);
    res.status(500).json('Server Error');
  }
})

router.get('/press-releases/:ticker', async (req, res) => {
  try {
    const ticker = req.params.ticker.toUpperCase();
    const response = await fetch(SENTIMENT_API_URL + `/press-releases/${ticker}`);
    const parseRes = await response.json()

    console.log(parseRes);
    res.json(parseRes);
    
  } catch (err) {
    console.log(err.message);
    res.status(500).json('Server Error');
  }
})

router.get('/insider-trading/:ticker', async (req, res) => {
  try {
    const ticker = req.params.ticker.toUpperCase();
    const response = await fetch()
    
  } catch (err) {
    console.log(err.message);
    res.status(500).json('Server Error');
  }

  try {
    const ticker = req.params.ticker.toUpperCase();
    const response = await fetch(SENTIMENT_API_URL + `/insider-trading/${ticker}`);
    const parseRes = await response.json()

    console.log(parseRes);
    res.json(parseRes);
    
  } catch (err) {
    console.log(err.message);
    res.status(500).json('Server Error');
  }
})

router.get('/analyst-ratings/:ticker', async (req, res) => {
  try {
    const ticker = req.params.ticker.toUpperCase();
    const response = await fetch(SENTIMENT_API_URL + `/analyst-ratings/${ticker}`);
    const parseRes = await response.json()

    console.log(parseRes);
    res.json(parseRes);
    
  } catch (err) {
    console.log(err.message);
    res.status(500).json('Server Error');
  }
})

router.get('/quiver-quant/:ticker', async (req, res) => {
  try {
    const ticker = req.params.ticker.toUpperCase();
    const response = await fetch(SENTIMENT_API_URL + `/quiver-quant/${ticker}`);
    const parseRes = await response.json()

    console.log(parseRes);
    res.json(parseRes);
    
  } catch (err) {
    console.log(err.message);
    res.status(500).json('Server Error');
  }
})

module.exports = router;