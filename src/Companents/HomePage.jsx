import CardList from "./CardList";
import NewList1 from "./NewList1";
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="HomePage">
            <div className="header">
                MUSTEE
            </div>
            <div className="main">
                <CardList />
                <NewList1 />
            </div>
        </div>
    )
}