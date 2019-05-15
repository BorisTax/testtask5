const youtubeApiKey='AIzaSyCeN6-1U7hMSmsekiTKfsv7Z96sWaHDpkg'
const pixabayApiKey='12479166-7aaf696fd2e08bf3949e78a1b'
const youtubeApiUri='https://www.googleapis.com/youtube/v3/'
const options={
    devUri:'',
    youtubeGetVideosUri:`${youtubeApiUri}videos?part=snippet&regionCode=ru&key=${youtubeApiKey}&maxResults=10&chart=mostPopular`,
    youtubeGetVideoInfoUri:`${youtubeApiUri}videos?part=statistics&key=${youtubeApiKey}`,
    pixabayUri:`https://pixabay.com/api?key=${pixabayApiKey}&lang=ua&per_page=100`
  }

export default options;