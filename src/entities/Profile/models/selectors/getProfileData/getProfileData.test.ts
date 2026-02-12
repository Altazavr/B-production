import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

const data = {
    firstname: 'Батыр',
    lastname: 'Кусаинов',
    age: 18,
    city: 'Astana',
    country: Country.Kazakhstan,
    currency: Currency.USD,
};

describe('getProfileData', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = { profile: { data } };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
