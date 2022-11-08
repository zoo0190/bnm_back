import { config } from 'dotenv';
config();

export const { PORT, MAIL_USER, MAIL_PWD } = process.env;
