import crypto from 'crypto'

export const hash = () => {
    return crypto.createHash('md5').digest('hex')
}
