export function env(name: string, defaultValue?: any)
{
    if (hasOwnProperty(process.env, name))
        return process.env[ name ]
    else
        return defaultValue
}

export function hasOwnProperty(object, key)
{
    return Object.prototype.hasOwnProperty.call(object, key)
}
