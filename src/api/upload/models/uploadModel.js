import db from '../../../config/Database'

exports.insertData = (data) => {
    const query = 'INSERT INTO upload SET ?'

    return new Promise(function (resolve, reject) {
        db.query(query, data, function(err, rows, field) {
            if(err) reject(err)
            resolve(rows)
        })
    })
}

exports.getDataImages = () => {
    const query = 'SELECT * FROM upload';

    return new Promise(function (resolve, reject) {
        db.query(query, function(err, rows, field) {
            if(err) reject(err)
            resolve(rows)
        })
    })
}