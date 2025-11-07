import { Survey } from '../types';

export const demoSurvey: Survey = {
  id: 'demo',
  title: 'Демо-опрос',
  pages: [
    {
      id: 'p1',
      questions: [
        {
          id: 'q1',
          type: 'single',
          title:
            'Скажите, пожалуйста, как часто Вы покупаете шоколадные батончики / молочный шоколад / шоколадные конфеты?',
          options: [
            { id: 'o1', label: 'Раз в неделю и чаще' },
            { id: 'o2', label: 'Раз в 2-3 недели' },
            { id: 'o3', label: 'Раз в месяц' },
            { id: 'o4', label: 'Раз в 2-3 месяца' },
            { id: 'o5', label: 'Раз в 4-6 месяцев' },
            { id: 'o6', label: '1-2 раза в год' },
            { id: 'o7', label: 'Реже чем раз в год' },
          ],
        },
      ],
    },
    {
      id: 'p2',
      questions: [
        {
          id: 'q2',
          type: 'multiple',
          title: 'Какие виды шоколада Вы предпочитаете?',
          options: [
            { id: 'o1', label: 'Молочный' },
            { id: 'o2', label: 'Тёмный' },
            { id: 'o3', label: 'Белый' },
            { id: 'o4', label: 'С орехами' },
            { id: 'o5', label: 'С начинкой' },
          ],
        },
      ],
    },
    {
      id: 'p3',
      questions: [
        {
          id: 'q3',
          type: 'single',
          title: 'Какой бренд шоколада Вы покупаете чаще всего?',
          options: [
            { id: 'o1', label: 'Российские бренды' },
            { id: 'o2', label: 'Европейские бренды' },
            { id: 'o3', label: 'Американские бренды' },
            { id: 'o4', label: 'Не обращаю внимание на бренд' },
          ],
        },
      ],
    },
    {
      id: 'p4',
      questions: [
        {
          id: 'q4',
          type: 'multiple',
          title: 'Где Вы обычно покупаете шоколад?',
          options: [
            { id: 'o1', label: 'Супермаркет' },
            { id: 'o2', label: 'Магазин у дома' },
            { id: 'o3', label: 'Интернет-магазин' },
            { id: 'o4', label: 'Кондитерская' },
            { id: 'o5', label: 'Автомат' },
          ],
        },
      ],
    },
    {
      id: 'p5',
      questions: [
        {
          id: 'q5',
          type: 'single',
          title: 'Какую сумму в среднем Вы тратите на шоколад за месяц?',
          options: [
            { id: 'o1', label: 'До 500 рублей' },
            { id: 'o2', label: '500-1000 рублей' },
            { id: 'o3', label: '1000-2000 рублей' },
            { id: 'o4', label: 'Более 2000 рублей' },
          ],
        },
      ],
    },
    {
      id: 'p6',
      questions: [
        {
          id: 'q6',
          type: 'multiple',
          title: 'На что Вы обращаете внимание при выборе шоколада?',
          options: [
            { id: 'o1', label: 'Цена' },
            { id: 'o2', label: 'Состав' },
            { id: 'o3', label: 'Бренд' },
            { id: 'o4', label: 'Внешний вид упаковки' },
            { id: 'o5', label: 'Отзывы' },
          ],
        },
      ],
    },
    {
      id: 'p7',
      questions: [
        {
          id: 'q7',
          type: 'single',
          title: 'Какой процент какао в шоколаде Вы предпочитаете?',
          options: [
            { id: 'o1', label: 'До 40% (молочный)' },
            { id: 'o2', label: '40-60% (полусладкий)' },
            { id: 'o3', label: '60-75% (тёмный)' },
            { id: 'o4', label: 'Более 75% (горький)' },
          ],
        },
      ],
    },
    {
      id: 'p8',
      questions: [
        {
          id: 'q8',
          type: 'multiple',
          title: 'Какие добавки в шоколаде Вам нравятся?',
          options: [
            { id: 'o1', label: 'Орехи' },
            { id: 'o2', label: 'Изюм' },
            { id: 'o3', label: 'Карамель' },
            { id: 'o4', label: 'Фрукты' },
            { id: 'o5', label: 'Без добавок' },
          ],
        },
      ],
    },
    {
      id: 'p9',
      questions: [
        {
          id: 'q9',
          type: 'single',
          title: 'Покупаете ли Вы шоколад в подарок?',
          options: [
            { id: 'o1', label: 'Часто' },
            { id: 'o2', label: 'Иногда' },
            { id: 'o3', label: 'Редко' },
            { id: 'o4', label: 'Никогда' },
          ],
        },
      ],
    },
    {
      id: 'p10',
      questions: [
        {
          id: 'q10',
          type: 'multiple',
          title: 'Какие факторы могут заставить Вас отказаться от покупки шоколада?',
          options: [
            { id: 'o1', label: 'Высокая цена' },
            { id: 'o2', label: 'Ненатуральный состав' },
            { id: 'o3', label: 'Недоступность в магазине' },
            { id: 'o4', label: 'Диета' },
            { id: 'o5', label: 'Проблемы со здоровьем' },
          ],
        },
      ],
    },
  ],
};