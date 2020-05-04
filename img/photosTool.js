const fs = require("fs");
    const sizeOf = require('image-size');
    const path = "photos";
    const output = "../../themes/next/source/photos/photoslist.json";
    var dimensions;
    fs.readdir(path, function (err, files) {
        if (err) {
            return;
        }
        let arr = [];
        (function iterator(index) {
            console.log(index == files.length);
            if (index == files.length) {
                fs.writeFile(output, JSON.stringify(arr, null, "\t"),function (err,info) {
                    if(err) {
                        throw err
                    }else {
                        console.log('成功！');
                    }
                });
                return;
            }
            fs.stat(path + "/" + files[index], function (err, stats) {
                if (err) {
                    return;
                }
                if (stats.isFile()) {
                    dimensions = sizeOf(path + "/" + files[index]);
                    console.log(dimensions.width, dimensions.height);
                    arr.push(dimensions.width + '.' + dimensions.height + ' ' + files[index]);
                }
                iterator(index + 1);
            })
        }(0));
    });