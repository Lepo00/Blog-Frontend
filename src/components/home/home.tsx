import './Home.scss';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/card/Card';

function Home() {

    const createGrid = () => {
        let grid = []
        for (let i = 1; i < 8; i++) {
            grid.push(
                <div className={`div${i}`} key={i}>
                    <Link to={"post/" + i}>
                        <Card title={'Come resettare il telefono -' + i} />
                    </Link>
                </div>
            )
        }
        return grid;
    }


    return (
        <div className="Home">
            <div className="grid-container">
                {createGrid()}
            </div>
        </div>
    )
}
export default Home;