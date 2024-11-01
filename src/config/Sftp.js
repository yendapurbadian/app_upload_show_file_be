import Client from 'ssh2-sftp-client'

//silahkan disesuaikan dengan konfigurasi SFTP Anda
const config = {
    host: '',
    port: '22',
    username: '',
    password: '',
    forceIPv4: false,
    forceIPv6: false,
    readyTimeout: 60000
}

export const sftpDir = {
    files: '/files',
}

const sftp = new Client();

sftp.connect(config)
    .then(() => {
        console.log('Connected to the SFTP server')
    })
    .catch(err => {
        console.log('\n\nError when connecting to SFTP server', err)
    })

export default sftp


/* End of file Sftp.js */
/* Location: ./config/Sftp.js */