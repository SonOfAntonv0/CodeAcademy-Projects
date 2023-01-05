let tweets=require('./myTweets.json');
let tweetArr=[]
for(let elem in tweets){
    tweetArr.push(tweets[elem]);
}
let generateRandomTweets= (tweetArr)=>{
    let tweetNum=Math.floor(Math.random()*tweetArr.length);
    
    return tweetArr[tweetNum];
};

let result=generateRandomTweets(tweetArr);
let button=document.getElementById('generate');
button.onclick=(event)=>{
    event.target.innerHTML='Heloo';
}

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