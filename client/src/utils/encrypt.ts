import crypt from 'crypto-js'


const encrypt = (obj: any): string => crypt.AES.encrypt(JSON.stringify(obj), '02e646508d1966b9c02cc60986c0f3d5a1406b24f3ad63794850492be91bc563').toString()
export default encrypt
