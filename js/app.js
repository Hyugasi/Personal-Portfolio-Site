let url = 'https://docs.google.com/spreadsheets/d/14G7FymaxpdAgNrQGA0VjtZpni3n6LBznLBRQ9fuUbrc/edit#gid=0'
let id = '14G7FymaxpdAgNrQGA0VjtZpni3n6LBznLBRQ9fuUbrc'
let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`
fetch(source)
  .then(response => response.json())
  .then(data => {
    let projects = data.feed.entry.map(project => {
      return {
        title: project.gsx$title.$t,
        image: project.gsx$image.$t,
        description: project.gsx$description.$t,
        url: project.gsx$url.$t
      }
    })
    app(projects)
})
  .catch ( err => console.log('err', err))
function app(projects) {
  for (let i = 0; i < projects.length; i++) {
    let $card = `<div class="card">
    <a href="${projects[i].url}" target="_blank">  
      <img src="${projects[i].image}"></img>
    </a>    
        <div>
            <h4>${projects[i].title}</h4>
            <p>${projects[i].description}</p>
        </div>
    </div>`
    $('#projects').append($card)
}
}
function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}
//inspiration for hamburger menu came from: 
// https://github.com/abarna-codespot/Hamburger-Menu


// $(document).ready(onClickMenu(),{
//     $('#menu').classList.toggle('change')
//     $('#nav').classList.toggle('change')
//     $('#menu-bg').classList.toggle('change-bg')
// })