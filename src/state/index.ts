import {atom, selector} from "recoil";
import {AppContext} from "../model/AppContex";
import {Team} from "../model/Team";

const allTeams: Team[] = [
    {name: 'Cavaliers', sport: 'basketball', founded: 1960},
    {name: 'Manchester United', sport: 'soccer', founded: 1900}
]

export const appContextState = atom<AppContext | undefined>({
    key: 'applicationParams',
    default: undefined
});

export const teamsState = atom<Team[]> ({
    key: 'teams',
    default: [],
    effects: [({setSelf, getLoadable}) => {
        const appContext = getLoadable(appContextState).getValue();
        
        const teams = typeof appContext !== 'undefined' ?
            allTeams.filter(team => team.sport === appContext.selectedSport) :
        allTeams;

        setSelf(teams)
    }]
})

export const isContextLoadedState = selector({
    key: 'contextLoaded',
    get: ({ get }) => {
        const context = get(appContextState);
        return typeof context !== 'undefined';
    },
});