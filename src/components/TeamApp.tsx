import React, {useEffect} from 'react';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {appContextState, isContextLoadedState} from "../state";
import Teams from "./Teams";

const TeamApp: React.FC = () => {
    const setAppContext = useSetRecoilState(appContextState);
    const isContextLoaded = useRecoilValue(isContextLoadedState);

    useEffect(() => {
        setAppContext({
            selectedSport: 'soccer'
        })
    }, [setAppContext]);

    if(isContextLoaded) {
        return <Teams/>
    }
    return <div>Loading Application...</div>;
};

export default TeamApp;