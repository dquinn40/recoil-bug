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

        const name = screen.getByTestId('Cavaliers-name');
        expect(name.textContent).toEqual('Cavaliers');

        const currentEnvironment = screen.getByTestId('Cavaliers-currentEnvironment');
        expect(currentEnvironment).toBeDefined();
        expect(currentEnvironment.textContent).toEqual('dev');
    })
})