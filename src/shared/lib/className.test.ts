import { classNames } from './className';

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });
    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered flex';
        expect(
            classNames('someClass', { hovered: true, flex: true }, [
                'class1 class2',
            ]),
        ).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, flex: false }, [
                'class1 class2',
            ]),
        ).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, flex: undefined }, [
                'class1 class2',
            ]),
        ).toBe(expected);
    });
});
