import './CardList.css';
import Card from './Card';
import { useEffect, useState } from 'react';

export default function CardList() {
    // const [searchKey, setSearchKey] = useState("marvel");
    const [searchKey, setSearchKey] = useState("");
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${searchKey.split(" ").join("%20")}&apikey=654c22f`)
            .then(res => res.json())
            .then(data => {
                if (!data.Error) {
                    setList(data.Search);
                }
            })
    }, [searchKey])
    function search() {
        setSearchKey(document.querySelector(".CardList input").value);
    }

    return (
        <div className='CardList'>
            <div className='search'>
                <input type="text" />
                <button onClick={search}>Axtar</button>
            </div>
            {
                list.map((item, ind) => (
                    <Card key={ind} movie={item} />
                ))
            }
        </div>
    )
}