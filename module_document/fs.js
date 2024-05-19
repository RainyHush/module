// 导入文件系统模块
import * as fs from "fs";
// 异步写入文件
let text = "JavaScript";
fs.writeFile("cs.js", text, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("写入的内容是：" + text);
});
// 以追加模式写入文件
fs.appendFile("cs.js", "\njava", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("追加的内容是：java");
});

// 异步读取文件
fs.readFile("cs.js", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log("读取的内容是: " + data);
});
// 同步删除文件
fs.unlink("cs.js", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("删除文件成功");
});