process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    process.stdout.write('You typed: ' + cmd + '\n');
    const commandExe = require('./pwd');
    commandExe(cmd);
});