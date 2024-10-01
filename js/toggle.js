// document.getElementById("donation").addEventListener("click", function () {
//   getToggledButton("donation-card");
// });
// document.getElementById("history").addEventListener("click", function () {
//   getToggledButton("history-data");
// });

const donationTab = document.getElementById("donation");
const historyTab = document.getElementById("historyTb");

historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-primary", "hover:bg-primary");
  historyTab.classList.remove("text-gray-500", "border-gray-300", "bg-white");
  donationTab.classList.remove("bg-primary", "hover:bg-primary");
  donationTab.classList.add("text-gray-500", "border-gray-300", "bg-white");

  // document.getElementById("history-data").classList.remove("hidden");
  // document.getElementById("donation-card").classList.add("hidden");
  getToggledButton("history-data");
});

donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-primary", "hover:bg-primary");
  donationTab.classList.remove("text-gray-500", "border-gray-300", "bg-white");
  historyTab.classList.remove("bg-primary", "hover:bg-primary");
  historyTab.classList.add("text-gray-500", "border-gray-300", "bg-white");
  getToggledButton("donation-card");
});
