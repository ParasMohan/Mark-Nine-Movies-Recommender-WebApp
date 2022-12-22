import { useState } from "react";
import "./styles.css";
var movieDatabase = {
  SciFi: [
    {
      name: "1. Inception (2010)",
      about: "A thief who steals corporate secrets through the use of dream"
    },
    {
      name: "2. The Matrix (1999)",
      about:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth"
    },

    {
      name: "3. Star Wars: Episode V",
      about:
        "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda."
    },
    {
      name: "4. Interstellar (2014)",
      about:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    }
  ],

  Thriller: [
    {
      name: "1. The Dark Knight (2008)",
      about:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      name: "2. Se7en (1995)",
      about:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
    },
    {
      name: "3. The Silence of the Lambs (1991)",
      about:
        "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
    },
    {
      name: "4. Parasite (2019)",
      about:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    }
  ],

  comedy: [
    {
      name: "1. Life Is Beautiful (1997)",
      about:
        "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp."
    },
    {
      name: "2. The Intouchables (2011)",
      about:
        "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver."
    },
    {
      name: "3. Back to the Future (1985)",
      about:
        "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown."
    },
    {
      name: "4. Modern Times (1936) ",
      about:
        "The Tramp struggles to live in modern industrial society with the help of a young homeless woman."
    }
  ]
};
var movietypes = Object.keys(movieDatabase);

export default function App() {
  var [movieType, setMovieType] = useState("Thriller");

  function onClickHandler(movieType) {
    setMovieType(movieType);
  }
  return (
    <div className="App">
      <h1>
        <strong>Best Movies Recommender</strong>
      </h1>
      <div>
        Check out the best movies in different categories. Select A Movie
        Category.
      </div>
      {movietypes.map(function (movieType) {
        return (
          <button
            style={{
              padding: "1% 1%",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "inline-block",
              border: "none",
              margin: "8px",
              backgroundColor: "#e5e7eb",
              borderRadius: "10px"
            }}
            onClick={() => onClickHandler(movieType)}
          >
            {movieType}
          </button>
        );
      })}
      <hr></hr>
      <div style={{ textAlign: "center", width: "50%" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {movieDatabase[movieType].map((nameOfMovie) => (
            <li
              key={nameOfMovie.name}
              style={{
                listStyle: "none",
                border: "1px #f3f3f3 solid",
                padding: "1rem",
                width: "100%",
                borderRadius: "2rem",
                backgroundColor: "#a5f3fc",
                margin: "1rem 40%"
              }}
            >
              <div>{nameOfMovie.name}</div>
              <hr></hr>
              <div style={{ fontSize: "0.8rem" }}>
                about : {nameOfMovie.about}
                <hr></hr>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
