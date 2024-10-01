let max=100
let min=1
let rand_num=Math.floor(Math.random() * (max - min)+1)
console.log(rand_num)
let entry=true;
let attempts=0;
while(entry){
    let numb=window.prompt(`Enter a number ${min} - ${max}`)
    numb=Number(numb);
    attempts++
    if(numb < rand_num){
        alert("Your value is too low")
    }
    else if(numb>100){
        alert(`Please Enter number between ${min} - ${max}`)
    }
    else if(numb > rand_num){
        alert("Your value is too high")
    }
    else if(numb == rand_num){
        
        alert(`Yes You are right! You find the number in ${attempts}`)
        entry=false;
    }

}