import express, { type Request, type Response } from 'express';
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import cors from 'cors';

// Загрузка переменных окружения из файла .env
dotenv.config();

const app = express();
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

// Настройка middleware
app.use(cors());
app.use(express.json());

/**
 * Обработчик POST-запроса на создание заказа.
 * Отправляет данные заказа в Telegram-чат.
 * 
 * @route POST /api/order
 * @body {string} name - Имя клиента
 * @body {string} email - Email клиента
 * @body {string} phone - Телефон клиента
 * @body {string} toMake - Описание желаемого изделия
 * @returns {object} 200 - { success: true } при успешной отправке
 * @returns {object} 500 - { error: 'Internal Server Error' } при ошибке
 */
app.post('/api/order', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, toMake } = req.body;
    
    // Формирование сообщения для Telegram
    const message = `
Новый заказ:
Имя: ${name}
Почта: ${email}
Телефон: ${phone}
Что хотели изготовить: ${toMake}
    `;
    
    // Отправка сообщения в Telegram
    await bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID!, message, {
      parse_mode: 'Markdown',
    });
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Ошибка при отправке заказа:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Порт сервера (из переменных окружения или по умолчанию 3000)
const PORT = process.env.PORT || 3000;
app.listen(Number(PORT), '0.0.0.0', () => 
  console.log(`Server started on port ${PORT}`)
);

 
