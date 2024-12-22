function toss(){
    const flip=["Heads","Tails"];
    let out=flip[Math.floor(Math.random()*flip.length)];
    const result= document.getElementById("result");
    result.innerHTML = out;
}
