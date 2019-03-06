const spawn = require('child_process').spawn;
const cwd = process.cwd();
module.exports = function () {
    let [type, ...arg] = process.argv.slice(2);
    if (type === 'ts' || type === 'prettier') {
        spawn('prettier', ['--write', '--config', '.prettierrc', `${cwd}/*.ts*`]);
    }
    else {

    }
}
