var CronJob = require('cron').CronJob;

var counter = 1;

var job = new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
  if(counter<5){
      console.log('counter-->'+counter);
    counter=counter+1;
  } else {
      console.log('Going to close');
      job.stop();
  }
}, null, true, 'America/Los_Angeles');