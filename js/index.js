const donateNow = document.getElementById("donate-now");
donateNow.addEventListener("click",function(){
    const noakhaliInput = parseFloat(document.getElementById("noakhali-input").value);
    const accountBalance = parseFloat(document.getElementById("balance").innerText);
    console.log(accountBalance);
    if( noakhaliInput <= 0 || noakhaliInput > accountBalance || isNaN(noakhaliInput)  ){
        alert("Invalid Donation Amount");
    }
    else{
        const remainBalance = accountBalance - noakhaliInput;
        document.getElementById("balance").innerText = remainBalance;
        const noakhaliFund = parseFloat(document.getElementById("noakhali-fund").innerText);
        const fundTotal = noakhaliInput + noakhaliFund ;
       document.getElementById("noakhali-fund").innerText = fundTotal;
    }
   
   
})