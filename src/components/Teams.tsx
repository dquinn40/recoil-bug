import React from 'react';
import {Loadable, useRecoilValueLoadable} from "recoil";
import {teamsState} from "../state";
import {Team} from "../model/Team";

const Teams: React.FC<unknown> = () => {
    const maybeTeams: Loadable<Team[]> = useRecoilValueLoadable(teamsState);

    const teams = maybeTeams.state === 'hasValue' ?
        maybeTeams.getValue() :
        []

    const teamItems = teams.map(team => <li key={team.name}>
        {team.name}
    </li>)

    return <ul data-testid='teamsList'>{teamItems}</ul>;
};

export default Teams;