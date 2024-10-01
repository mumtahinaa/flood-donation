const modal = document.getElementById("my_modal_show");
const my_modal =  document.getElementById("my_modal");
const modal_3 = document.getElementById("modal-3");
const title = document.getElementById("flood-at").innerText;
const title2 = document.getElementById("feni-at").innerText;
const title3 = document.getElementById("card3-title").innerHTML;

document.getElementById("donate-now").addEventListener("click", function () {
  const noakhaliInput = getInputField("noakhali-input");
  const accountBalance = getTextValue("balance");

  if (noakhaliInput <= 0 || isNaN(noakhaliInput)) {
    alert("Invalid Donation Amount");
   return;
  }

  if (noakhaliInput > accountBalance) {
    alert("Invalid Donation Amount");
    return; 

  }
  const remainBalance = accountBalance - noakhaliInput;
  document.getElementById("balance").innerText = remainBalance;
  const noakhaliBalance = getTextValue("noakhali-fund");
  const noakhaliTotal = noakhaliBalance + noakhaliInput;
  document.getElementById("noakhali-fund").innerText = noakhaliTotal; 

  document.getElementById("noakhali-input").value = "";
  modal.showModal();
 
  const div = document.createElement("div");
  div.innerHTML = `<p class="lg:font-bold font-medium lg:text-lg text-base">${noakhaliInput} Taka is Donated for ${title} </p>
   <p class= "text-sm font-normal text-gray-500">Date: ${date.toString()}</p>`;
  div.classList.add(
    "card",
    "bg-base-100",
    "border-gray-100",
    "border-2",
    "p-6",
    "my-4",
    "gap-3"
  );
  document.getElementById("history-data").appendChild(div);
});


document
  .getElementById("feni-donate")
  .addEventListener("click", function (event) {
    const feniInput = getInputField("feni-input");
    const accountBalance = getTextValue("balance");
    if (feniInput <= 0 || feniInput > accountBalance || isNaN(feniInput)) {
      alert("Invalid Donation Amount");
      return;
    } 

      const remainBalance = accountBalance - feniInput;
      document.getElementById("balance").innerText = remainBalance;
      const feniBalance = getTextValue("feni-balance");
      const feniTotal = feniBalance + feniInput;
      document.getElementById("feni-balance").innerText = feniTotal;
      document.getElementById("feni-input").value = "";
      my_modal.showModal();
      const div = document.createElement("div");
      div.innerHTML = `<p class="lg:font-bold font-medium lg:text-lg text-base">${feniInput} Taka is Donated for ${title2} </p>
             <p class= "text-sm font-normal text-gray-500">Date: ${date.toString()}</p>`;
      div.classList.add(
        "card",
        "bg-base-100",
        "border-gray-100",
        "border-2",
        "p-6",
        "my-4",
        "gap-3"
      );
      document.getElementById("history-data").appendChild(div);
    
  });

document
  .getElementById("qoata-donate")
  .addEventListener("click", function (event) {
    const qoataInput = getInputField("qoata-input");
    const accountBalance = getTextValue("balance");
    if (qoataInput <= 0 || qoataInput > accountBalance || isNaN(qoataInput)) {
      alert("Invalid Donation Amount");
      return;
    } 
      const remainBalance = accountBalance - qoataInput;
      document.getElementById("balance").innerText = remainBalance;
      const qoataBalance = getTextValue("qoata-balance");
      const qoataTotal = qoataBalance + qoataInput;
      document.getElementById("qoata-balance").innerText = qoataTotal;

      document.getElementById("qoata-input").value = "";
      modal_3.showModal();
      const div = document.createElement("div");
      div.innerHTML = `<p class="lg:font-bold font-medium lg:text-lg text-base">${qoataInput} Taka is Donated for ${title3} </p>
             <p class= "text-sm font-normal text-gray-500">Date: ${date.toString()}</p>`;
      div.classList.add(
        "card",
        "bg-base-100",
        "border-gray-100",
        "border-2",
        "p-6",
        "my-4",
        "gap-3"
      );
      document.getElementById("history-data").appendChild(div);
    
  });
