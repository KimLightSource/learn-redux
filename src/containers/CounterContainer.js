import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase, setDiff} from "../modules/counter";
import Counter from "../components/Counter";

function CounterContainer() {

    const {number, diff} = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }));

    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));



    return (
        <Counter
            // 상태와
            number={number}
            diff={diff}
            // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;