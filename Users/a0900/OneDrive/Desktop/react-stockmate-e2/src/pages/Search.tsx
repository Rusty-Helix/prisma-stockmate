import React, {useEffect} from "react"
import Wrapper from "../sections/Wrapper";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {getInitialStrategyData} from "../app/reducers/getInitialStrategyData";

import {getAllStrategies} from "../app/reducers/getInitialStrategyData";

import {getStrategyData} from "../app/reducers/getStrategyData";
import StrategyCardGrid from "../components/StrategyCardGrid";
import {debounce} from "../utils/Debounce";

function Search() {
    const dispatch = useAppDispatch();
    // console.log(allStrategy)
    const { allStrategy, randomStrategies } = useAppSelector(
        ({strategy})=>strategy
    );
    useEffect(()=>{
        // dispatch(getAllStrategies());
        dispatch(getInitialStrategyData());
    }, [dispatch])

    useEffect(()=> {
        if(allStrategy) {
            // console.log(allStrategy)
            const clonedStrategies = [...allStrategy];
            const randomStrategiesId = clonedStrategies
            // .sort(()=>Math.random()-Math.random())
            .slice(0, 50);
            // console.log(randomStrategiesId)
            dispatch(getStrategyData(randomStrategiesId));
        }
    }, [allStrategy, dispatch])

    const handleChange = debounce((value:string)=>getStrategy(value), 300);
    
    const getStrategy = async(value:string)=>{
        if(value.length) {
            const strategies = allStrategy?.filter((strategy)=>{
                return strategy.name.includes(value.toLowerCase())
            });
            dispatch(getStrategyData(strategies!))
        } else {
            const clonedStrategies = [...(allStrategy as [])];
            const randomStrategiesId = clonedStrategies
            // .sort(()=>Math.random()-Math.random())
            .slice(0, 50);
            dispatch(getStrategyData(randomStrategiesId));            
        }
    }
    // console.log({randomStrategies})
    
    return (<div>
        <div className="search">
            <input
                type="text"
                className="strategy-searchbar"
                placeholder="搜尋策略"
                onChange={(e)=>handleChange(e.target.value)}
            />    
            <StrategyCardGrid strategies={randomStrategies!} />
        </div>
    </div>)
}

export default Wrapper(Search);