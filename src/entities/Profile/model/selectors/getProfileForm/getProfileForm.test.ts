import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

const form = {
    firstname: 'Батыр',
    lastname: 'Кусаинов',
    age: 18,
    city: 'Astana',
    country: Country.Kazakhstan,
    currency: Currency.USD,
};

describe('getProfileData', () => {
    test('should return form', () => {
        const state: DeepPartial<StateSchema> = { profile: { form } };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
