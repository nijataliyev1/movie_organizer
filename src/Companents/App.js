import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import Basket from "./Basket";
import HomePage from "./HomePage"

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="movie_organizer/movie_organizer" element={<HomePage />}/>
                <Route path="movie_organizer/basket" element={<Basket />}/>
                <Route path="movie_organizer/details" element={<Details />}/>
            </Routes>

            
            
        </div>
    )
}