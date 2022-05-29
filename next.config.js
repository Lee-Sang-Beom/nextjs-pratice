/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,

  async redirects(){  // 얘는 URL을 변화시킴
    return [
      {
        // 사용자가 접근할만한 소스찾기
        source : "/old/:path*",
        // 소스접근시 띄워질 url
        destination : "/new/:path*",
        permanent : false,
      }
    ]
  },

  async rewrites(){ 
    // 얘는 URL을 변화시키진 않음
    // redirect와 비슷하나, 유저가 url 변화를 볼수없음 > 유저가 apikey못봄

    return [
      {
        source : "/api/movies", // 여기로 가면 우리가 얻는 res 응답정보가있음
        destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source : "/api/movies/:id",
        destination : `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
    ]
  }
}

module.exports = nextConfig
