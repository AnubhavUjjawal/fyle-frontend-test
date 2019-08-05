export async function loadBanks() {
    // check if data present in local storage. Data is persisted indefinitely.
    if (localStorage.bank_data && localStorage.bank_data.constructor == String) {
        try {
            let bank_data = JSON.parse(localStorage.bank_data);
            return bank_data;
        }
        catch(err) {
            // catching JSON.parse error
            // console.log(err);
        }
    }
    let banks_url = "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI";
    let res = await fetch(banks_url);
    let bank_data =  await res.json();

    // storing locally on client side
    localStorage.bank_data = JSON.stringify(bank_data);
    return bank_data;
}

export async function getFavoriteBanks() {
    if (localStorage.favorite_bank_data && localStorage.favorite_bank_data.constructor == String) {
        try {
            let bank_data = JSON.parse(localStorage.favorite_bank_data);
            return bank_data;
        }
        catch(err) {
            // catching JSON.parse error
            // console.log(err);
        }
    }

    return {};
}

export async function getBanks() {
    let banks = await loadBanks();
    let favoriteBanks = await getFavoriteBanks();
    for(let i=0; i<banks.length; i++) {
        try {
            if(favoriteBanks[banks[i].ifsc] == true){
                banks[i].favorite = true;
            }
            else banks[i].favorite = false;
        }
        catch(err) {
            banks[i].favorite = false;
        }
    }
    return banks;
}

export function toggleFavorites(ifsc, val) {

    try {
        let bank_data = JSON.parse(localStorage.favorite_bank_data);
        bank_data[ifsc] = val;
        localStorage.favorite_bank_data = JSON.stringify(bank_data);
    }
    catch(err) {
        // catching JSON.parse error
        // console.log(err);
        let bank_data = {};
        bank_data[ifsc] = val;
        localStorage.favorite_bank_data = JSON.stringify(bank_data);
    }


}
