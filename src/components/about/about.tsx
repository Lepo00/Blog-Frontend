import './About.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increment, myArticles } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { useEffect } from 'react';

function About(props:any) {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counterReducers);

    useEffect(() => {dispatch(myArticles())}, [dispatch]);
    
    return (
        <div className="About">
            <h1>About</h1>
            <h4>Counter: {counter}</h4>
            <button onClick={() => dispatch(increment(5))}>Increase</button>
        </div>
    )
}

export default About;