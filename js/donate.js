
document.getElementById('btn-history').addEventListener('click', function () {
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('hidden');
    
    const d = document.getElementById('btn-donation').classList.remove('bg-primary');
    
    const h = document.getElementById('btn-history').classList.add('bg-primary');
   

})

document.getElementById('btn-donation').addEventListener('click', function () {
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById('btn-history').classList.remove('bg-primary');
    document.getElementById('btn-donation').classList.add('bg-primary');

})

document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const amountToAddNoakhali = getInputValue('amount-noakhali');
        const totalAmountForNoakhali = getInputText('donate-amount-noakhali');
        const navbarAmount = getInputText('nav-amount');

        if (isNaN(amountToAddNoakhali) == true || amountToAddNoakhali < 0 ||    amountToAddNoakhali > navbarAmount) {
            alert('Invalid donate amount');
            return;
        }
        else {
            const totalAmount = totalAmountForNoakhali + amountToAddNoakhali;

            document.getElementById('donate-amount-noakhali').innerText = totalAmount;

            const totalNavAmount = navbarAmount - amountToAddNoakhali;
            document.getElementById('nav-amount').innerText = totalNavAmount;

            const currentTime = new Date();

            const p = document.createElement('p');
            p.innerText = `${amountToAddNoakhali} Taka is Donated for Donate for Flood at Noakhali, Bangladesh.`;

            const time = document.createElement('p');
            time.innerText = `Date: ${currentTime}`;

            const p1 = document.getElementById('history').appendChild(p);
            p1.classList.add('font-bold');
            p1.classList.add('pb-4');
            p1.classList.add('pl-4');

            const p2 = document.getElementById('history').appendChild(time);
            p2.classList.add('text-gray-400');
            p2.classList.add('pl-4');
            p2.classList.add('pb-4');

            document.getElementById("my_modal_1").showModal();

        }
    });



document.getElementById('btn-donate-feni')
    .addEventListener('click', function (event) {

        event.preventDefault();

        const amountToAddFeni = getInputValue('amount-feni');
        const totalAmountForFeni = getInputText('donate-amount-feni');
        const navbarAmount = getInputText('nav-amount');

        if (isNaN(amountToAddFeni) == true || amountToAddFeni < 0 ||    amountToAddFeni > navbarAmount) {
            alert('Invalid donate amount');
            return;
        }
        else{
            const totalAmountFeni = totalAmountForFeni + amountToAddFeni;
        console.log(totalAmountFeni);

        document.getElementById('donate-amount-feni').innerText = totalAmountFeni;

        const totalNavAmount = navbarAmount - amountToAddFeni;
        document.getElementById('nav-amount').innerText = totalNavAmount;

        const currentTime = new Date();
        console.log(currentTime);

        const p = document.createElement('p');
        p.innerText = `${amountToAddFeni} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh.`;

        const time = document.createElement('p');
        time.innerText = `Date: ${currentTime}`


        const p1 = document.getElementById('history').appendChild(p);
        p1.classList.add('font-bold');
        p1.classList.add('pb-4');
        p1.classList.add('pl-4');

        const p2 = document.getElementById('history').appendChild(time);
        p2.classList.add('text-gray-400');
        p2.classList.add('pl-4');
        p2.classList.add('pb-4');

        document.getElementById("my_modal_1").showModal();
        }

    });

document.getElementById('btn-donate-quota')
    .addEventListener('click', function (event) {

        event.preventDefault();

        const amountToAddQuota = getInputValue('amount-quota');
        const totalAmountForQuota = getInputText('donate-amount-quota');
        const navbarAmount = getInputText('nav-amount');

        if (isNaN(amountToAddQuota) == true || amountToAddQuota < 0 ||    amountToAddQuota > navbarAmount) {
            alert('Invalid donate amount');
            return;
        }
        else{
            const totalAmountQuota = totalAmountForQuota + amountToAddQuota;
        console.log(totalAmountQuota);

        document.getElementById('donate-amount-quota').innerText = totalAmountQuota;

        const totalNavAmount = navbarAmount - amountToAddQuota;
        document.getElementById('nav-amount').innerText = totalNavAmount;

        const currentTime = new Date();
        console.log(currentTime);

        const p = document.createElement('p');
        p.innerText = `${amountToAddQuota} Taka is Donated for Aid for Injured in the Quota Movement.`;

        const time = document.createElement('p');
        time.innerText = `Date: ${currentTime}`


        const p1 = document.getElementById('history').appendChild(p);
        p1.classList.add('font-bold');
        p1.classList.add('pb-4');
        p1.classList.add('pl-4');

        const p2 = document.getElementById('history').appendChild(time);
        p2.classList.add('text-gray-400');
        p2.classList.add('pl-4');
        p2.classList.add('pb-4');

        document.getElementById("my_modal_1").showModal();
        }

    });

document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = '/blog.html';
});
