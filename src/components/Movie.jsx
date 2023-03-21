import React from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({title, poster_path, vote_average}){
    return (
        //Movie 함수 호출 -> return 을 돌려줌.
        //하나의 div태그. 
        <div className="movie-container">
          <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
          <div className="movie-info">
            <h4>{title}</h4>
            <span>{vote_average}</span>
          </div>           
          
        </div>
    );

}
