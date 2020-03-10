let url = 'https://docs.google.com/spreadsheets/d/14G7FymaxpdAgNrQGA0VjtZpni3n6LBznLBRQ9fuUbrc/edit#gid=0'
let id = '14G7FymaxpdAgNrQGA0VjtZpni3n6LBznLBRQ9fuUbrc'
let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`
fetch(source)
  .then(response => response.json())
  .then(data => {
    console.log('data', data)
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
  console.log('app - projects', projects)
  //rest of your app goes here 
}