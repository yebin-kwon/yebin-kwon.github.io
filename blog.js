
// keep this list of blog date IDs updated, in order the entries should be displayed
projid = ['2025-06-11','2024-08-05']


for (let i = 0; i < projid.length; i++) {
document.getElementById("projectsDiv").innerHTML += `
<div class="abhihover group flex items-center mb-4">
    <a href="blog/${projid[i]}/" title="See more details" class="abhipad flex items-center gap-4 w-full" id="projectlink${i}">
        <img style="pointer-events: none;" oncontextmenu="return false;" src="blog/${projid[i]}/overview.jpg" class="abhiimg">
        <div class="flex-1">
            <h3>
                <span id="title${i}"></span></span>&nbsp;<span class="arrow"> ↗</span>
            </h3>
            <p class="date text-base mb-2" id="subtitle${i}"></p>
            <p class="desc" id="desc${i}"></p>
        </div>
    </a>
</div>
`;


const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  };
document.getElementById("subtitle"+i).innerHTML = (formatDate((projid[i]+'T11:59:00Z')));


fetch('blog/'+projid[i]+'/title.txt')
.then(response => response.text())
.then(text => {
    $(function(){
        document.getElementById("title"+i).innerHTML = text;
      });
});
fetch('blog/'+projid[i]+'/description.txt')
.then(response => response.text())
.then(text => {
    $(function(){
        document.getElementById("desc"+i).innerHTML = text;
      });
})
.catch(error => {
    console.error('Error loading text file:', error);
});
}