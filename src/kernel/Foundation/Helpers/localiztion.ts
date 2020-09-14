export function t(text: string)
{
    const transText = text.split('.').filter(item => item !== '')

    let transPack: string | Record<string, unknown> = global.__(transText[0])
    for (let i = 1; i < transText.length; i++)
        transPack = transPack[transText[ i ]]

    return transPack
}