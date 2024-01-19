const express = require("express");
const router = express.Router();
const NestedModel = require("../models/nestedModel");


//For creating new document in database
router.post("/createNestedData", async (req, res) => {
    try {
        let body = req.body;
        const data = await NestedModel.create(body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

//For getting all documents
router.get("/getAllNestedData", async (req, res) => {
    try {
        const data = await NestedModel.find({});
        if (data.length===0) {
            res.status(404).json({ message: "No data found" });
        } else {
            res.json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//For getting Specific document by id
router.get("/getSpecificDocument/:id", async (req, res) => {
    try {
        const _id=req.params.id;
        const data = await NestedModel.findById(_id);
        if (!data) {
            res.status(404).json({ message: "No data found" });
        } else {
            res.json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//Updating specific document 
router.put("/updateDocument/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const body = req.body;
        const updateDocument = await NestedModel.findByIdAndUpdate(_id, body, { new: true });
        res.json({ data: updateDocument, message: "Document updated" });
    } catch (error) {
        res.status(500).json(error);
    }
});

//Delete document
router.delete("/deleteDocument/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteDocument = await NestedModel.findByIdAndDelete(_id);
        res.json({ message: "Document deleted" });
    } catch (error) {
        res.status(500).json(error);
    }
});

//For deleting nested array element
router.delete('/deleteArrayElement/:documentId/:arrayElementId', async (req, res) => {
    try {
      const documentId = req.params.documentId;
      const arrayElementId = req.params.arrayElementId;
      const result = await NestedModel.updateOne(
        { _id: documentId, "array._id": arrayElementId },
        { $unset: { "array.$": 1 } }
      );
      if (result.nModified === 0) {
        res.status(404).json({ message:"Array element not found" });
      }else{
        res.json({ message: 'Array element deleted' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;