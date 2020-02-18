const express = require("express");

const Jobs = require("../models/jobs");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const jobs = await Jobs.find();
    res.status(200).json({ jobs });
  })
  .post(async (req, res) => {
    const newJob = await Jobs.add(req.body);
    console.log("trying to add job:", newJob );
    res.status(201).json({ newJob });
  });

router
  .route("/:id")
  .put(async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const filter = { jobId: id }
    const updated = await Jobs.update(filter, changes)
    res.status(200).json({ updated });
  })
  .delete(async (req, res)=> {
    const { id } = req.params;
    const filter = { jobId: id }
    const deleted = await Jobs.remove(filter)
    res.status(200).json({ deleted })
  })
  .get(async (req, res)=> {
    const { id } = req.params;
    const filter = { jobId: id }
    const job = await Jobs.find(filter)
    res.status(200).json({ job })
  })

module.exports = router;
