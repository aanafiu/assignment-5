console.log("i am index");

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

document.getElementById('donateNowBtn1').addEventListener('click', function(event) {
    event.preventDefault();

    const donationAmount = getValueByID("donationAmount1");

    let mainBalanceElement = document.getElementById("mainBalance");
    let mainBalance = parseFloat(mainBalanceElement.innerText);


    // Updating mainBalance
    if (!isNaN(donationAmount) && parseFloat(donationAmount) < mainBalance && donationAmount !== "" && parseFloat(donationAmount) > 0) {

        mainBalanceElement.innerText = (mainBalance - parseFloat(donationAmount));

        let alreadyDonateBalanceElement = document.getElementById('alreadyDonateBalance1');
        let alreadyDonateBalance = parseFloat(alreadyDonateBalanceElement.innerText);
        
        alreadyDonateBalanceElement.innerText = (alreadyDonateBalance + parseFloat(donationAmount));

         my_modal_5.showModal();

         const titleText = this.previousElementSibling.previousElementSibling.previousElementSibling.innerText;

         
        historyAdd(titleText, donationAmount )


    } else {

        my_modal_6.showModal();
    }

    document.getElementById("donationAmount1").value = '';
});


// Balance add to total donate btn2

document.getElementById('donateNowBtn2').addEventListener('click', function(event) {
    event.preventDefault();

    const donationAmount = getValueByID("donationAmount2");

    let mainBalanceElement = document.getElementById("mainBalance");
    let mainBalance = parseFloat(mainBalanceElement.innerText);


    // Updating mainBalance btn 2
    if (!isNaN(donationAmount) && parseFloat(donationAmount) < mainBalance && donationAmount !== "" && parseFloat(donationAmount) > 0) {

        mainBalanceElement.innerText = (mainBalance - parseFloat(donationAmount));

        let alreadyDonateBalanceElement = document.getElementById('alreadyDonateBalance2');
        let alreadyDonateBalance = parseFloat(alreadyDonateBalanceElement.innerText);
        
        alreadyDonateBalanceElement.innerText = (alreadyDonateBalance + parseFloat(donationAmount));

         my_modal_5.showModal();

         const titleText = this.previousElementSibling.previousElementSibling.previousElementSibling.innerText;


        historyAdd(titleText, donationAmount )


    } else {

        my_modal_6.showModal();
    }

    document.getElementById("donationAmount2").value = '';
});



// Balance add to total donate btn 3

document.getElementById('donateNowBtn3').addEventListener('click', function(event) {
    event.preventDefault();

    const donationAmount = getValueByID("donationAmount3");

    let mainBalanceElement = document.getElementById("mainBalance");
    let mainBalance = parseFloat(mainBalanceElement.innerText);


    // Updating mainBalance btn 3
    if (!isNaN(donationAmount) && parseFloat(donationAmount) < mainBalance && donationAmount !== "" && parseFloat(donationAmount) > 0) {

        mainBalanceElement.innerText = (mainBalance - parseFloat(donationAmount));

        let alreadyDonateBalanceElement = document.getElementById('alreadyDonateBalance3');
        let alreadyDonateBalance = parseFloat(alreadyDonateBalanceElement.innerText);
        
        alreadyDonateBalanceElement.innerText = (alreadyDonateBalance + parseFloat(donationAmount));

         my_modal_5.showModal();

         const titleText = this.previousElementSibling.previousElementSibling.previousElementSibling.innerText;


        historyAdd(titleText, donationAmount )


    } else {

        my_modal_6.showModal();
    }

    document.getElementById("donationAmount3").value = '';
});
