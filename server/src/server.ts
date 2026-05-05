import express, {type Request , type Response} from 'express';
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

app.use(cors());
app.use(express.json());

app.post('/api/order', async (req: Request, res: Response) => {
    // my logic
    try{
        const {name, email, phone, toMake} = req.body;
        const message = `
        Новый заказ:
        Имя: ${name}
        Почта: ${email}
        Телефон: ${phone}
        Что хотели изготовить: ${toMake}
        `;
        await bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID!, message, {
            parse_mode: 'Markdown',
        });
        res.status(200).json({success:true});
    }catch(error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
    
});

// Порт
const PORT = process.env.PORT || 3000;
app.listen(Number(PORT), '0.0.0.0', () => console.log(`Server started on port ${PORT}`));

 
