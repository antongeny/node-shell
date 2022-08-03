module.exports = (text) =>{
    if(text === 'pwd'){
    process.stdout.write(`Your current work directory is: ${process.cwd()} \n`);
}
process.stdout.write('Prompt > ');
}