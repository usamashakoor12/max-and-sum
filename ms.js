var mx=document.getElementById("show")
function clik(){
    let max=[14,27,25,4,32,19,8,45,34];
    let largest = max[0];
    for(let m=0; m<max.length; m++)
    if (max[m]>largest)
    
      {
     largest=max[m]
     mx.innerHTML=largest
    }
  }

  function evenAdd(){
    mx.innerHTML=``;
    let sum=0;
    for( let i=0; i<=20; i++)
    if(i%2==0)
    {sum+=i}
    {
      mx.innerHTML=sum

    }
  }