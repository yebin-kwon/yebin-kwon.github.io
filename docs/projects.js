// keep this list of project IDs updated
projid = ["2026_antibiotic_nanoparticles", "2025_govHonProg_carbon_dot_absorption", "2025_gold_nanoparticles", "2024_silver_nanoparticles", "2023_smart_irrigation", "2021_car_safety_monitor", "2020_recycle_sorter_ai"]


var scienceFairOnly = window.location.search.includes('science_fair_display');
if (scienceFairOnly == true) {
    window.history.replaceState({}, '', window.location.pathname + window.location.search.replace('science_fair_display=', '').replace('&&', '&').replace(/[?&]$/, ''));
}

for (let i = 0; i < projid.length; i++) {
    document.getElementById("projectsDiv").innerHTML += `
<div class="abhihover group flex items-center mb-4">
    <a href="projects/${projid[i]}/" title="See more details" class="abhipad flex items-center gap-4" id="projectlink${i}">
        <img style="pointer-events: none;" oncontextmenu="return false;" src="projects/${projid[i]}/overview.jpg" class="abhiimg">
        <div class="flex-1">
            <h3>
                <span id="title${i}"></span></span>&nbsp;<span class="arrow"> ↗</span>
            </h3>
            <p class="date text-base mb-2" id="subtitle${i}"></p>
            <p class="desc" id="desc${i}"></p>
        </div>
    </a>
</div>
`

    fetch(`projects/${projid[i]}/title.txt`)
        .then(response => response.text())
        .then(text => {
            $(function () {
                document.getElementById(`title${i}`).innerHTML = text;
            });
        });
    fetch(`projects/${projid[i]}/description.txt`)
        .then(response => response.text())
        .then(text => {
            $(function () {
                document.getElementById(`desc${i}`).innerHTML = text;
            });
        })
    fetch(`projects/${projid[i]}/subtitle.txt`)
        .then(response => response.text())
        .then(text => {
            $(function () {
                document.getElementById(`subtitle${i}`).innerHTML = text;
                if (scienceFairOnly == true) {
                if (!text.toLowerCase().includes('science fair')) {
                    document.getElementById(`projectlink${i}`).style.opacity = "0.15";
                }
            }
        });

})
.catch (error => {
    console.error('Error loading text file:', error);
});

}


