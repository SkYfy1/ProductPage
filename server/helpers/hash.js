import bcrypt from 'bcrypt'


const hashPassword = async (password) => {
        const hashed = bcrypt.hash(password, 12);
        return hashed;
};

const hashedPass = await hashPassword('alexskyfy123');

const compare = await bcrypt.compare('alexskyfy126', hashedPass)

export default hashPassword;