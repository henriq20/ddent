export default function dedent(fragments, ...args) {
	let join = dedent.config.join;
	if (arguments.length === 2 && typeof fragments === 'string') {
		join = fragments;
		fragments = args.shift();
	}

	fragments = typeof fragments === 'string' ? [ fragments ] : fragments;

	let result = fragments[0];
	if (args.length) {
		for (let i = 0; i < args.length; i++) {
			result += args[i] + fragments[i + 1];
		}
	}

	let min;
	result = result.replace(/^([ \t]+)(.+)?(\n+)/gm, (match, whitespaces = '', text = '', lineBreaks = '') => {
		if (!min || whitespaces.length < min) {
			min = whitespaces.length;
		}

		return whitespaces + text + join + lineBreaks;
	});

	result = result.replace(new RegExp(`\n([ \t]{${ min }})`, 'gm'), ''); // Strips indentation

	return result.slice(0, result.lastIndexOf(join)).trim();
}

dedent.config = {
	join: '\n'
};
