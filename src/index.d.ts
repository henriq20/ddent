/**
 * Strips indentation from the given string.
 */
declare function dedent(fragments: TemplateStringsArray | string, ...args: any[]) : string;

/**
 * Strips indentation from the given string and joins it with the specified character.
 */
declare function dedent(join: string, fragments: string) : string;

export default dedent;
