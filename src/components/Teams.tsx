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
        <span data-testid={`${team.name}-name`}>{team.name}</span> -
        <span data-testid={`${team.name}-sport`}>{team.sport}</span> -
        <span data-testid={`${team.name}-founded`}>{team.founded}</span> -
        <span data-testid={`${team.name}-currentEnvironment`}>{team.currentEnvironment}</span> -
    </li>)
    return <ul>{teamItems}</ul>;
};

export default Teams;