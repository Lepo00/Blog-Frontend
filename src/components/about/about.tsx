import './About.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../store/actions';
import { RootState } from '../../store/reducers';

function About(props:any) {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counterReducers);

    return (
        <div className="About">
            <h1>About</h1>
            <h4>Counter: {counter}</h4>
            <button onClick={() => dispatch(increment(5))}>Increase</button>
        </div>
    )
}

export default About;