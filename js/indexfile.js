
// donation section hide
document.getElementById("donationBtn").addEventListener("click", function(event){
    event.preventDefault();

    const donationSection = document.getElementById("donationSection");
    const historySection = document.getElementById("historySection");

    donationSection.classList.remove("hidden");
    historySection.classList.add("hidden");

});

// history section hide
document.getElementById("historyBtn").addEventListener("click", function(event){
    event.preventDefault();

    const donationSection = document.getElementById("donationSection");
    const historySection = document.getElementById("historySection");

    donationSection.classList.add("hidden");
    historySection.classList.remove("hidden");

});

// Balance add to total donate

document.getElementById('donateNowBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const donationAmount = getValueByID("donationAmount");

    let mainBalanceElement = document.getElementById("mainBalance");
    let mainBalance = parseFloat(mainBalanceElement.innerText);


    // Updating mainBalance
    if (!isNaN(donationAmount) && parseFloat(donationAmount) < mainBalance && donationAmount !== "") {

        mainBalanceElement.innerText = (mainBalance - parseFloat(donationAmount));

        let alreadyDonateBalanceElement = document.getElementById('alreadyDonateBalance');
        let alreadyDonateBalance = parseFloat(alreadyDonateBalanceElement.innerText);
        
        alreadyDonateBalanceElement.innerText = (alreadyDonateBalance + parseFloat(donationAmount));

         my_modal_5.showModal();

         const titleText = this.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
        historyAdd(titleText, donationAmount )


    } else {

        my_modal_6.showModal();
    }
});
