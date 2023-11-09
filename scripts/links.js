const linksURL = "https://runyun.github.io/wdd230/data/links.json";

async function getData(url){
    let response = await fetch(url);

    if(response.ok){
        let data = await response.json();
        displayLinks(data.lessons);
    }
}

function displayLinks(weeks){
    const activities = document.querySelector('#activities');

    weeks.forEach(week => {
        let activitiesOfWeek = document.createElement('div');
        activitiesOfWeek.className = 'activity';
        activitiesOfWeek.textContent = `${week.lesson}. `;

        week.links.forEach((activity, index) => {
            let link = document.createElement('a');
            link.href = activity.url;
            link.textContent = activity.title;

            activitiesOfWeek.appendChild(link);

            if(index != week.links.length - 1) {
                let seperator = document.createElement('span');
                seperator.textContent = ' . ';
                activitiesOfWeek.appendChild(seperator);
            }
        })

        activities.appendChild(activitiesOfWeek);
    });
}

getData(linksURL);