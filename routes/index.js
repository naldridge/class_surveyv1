const express = require('express');
const router = express.Router();
const ClassSurveyModel = require('../models/ClassSurveyModel');

router.get('/', async (req, res) => {
    const topicData = await ClassSurveyModel.getAllTopicData();
    //console.log("Topic Data: ", topicData);
    res.render('template', {
        locals: {
            title: 'Class Survey',
            data: topicData
        },
        partials: {
            body: 'partials/home'
        }
    })
});

module.exports = router;