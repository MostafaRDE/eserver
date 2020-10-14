export function env(name: string, defaultValue?)
{
    if (hasOwnProperty(process.env, name))
        return process.env[ name ]
    else
        return defaultValue
}

export function hasOwnProperty(object: Record<string, any>, key: string)
{
    return Object.prototype.hasOwnProperty.call(object, key)
}

export function stringJoin(
    options: { delimiter?: string, first?: boolean, last?: boolean, trimDelimiterIfExists?: boolean } = { delimiter: '/', first: false, last: false, trimDelimiterIfExists: true },
    ...args: string[]): string
{
    let result: (string | string[]) =
        args.map(item => item.replace(new RegExp(`(^${ options.delimiter }*|${ options.delimiter }*$)`), ''))
            .filter(item => item !== '')
            .join(options.delimiter)

    if (options.first)
        result = options.delimiter + result
    if (options.last)
        result = options.delimiter + result

    return result
}
