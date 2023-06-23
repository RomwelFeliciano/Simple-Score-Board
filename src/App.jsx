import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
   const [homeScore, setHome] = useState(0);
   const [awayScore, setAway] = useState(0);
   return (
      <div className="row container mx-auto">
         <div className="col-5 container text-center bg-dark text-white rounded-3 mt-5 px-2">
            <h1 className="pt-3">Seirin</h1>
            <h2>Score: {homeScore}</h2>
            <br />
            <div className="row d-flex justify-content-center gap-5 bg-light mb-0 pt-2">
               <button
                  className="col-3 btn btn-primary fw-bold"
                  onClick={() => setHome(homeScore + 1)}
               >
                  1 Point
               </button>
               <button
                  className="col-3 btn btn-primary fw-bold"
                  onClick={() => setHome(homeScore + 2)}
               >
                  2 Points
               </button>
               <button
                  className="col-3 btn btn-primary fw-bold"
                  onClick={() => setHome(homeScore + 3)}
               >
                  3 Points
               </button>
            </div>
         </div>
         <div className="col-1 text-center mt-5 pt-5 fs-1 fw-bolder">VS</div>
         <div className="col-5 container text-center bg-success text-white rounded-3 mt-5 px-2">
            <h1 className="pt-3">Shutoku</h1>
            <h2>Score: {awayScore}</h2>
            <br />
            <div className="row d-flex justify-content-center gap-5 bg-light mb-0 pt-2">
               <button
                  className="col-3 btn btn-danger fw-bold"
                  onClick={() => setAway(awayScore + 1)}
               >
                  1 Point
               </button>
               <button
                  className="col-3 btn btn-danger fw-bold"
                  onClick={() => setAway(awayScore + 2)}
               >
                  2 Points
               </button>
               <button
                  className="col-3 btn btn-danger fw-bold"
                  onClick={() => setAway(awayScore + 3)}
               >
                  3 Points
               </button>
            </div>
         </div>
      </div>
   );
};

export default App;
