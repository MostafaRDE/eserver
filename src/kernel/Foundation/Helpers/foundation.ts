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
