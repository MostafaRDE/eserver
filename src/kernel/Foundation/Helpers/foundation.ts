export function env(name: string, defaultValue?: any)
{
    if (process.env.hasOwnProperty(name))
        return process.env[name]
    else
        return defaultValue
}
