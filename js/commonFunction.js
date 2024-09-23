
function getValueByID(id)
{
    const idValue = document.getElementById(id).value;
    return idValue;
}

// Button Toggle

document.getElementById("historyBtn").addEventListener("click", function(event){
    event.preventDefault();

    const donateBtn = document.getElementById("donationBtn");
    const historyBtn = document.getElementById("historyBtn");
    console.log("!Donation btn clicked");

    historyBtn.classList.remove('bg-white', 'text-secondary');
    historyBtn.classList.add('bg-btnBG', 'text-primary');

    donateBtn.classList.add('bg-white','border-2', 'text-secondary');
    donateBtn.classList.remove('bg-btnBG', 'text-primary');
});

document.getElementById("donationBtn").addEventListener("click", function(event){
    event.preventDefault();

    const donateBtn = document.getElementById("donationBtn");
    const historyBtn = document.getElementById("historyBtn");
    console.log("!Donation btn clicked");

    donateBtn.classList.remove('bg-white', 'text-secondary');
    donateBtn.classList.add('bg-btnBG', 'text-primary',);

    historyBtn.classList.add('bg-white','border-2', 'text-secondary');
    historyBtn.classList.remove('bg-btnBG', 'text-primary');
});


// History Update
function historyAdd(titleText, donationAmount)
{
    const historyList = document.getElementById("historyList");

    const div = document.createElement("div");

    div.innerHTML = 
    `
    <div class="border-2 rounded-lg bg-white p-4 flex flex-col gap-2">
              <h1 class="text-primary font-bold text-xl">${donationAmount} Taka is ${titleText} </h1>
              <p class="text-base text-secondary">Date: ${new Date()}</p>
            </div>
    `;

    historyList.append(div);

}



