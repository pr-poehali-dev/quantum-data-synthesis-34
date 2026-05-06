import { Badge } from "@/components/ui/badge"
import type { ServiceItem, ProductItem } from "@/types"

export const sections = [
  {
    id: 'hero',
    type: 'hero' as const,
    subtitle: <Badge variant="outline" className="text-[#00C9FF] border-[#00C9FF]">Ярославль · Веб-студия</Badge>,
    title: "Сайты, которые работают на вас.",
    showButton: true,
    buttonText: 'Обсудить проект'
  },
  {
    id: 'about',
    type: 'about' as const,
    title: 'Интернет Цапля',
    content: 'Мы — веб-студия из Ярославля, которая создаёт современные сайты с помощью новейших технологий и искусственного интеллекта. Работаем быстро, думаем стратегически, делаем красиво. Каждый проект — это уникальное решение под задачи вашего бизнеса, а не шаблонная поделка.'
  },
  {
    id: 'services',
    type: 'services' as const,
    title: 'Наши услуги',
  },
  {
    id: 'products',
    type: 'products' as const,
    title: 'Готовые решения',
  },
  {
    id: 'map',
    type: 'map' as const,
    title: 'Мы в Ярославле',
    content: 'ул. Свободы, 82, Ярославль',
    showButton: true,
    buttonText: 'Оставить заявку'
  },
]

export const services: ServiceItem[] = [
  {
    title: 'Сайт под ключ',
    description: 'Разработка корпоративного сайта с нуля: дизайн, вёрстка, CMS, SEO-настройка.',
    price: 'от 45 000 ₽',
    image: 'https://cdn.poehali.dev/projects/3bfc435e-f5f4-4406-9632-d620c45cdf81/files/b340fefa-0654-4d2f-aeaf-48bb570505cc.jpg'
  },
  {
    title: 'Мобильное приложение',
    description: 'Разработка приложений для iOS и Android с современным интерфейсом.',
    price: 'от 120 000 ₽',
    image: 'https://cdn.poehali.dev/projects/3bfc435e-f5f4-4406-9632-d620c45cdf81/files/be14e017-60c7-4d20-8f97-1f5643cf8056.jpg'
  },
  {
    title: 'SEO и продвижение',
    description: 'Вывод сайта в топ Яндекс и Google. Аудит, оптимизация, контент-стратегия.',
    price: 'от 15 000 ₽/мес',
    image: 'https://cdn.poehali.dev/projects/3bfc435e-f5f4-4406-9632-d620c45cdf81/files/f0c2f9a2-19a0-4705-8852-21dc15111aaf.jpg'
  },
  {
    title: 'AI-интеграция',
    description: 'Подключаем искусственный интеллект в ваш сайт: чат-боты, автоматизация, аналитика.',
    price: 'от 30 000 ₽',
    image: 'https://cdn.poehali.dev/projects/3bfc435e-f5f4-4406-9632-d620c45cdf81/files/cac87387-a25a-49ea-9dfe-ae64f60c328f.jpg'
  },
]

export const products: ProductItem[] = [
  {
    title: 'Пакет «Поддержка»',
    description: 'Ежемесячное обслуживание сайта: обновления, резервные копии, техподдержка 24/7.',
    price: '5 900 ₽/мес',
    image: 'https://cdn.poehali.dev/projects/3bfc435e-f5f4-4406-9632-d620c45cdf81/files/83c2d867-f17c-4eb9-9644-28f35e79284b.jpg'
  },
  {
    title: 'Фирменный стиль',
    description: 'Логотип, фирменные цвета, шрифты и брендбук для вашей компании.',
    price: '18 000 ₽',
    image: 'https://cdn.poehali.dev/projects/3bfc435e-f5f4-4406-9632-d620c45cdf81/files/3aa5bc0e-a724-4f90-8b01-96f0acffe3ad.jpg'
  },
  {
    title: 'SMM-пакет',
    description: 'Ведение соцсетей: контент-план, дизайн постов, таргетированная реклама.',
    price: '12 000 ₽/мес',
    image: 'https://cdn.poehali.dev/projects/3bfc435e-f5f4-4406-9632-d620c45cdf81/files/99f43aaa-f16b-4b99-9576-4387b2717c80.jpg'
  },
  {
    title: 'Лендинг-старт',
    description: 'Готовый лендинг для старта: 1 страница, форма заявки, подключение домена.',
    price: '12 000 ₽',
    image: 'https://cdn.poehali.dev/projects/3bfc435e-f5f4-4406-9632-d620c45cdf81/files/d4b97484-bc75-4c64-b1a1-87ce51fabe0c.jpg'
  },
]
