const express = require('express');
const router = express.Router();
const ClassSurveyModel = require('../models/ClassSurveyModel');

router.get('/', async (req, res) => {
    const topicData = await ClassSurveyModel.getAllTopicData();
    const rankings = await ClassSurveyModel.getAllRankings();

    res.render('template', {
        locals: {
            title: 'Class Survey',
            data: topicData,
            rankings: rankings
        },
        partials: {
            body: 'partials/home'
        }
    })
});

router.post('/update', async (req, res) => {
    let response;
    for (let key in req.body) {
        console.log("Key and Value: ", key, req.body[key]);
        response = await ClassSurveyModel.updateRanking(key, req.body[key]);
    }

    if (response.rowCount !== 1) {
        res.redirect('/error?error=${response}');
    } else {
        res.redirect('/');
    }

});

router.get('/error', async (req, res) => {
    const { error } = req.query;
    let errorMessage = error;
    
    if(!error) {
        errorMessage = "No Error Message Defined";
    }

    res.render('template', {
        locals: {
            title: "Error Page",
            error: errorMessage
        },
        partials: {
            body: 'partials/error'
        }
    })
});

module.exports = router;