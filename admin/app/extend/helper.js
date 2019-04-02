const path = require('path');
const fs = require('fs');
const md5 = require('md5');

module.exports = {
    saveFiles(files){
        const imgArr = [];
        files.forEach(file=>{
            const createFileName = md5(file.filename + new Date().getTime()) + path.extname(file.filename);
            const target = path.join(this.app.baseDir,this.config.uploadImgPath,createFileName)
            const readerStream = fs.createReadStream(file.filepath);
            const writerStream = fs.createWriteStream(target);
            try {
                readerStream.pipe(writerStream);
                imgArr.push(this.config.host + path.join(this.config.uploadImgPath,createFileName))
            } catch (err) {
                throw err;
            }
        });
        return imgArr;
    }
};
