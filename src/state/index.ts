import {atom, selector} from "recoil";
import {AppContext} from "../model/AppContex";
import {Team} from "../model/Team";

export const appContextState = atom<AppContext | undefined>({
    key: 'applicationParams',
    default: undefined
});

export const teamsState = atom<Team[]> ({
    key: 'teams',
    default: [],
    effects: [({setSelf, getLoadable}) => {
        const appContext = getLoadable(appContextState).getValue();
        setSelf([
            {name: 'Cavaliers', sport: 'basketball', founded: 1960, currentEnvironment: appContext?.environment}
        ])
    }]
})

export const isContextLoadedState = selector({
    key: 'contextLoaded',
    get: ({ get }) => {
        const context = get(appContextState);
        return typeof context !== 'undefined';
    },
});