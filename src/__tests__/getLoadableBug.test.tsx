import {render, screen} from "@testing-library/react";
import { RecoilRoot } from 'recoil';
import TeamApp from "../components/TeamApp";

describe('getLoadable', () => {
    it('returns current state', () => {
        render(
            <RecoilRoot>
                <TeamApp/>
            </RecoilRoot>
        );

        const soccerTeamListItem = screen.queryByText('Manchester United');
        expect(soccerTeamListItem).toBeDefined()

        const cavaliersItem = screen.queryByText('Cavaliers');
        expect(cavaliersItem).not.toBeDefined()
    })
})