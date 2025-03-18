var searchString = location.search
var queryParams = new URLSearchParams(searchString)
var startupSites = queryParams.get('sites')
startupSites = startupSites ? atob(startupSites) : '[]'

// alert(startupSites)

if (
  (startupSites.startsWith('[') && startupSites.endsWith(']')) || 
  (startupSites.startsWith('{') && startupSites.endsWith('}'))
) {
  startupSites = JSON.parse(startupSites)
}
else startupSites = []


document.querySelector('.startupSites').innerHTML = 
  `<li>${startupSites.join('</li><li>')}</li>`