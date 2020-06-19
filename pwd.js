

module.exports = function (){
    process.stdout.write('prompt > ');

    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim(); // remove the newline
    
        if (cmd === 'pwd') {
            const path = process.cwd()
            process.stdout.write(path)
            process.stdout.write('\nprompt > ')  
        }
    })
}