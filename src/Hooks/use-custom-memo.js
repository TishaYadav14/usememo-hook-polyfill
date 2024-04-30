import React, { useEffect, useRef } from "react";

const useCustomMemo = (cd, deps) => {
    //variable or state -> cached value
    const memoizedRef = useRef(null);

    const areEqual = (prevDeps, nextDeps) => {
        if(prevDeps===null) return false;
        if(prevDeps.length !== nextDeps.length) return false;

        for( let i = 0; i < prevDeps.length; i++){
            if(prevDeps[i] !== nextDeps[i]){
                return false;
            }
        }
        return true;
    };

    //changes in deps
    if(!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
        memoizedRef.current = {
            value: cd(),
            deps
        };
    }

    //cleanup logic
    useEffect(() => {
        return () => {
            memoizedRef.current = null;
        };
    }, []);

    //return memoised value (if any)
    return memoizedRef.current.value;
};

export default useCustomMemo;