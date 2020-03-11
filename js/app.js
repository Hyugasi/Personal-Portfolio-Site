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
  console.log('app - projects', projects)
//   for(let i = 0; i = projects.length; i++){
//     const $div = $('<div>').attr('class', 'ItemContainer')
//     const $a = $('<a>')
//     const $div2 = $('<div>')
//     const $img = $('<img>')
//     const $h4 = $('<h4>')
//     const $p = $('<p>')

//     $div.append($a)
//     $a.append($div2)
//     $div2.append($img, $h4, $p)
//     console.log($div)
//   }
}

//   for(let i = 0; i = projects.length; i++){
//     const $div = $('<div>').attr('class', 'ItemContainer')
//     const $a = $('<a>')
//     const $div2 = $('<div>')
//     const $img = $('<img>')
//     const $h4 = $('<h4>')
//     const $p = $('<p>')

//     $div.append($a)
//     $a.append($div2)
//     $div2.append($img, $h4, $p)
//     console.log($div)
//   }