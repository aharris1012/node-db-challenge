const express = require("express");
const Resources = require("./resourcesDB.js")
const router = express.Router()

router.get('/', (req,res) => {
    Resources.getAllResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({error: "Could not get resources."})
        })
})

router.post('/', (req,res) => {
    Resources.addResource(req.body)
        .then(id => {
            res.status(201).json({
                message: "Successfully added a new resource.",
                newResource: {
                    id: id[0],
                    name: "",
                    description: null,
                     ...req.body
                    }
            })
        })
        .catch(err => {
            res.status(500).json({error: "Could not add resource."})
        })
})

module.exports = router;