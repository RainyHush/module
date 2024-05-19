const fs = require('fs');

const content = 'JavaScript an java';

fs.writeFile('./mod.js', content, err => {
    if (err) {
        console.error(err);
    } else {
        console.log('写入成功');
    }
})
  ;
