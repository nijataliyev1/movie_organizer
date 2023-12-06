import './CardList.css';
import Card from './Card';
import { useEffect, useState } from 'react';

export default function CardList() {
    const [searchKey, setSearchKey] = useState("");
    const [list, setList] = useState([{
        Title: 'Home Alone',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        imdbID: 'tt0099785',
        Year: '1990'
      },
      {
        Title: 'Fast and Furious Crossroads',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZjc4NjBmMDMtNmQ4MS00MGRhLWI2YTgtYTEwNjZiZGMyNDViXkEyXkFqcGdeQXVyNzQzNDM3NTI@._V1_SX300.jpg',
        imdbID: 'tt11468188',
        Year: '2020'
      },
      {
        Title: 'Captain Marvel',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg',
        imdbID: 'tt4154664',
        Year: '2019'
      },
      
      {
        Title: 'Titanic',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        imdbID: 'tt0120338',
        Year: '1997'
      },
      {
        Title: 'Venom',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNTFkZjdjN2QtOGE5MS00ZTgzLTgxZjAtYzkyZWQ5MjEzYmZjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg',
        imdbID: 'tt1270797',
        Year: '2018'
      }]);
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