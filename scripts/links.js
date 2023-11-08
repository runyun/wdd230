const baseURL = "https://runyun.github.io/wdd230";
const linksURL = "https://runyun.github.io/wdd230/data/links.json";

async function getData(url){
    let response = await fetch(url);

    if(response.ok){
        let data = await response.json();
        console.table(data);
    }
}

getData(linksURL);