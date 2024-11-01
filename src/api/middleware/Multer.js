import multer from 'multer';
import path from 'path';

const fileStorageEngine = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../../files/images'))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname)
        }
    }
)

function validateUploadFile(req, file, cb) {
    if(file.mimetype.startsWith("image") && file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    }
    else {
        cb(null, false)
        return cb(new Error('Upload gagal!! Hanya format .jpeg, .png, yang diperbolehkan'))
    }
}

const uploadFile = multer (
    {
        storage : fileStorageEngine,
        fileFilter: validateUploadFile
    }
).single('uploaded_file')

module.exports = {
    uploadFile: uploadFile
}