var dns = require('dns');
var url= 'www.mum.edu';
var ipadder = dns.resolve4(url, function (err, address) {
    if (err) 
        console.log (err);
    else
        console.log('Normal dns.resolve4 Function: '+address);
});

const {promisify} = require('util');
const myPromise = promisify(dns.resolve4);

myPromise (url)
    .then((address)=>{console.log('Inside Promise Function: '+address)})
    .catch((err)=>{console.log(err)});


async function myAsyncFunction(){
    try{
        var address3 = await myPromise(url);
        console.log('Inside Async Function: '+address3);
    }catch(e){
        console.log(e);
    }
} 
myAsyncFunction();
