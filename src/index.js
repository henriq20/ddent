export default function dedent(fragments, ...args) {
    fragments = typeof fragments === 'string' ? [ fragments ] : fragments;

    let result = fragments[0];
    for (let i = 0; i < args.length; i++) {
        result += args[i] + fragments[i + 1];
    }
    result = result.trim();

    let indentation = Math.min(...result.match(/\n([ \t])+/g)?.map(m => m.length) || [ 0 ]);
    indentation -= 1; // Ignore line break length

    return result.replace(new RegExp(`^[ \t]{${ indentation }}`, 'gm'), '');
}
