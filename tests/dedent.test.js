import dedent from '../src/index.js';

describe('dedent', () => {
    it('should remove the indentation from the text', () => {
        const text = dedent`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent dictum, mi et facilisis pharetra,
            libero est lacinia risus,
            sit amet tempus dolor ante eget tortor.
        `;

        expect(text).toBe(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
            'Praesent dictum, mi et facilisis pharetra,\n' +
            'libero est lacinia risus,\n' +
            'sit amet tempus dolor ante eget tortor.'
        );
    });

    it('should keep explicit line breaks', () => {
        const text = dedent`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n
            Praesent dictum, mi et facilisis pharetra
        `;

        expect(text).toBe(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
            '\n' +
            'Praesent dictum, mi et facilisis pharetra'
        );
    });

    it('should remove tabs', () => {
        const text = dedent`\ttest\n\ttest2`;

        expect(text).toBe('test\ntest2');
    });

    it('should keep indentation of nested lines', () => {
        const text = dedent`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent dictum, mi et facilisis pharetra,
                test
                    test 2
                      test 3
            libero est lacinia risus,
            sit amet tempus dolor ante eget tortor.
        `;

        expect(text).toEqual(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
            'Praesent dictum, mi et facilisis pharetra,\n' +
            '    test\n' +
            '        test 2\n' +
            '          test 3\n' +
            'libero est lacinia risus,\n' +
            'sit amet tempus dolor ante eget tortor.'
        );
    });

    it('should join the lines with the specified character', () => {
        const text = dedent('===', `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent dictum, mi et facilisis pharetra,
            libero est lacinia risus,
            sit amet tempus dolor ante eget tortor.
        `);

        expect(text).toBe(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.===' +
            'Praesent dictum, mi et facilisis pharetra,===' +
            'libero est lacinia risus,===' +
            'sit amet tempus dolor ante eget tortor.'
        );
    });

    it('should work with interpolation', () => {
        const text = dedent`
            Lorem ipsum dolor sit amet, ${ 1 } adipiscing elit.
            ${ 'abc' }
                ${ 'def' }
            foo
                bar
        `;

        expect(text).toBe(
            'Lorem ipsum dolor sit amet, 1 adipiscing elit.\n' +
            'abc\n' +
            '    def\n' +
            'foo\n' +
            '    bar'
        );
    });
});
