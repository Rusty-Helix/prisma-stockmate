import React, {useEffect}from "react";
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Login from "../components/Login";
import StrategyCardGrid from "../components/StrategyCardGrid";
import { getUserStrategies } from "../app/reducers/getUserStrategies";

function MyList() {
    const { userInfo } = useAppSelector(({app})=>app);
    const { userStrategies } = useAppSelector(({strategy}) => strategy);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getUserStrategies())
    }, [userInfo, dispatch]);
    useEffect(()=>{
        console.log({userStrategies})
    }, [userStrategies])
    return (
    <div className="list">
        {userInfo ? <StrategyCardGrid strategies={userStrategies} /> : <Login />}
    </div>
    );
}

export default Wrapper(MyList);
