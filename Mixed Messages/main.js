import tweets from './myTweets.json' assert {type: 'json'};
let tweetArr=[]
console.log()
for(let elem in tweets){
    tweetArr.push(tweets[elem]);
}
let generateRandomTweets= (tweetArr)=>{
    let tweetNum=Math.floor(Math.random()*tweetArr.length);
    
    return tweetArr[tweetNum];
};

let button=document.getElementById('generate');
let displayTweet= ()=>{
    document.getElementById('text').innerHTML=generateRandomTweets(tweetArr);
};
button.addEventListener('click',displayTweet);

let context={
    text:result
};
/*
    let templateElem=document.getElementById('templateHB').innerHTML;
    let templateSource=Handlebars.compile(templateElem);
    let text=templateSource(context);
    document.getElementById('text').innerHTML=text;
*/
//console.log(newArr);