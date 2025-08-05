let countriesData = [];

async function fetchData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,population,languages');
        const data = await response.json();
        countriesData = data;
        document.getElementById('subheading').textContent = `Currently we have ${data.length} countries`;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

function showPopulationChart() {
    const chartTitle = document.getElementById('chartTitle');
    const chartArea = document.getElementById('chartArea');
    chartTitle.textContent = "10 Most Populated Countries in the World";
    chartArea.innerHTML = "";

    const countryPopulations = countriesData.map(country => {
        return {
            name: country.name.common,
            population: country.population
        };
    });
    countryPopulations.sort((a, b) => b.population - a.population);
    const top10 = countryPopulations.slice(0, 10);
    const maxPop = top10[0].population;

    top10.forEach(country => {
        const container = document.createElement('div');
        container.className = 'bar-container';

        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = country.name;

        const barWrapper = document.createElement('div');
        barWrapper.style.width = '100%';
        barWrapper.style.display = 'flex';
        barWrapper.style.alignItems = 'center';
        barWrapper.style.gap = '10px';

        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = `${(country.population / maxPop) * 100}%`;
        bar.textContent = '';

        const value = document.createElement('span');
        value.textContent = country.population.toLocaleString();

        barWrapper.appendChild(bar);
        barWrapper.appendChild(value);

        container.appendChild(label);
        container.appendChild(barWrapper);
        chartArea.appendChild(container);
    });

}

function showLanguageChart() {
    const chartTitle = document.getElementById('chartTitle');
    const chartArea = document.getElementById('chartArea');
    chartTitle.textContent = "10 Most Spoken Languages in the World";
    chartArea.innerHTML = "";

    const languageCount = {};

    countriesData.forEach(country => {
        const langs = country.languages;
        if (langs) {
            Object.values(langs).forEach(lang => {
                if (languageCount[lang]) {
                    languageCount[lang]++;
                } else {
                    languageCount[lang] = 1;
                }
            });
        }
    });

    const sortedLangs = Object.entries(languageCount)
        .map(([lang, count]) => ({ lang, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

    const maxCount = sortedLangs[0].count;

    sortedLangs.forEach(item => {
        const container = document.createElement('div');
        container.className = 'bar-container';

        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = item.lang;

        const barWrapper = document.createElement('div');
        barWrapper.style.width = '100%';
        barWrapper.style.display = 'flex';
        barWrapper.style.alignItems = 'center';
        barWrapper.style.gap = '10px';

        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = `${(item.count / maxCount) * 100}%`;
        bar.textContent = '';

        const value = document.createElement('span');
        value.textContent = item.count;

        barWrapper.appendChild(bar);
        barWrapper.appendChild(value);

        container.appendChild(label);
        container.appendChild(barWrapper);
        chartArea.appendChild(container);
    });

}


document.getElementById('populationBtn').addEventListener('click', showPopulationChart);
document.getElementById('languageBtn').addEventListener('click', showLanguageChart);


fetchData();