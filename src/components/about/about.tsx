import './About.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increment, signin, signout } from '../../store/actions';
import { RootState } from '../../store/reducers';


function About() {
    const counter = useSelector((state: RootState) => state.counter);
    const logged = useSelector((state: RootState) => state.logged);
    const dispatch = useDispatch();
    return (
        <div className="About">
            <h1>About</h1>
            <h4>Counter: {counter}</h4>
            {logged ? <h4>Logged</h4> : <h4>Not Logged in</h4>}
            <button onClick={() => dispatch(increment(5))}>Increase</button>
            {logged ?
                <button onClick={() => dispatch(signout())}>Logout</button> : <button onClick={() => dispatch(signin())}>Login</button>
            }
        </div>
    )
}
export default About;