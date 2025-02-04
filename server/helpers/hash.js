import bcrypt from 'bcrypt'


const hashPassword = async (password) => {
        const hashed = bcrypt.hash(password, 12);
        return hashed;
};

const hashedPass = await hashPassword('qwerty1');

const compare = await bcrypt.compare('qwerty', hashedPass)

export default hashPassword;
