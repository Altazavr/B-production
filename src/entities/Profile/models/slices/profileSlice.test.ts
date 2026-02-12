import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/ProfileSchema';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';

const data = {
    firstname: 'Батыр',
    lastname: 'Кусаинов',
    age: 18,
    city: 'Astana',
    country: Country.Kazakhstan,
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: 'ulbi' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: 'batr' }),
        )).toEqual({ form: { username: 'batr' } });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            validateErrors: [ValidateProfileError.SERVER_ERROR],
            isLoading: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({ validateErrors: undefined, isLoading: true });
    });
    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({ isLoading: false, data, form: data, readonly: true, validateErrors: undefined });
    });
});
