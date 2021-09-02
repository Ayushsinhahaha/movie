
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=568c2f81c9c0d6b597e20da85b48892c&page=1";
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=&query="'

const form=document.getElementById('form')
const search=document.getElementById('search')

//Get initial movies
getMovies(API_URL)

function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data.results)
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const searchTerm=search.value

    if(searchTerm && searchTerm!==''){
        getMovies(SEARCH_API + searchTerm)

        search.value='' 
    }else{
        window.location.reload()
    }
})
