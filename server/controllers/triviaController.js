let questionsList = [];


module.exports = {
    create: (req, res) => {
        let { resp } = req.body
        let data = resp.data.results;
        let questionsList = [];
        data.map(e => {
            questionsList.push(e);
        })

        res.status(200).send(questionsList);
        
    }
}