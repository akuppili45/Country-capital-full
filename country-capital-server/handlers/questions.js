const db = require('../models');
const fetch = require('node-fetch');
const shuffle = require('shuffle-array');
exports.getQuestions = async function (req, res, next) {
    try {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        const countryData = shuffle(data);
        const questionAnswer = Array(10).fill().map((invalid, index) => {
            return {
                question: countryData[index].name,
                answer: countryData[index].capital,
                allChoices: shuffle([
                    countryData[index].capital,
                    countryData[index + 10].capital,
                    countryData[index + 20].capital,
                    countryData[index + 30].capital
                ]),
                flag: countryData[index].flag
            }
        });
       return res.status(200).json({quizQuestions: questionAnswer});
    } catch (err) {
        console.log(err)
    }    
}

