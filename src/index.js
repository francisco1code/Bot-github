var shell = require('shelljs');


if (shell.exec('chmod +x setup.bash && ./setup.bash').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
}

console.log("ok")