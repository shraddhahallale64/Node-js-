var fs = require('fs');

fs.readFile('TestFile.txt', 'utf-8',function (err, data) {
                    if (err) throw err;

    console.log(data);
});


fs.writeFile('TestFile.txt', 'Hello World!', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Write operation complete.');
});

fs.appendFile('TestFile.txt', 'node ja', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Append operation complete.');
});

// to delete a file

fs.unlink('test1.txt', function () {
    
    console.log('delete operation complete.');

});