// 把_dist目录下的css的内容进行替换
const fs = require('fs');
const path = require('path');
const sourceDir = path.join(__dirname, '../_dist/static/css');
fs.readdir(sourceDir, (err, files) => {
    if(err) {
        console.log(error);
        return;
    }
    Promise.all(
        files.filter((filename) => {
            return path.extname(filename) === '.css';
        })
        .map(async (filename) => {
            return new Promise((resolve, reject) => {
                let abs_path = path.join(sourceDir, filename)
                fs.readFile(abs_path, (err, buffer) => {
                    if(err) {
                        reject(err);
                        return;
                    } else {
                        fs.writeFile(abs_path, buffer.toString().replace(/url\(static\/fonts/gi, 'url(../fonts'), (err) => {
                            if(err) {
                                reject(err);
                                return;
                            }
                            resolve();
                        })
                    }
                })
            })
        })
    )
})