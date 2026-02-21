import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/ProfileSchema';

const data = {
    firstname: 'Батыр',
    lastname: 'Кусаинов',
    age: 18,
    city: 'Astana',
    country: Country.Kazakhstan,
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success validation', () => {
        const error = validateProfileData(data);
        expect(error).toEqual([]);
    });

    test('error incorrect data', () => {
        const error = validateProfileData({ ...data, firstname: '', lastname: '' });
        expect(error).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
