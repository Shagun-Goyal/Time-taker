const express = require('express');
const router = express.Router();
const TimeEntry = require('../models/TimeEntry');

router.post('/', async (req, res) => {
  try {
    const entry = new TimeEntry(req.body);
    await entry.save();
    res.status(201).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/weekly', async (req, res) => {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const analytics = await TimeEntry.aggregate([
      {
        $match: {
          timestamp: { $gte: oneWeekAgo }
        }
      },
      {
        $group: {
          _id: {
            domain: '$domain',
            category: '$category'
          },
          totalTime: { $sum: '$timeSpent' }
        }
      }
    ]);

    res.json(analytics);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;