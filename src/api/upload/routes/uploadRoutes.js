import express from "express";
import uploadController from '../controllers/uploadController';
import { uploadFile } from '../../middleware/Multer'

const router = express.Router();

router.post('/file', (req, res, next) => {
    uploadFile(req, res, function(err) {
        if(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            })
        }

        uploadController.uploadFile(req, res, next);
    })
});

router.get('/get-data', uploadController.getDataImages)
router.get('/images', uploadController.showImages)

module.exports = router;