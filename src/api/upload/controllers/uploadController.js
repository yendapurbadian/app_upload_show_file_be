import sftp, { sftpDir } from '../../../config/Sftp';
import fs from 'fs';
import uploadModel from '../models/uploadModel'

exports.uploadFile = async (req, res) => {
    try {
        let localFile = req.file.path;
        let remoteFile = `${sftpDir.files}/${req.file.filename}`;

        await sftp.fastPut(localFile, remoteFile);
        fs.unlinkSync(req.file.path);
        await insertData(req.file.filename, remoteFile)
    
        res.status(200).json({
            status: 200,
            message: 'success',
            result: []
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'error',
            result: 'internal server error'
        })
    }
}

async function insertData(filename, pathDir) {
    try {
        const data = {
            file_name: filename
            , path_directory: pathDir
        }

        const insert = await uploadModel.insertData(data)
    } catch (error) {
        throw error
    }
}

exports.getDataImages = async (req, res, next) => {
    try {
        const result = await uploadModel.getDataImages()
    
        res.status(200).json({
            status: 200,
            message: 'success',
            result: result
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'error',
            result: 'internal server error'
        })
    }
}

exports.showImages = async (req, res, next) => {
    try {
        const target = req.query.path;

        if(!target) {
            return res.status(400).json({
                status: 400,
                message: 'invalid path'
            })
        }

        let options = {
            pipeOption: {
                end: true
            }
        }

        const stream = await sftp.get(target, res, options)
        return stream
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'error',
            result: 'internal server error'
        })
    }
}