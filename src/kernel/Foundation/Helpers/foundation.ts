/**
 * @function
 * @description Deep clone a class instance.
 * @param {object} instance The class instance you want to clone.
 * @returns {object} A new cloned instance.
 */
export function clone(instance)
{
    return Object.assign(
        Object.create(
            // Set the prototype of the new object to the prototype of the instance.
            // Used to allow new object behave like class instance.
            Object.getPrototypeOf(instance),
        ),
        // Prevent shallow copies of nested structures like arrays, etc
        JSON.parse(JSON.stringify(instance)),
    )
}

export function env(name: string, defaultValue?)
{
    if (hasOwnProperty(process.env, name))
        return process.env[ name ]
    else
        return defaultValue
}

export function hasOwnProperty(object: Record<string, unknown>, key: string)
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
