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
