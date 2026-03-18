fetch('title.txt')
.then(response => response.text())
.then(text => {
    $(function(){
        document.getElementById("title").innerHTML = text;
      });
})
.catch(error => {
    console.error('Error loading text file:', error);
});
const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  };
const date2 = window.location.pathname.split('/');

document.getElementById("date").innerHTML = (formatDate((date2[date2.length -2]+'T11:59:00Z')));
