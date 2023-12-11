import { useSelector, useDispatch } from "react-redux"
import { addList } from "../config/favoriteLists";
import { removeMovie,changeName,reset,disable } from "../config/currentListSlice";
import './NewList.css';
import { Link } from "react-router-dom";

export default function NewList1 () {
    const list = useSelector(state => state.currentList);
    const favoriteLists = useSelector(state => state.fovariteLists.lists)
    const dispatch = useDispatch();
    function inputChange(e) {
        dispatch(changeName(e.target.value));
    }
    function remove(e) {
        dispatch(removeMovie({imdbID : e.target.id}))
    }
    function save() {
        if (list.movies.length && list.name.split(" ").join("") && !(favoriteLists.find(item => { return item.name === list.name}))){
            dispatch(addList(list));
            dispatch(disable());
        }
        
    }
    function resetButton() {
        dispatch(reset());
    }
    return (
        <div className="NewList1">
            <input type="text" value={list.name} disabled = {list.disabled} onChange={inputChange}/>
            <div className="list">
            {
                list.movies.map(item => (
                    <div className="list-item" key={item.imdbID}>
                        <p>{item.Title + " (" + item.Year + ")"}</p>
                        <button onClick={remove} id={item.imdbID} disabled = {list.disabled}>Sil</button>
                    </div>
                ))
            }
            </div>
            <div className="buttons">
                <button disabled={list.disabled} onClick={save}>Yadda saxla</button>
                <button><Link to="/basket" className="link">Siyahılara keç</Link></button>
                <button onClick={resetButton}>Sıfırla</button>
            </div>
        </div>
    )
}