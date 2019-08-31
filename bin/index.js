#!/usr/bin/env node
const sh = require('shelljs')
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
 
updateNotifier({pkg}).notify();

if (!sh.which('php')) {
    sh.echo('Sorry, this module requires php to be installed in your machine or check your environment variable.');
    sh.exit(1);
  }
  else{
    var args = process.argv.slice(2)
    var option = '';
    
    for(i=0; i< args.length; i++){
        option += args[i] + " ";
    }
    
    var readStream = `${__dirname}/wp-cli.phar`
    
    sh.chmod(755, readStream)
    
    sh.exec(`php ${readStream} ${option}`)
  }

