import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const features = [
    {
      icon: 'Smartphone',
      title: 'Заказ за 30 секунд',
      description: 'Откройте приложение, укажите адрес и время — готово!'
    },
    {
      icon: 'MapPin',
      title: 'Отслеживание машины',
      description: 'Видите где находится машина в реальном времени'
    },
    {
      icon: 'CreditCard',
      title: 'Оплата картой',
      description: 'Безналичная оплата прямо в приложении'
    },
    {
      icon: 'Clock',
      title: 'Приедем за 2 часа',
      description: 'Быстрый выезд в удобное для вас время'
    }
  ];

  const services = [
    {
      icon: 'Home',
      title: 'Вывоз из квартиры',
      description: 'Бытовой мусор, пакеты, коробки',
      price: 'от 500 ₽'
    },
    {
      icon: 'Sofa',
      title: 'Старая мебель',
      description: 'Диваны, шкафы, кресла, столы',
      price: 'от 800 ₽'
    },
    {
      icon: 'Tv',
      title: 'Техника',
      description: 'Холодильники, стиральные машины',
      price: 'от 600 ₽'
    },
    {
      icon: 'Package',
      title: 'После ремонта',
      description: 'Упаковка, картон, остатки материалов',
      price: 'от 700 ₽'
    },
    {
      icon: 'Trees',
      title: 'Садовый мусор',
      description: 'Ветки, листья, трава, земля',
      price: 'от 900 ₽'
    },
    {
      icon: 'Recycle',
      title: 'Раздельный сбор',
      description: 'Пластик, стекло, бумага отдельно',
      price: 'от 400 ₽'
    }
  ];

  const districts = [
    { name: 'Центр', time: '30 мин', icon: 'Building2' },
    { name: 'ФМР', time: '40 мин', icon: 'Building' },
    { name: 'КМР', time: '45 мин', icon: 'Home' },
    { name: 'ЮМР', time: '50 мин', icon: 'MapPin' },
    { name: 'Пашковский', time: '60 мин', icon: 'Locate' },
    { name: 'Прикубанский', time: '55 мин', icon: 'Navigation' }
  ];

  const reviews = [
    {
      name: 'Елена Морозова',
      avatar: '👩',
      rating: 5,
      text: 'Супер удобное приложение! Заказала вывоз старого дивана за минуту. Ребята приехали точно вовремя, все вынесли сами. Оплатила картой в приложении.',
      date: '2 дня назад'
    },
    {
      name: 'Дмитрий Козлов',
      avatar: '👨',
      rating: 5,
      text: 'После ремонта накопилось много мусора. В приложении заказал большой контейнер, следил где машина едет. Все четко и быстро, рекомендую!',
      date: '5 дней назад'
    },
    {
      name: 'Ольга Соколова',
      avatar: '👩‍🦰',
      rating: 5,
      text: 'Пользуюсь регулярно для вывоза мусора с дачи. Цены честные, всегда приезжают вовремя. Приложение работает отлично, очень удобно.',
      date: 'неделю назад'
    }
  ];

  const handleDownload = () => {
    alert('Приложение скоро будет доступно в App Store и Google Play!');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Icon name="Trash2" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                ВывозOK
              </span>
            </div>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
              <Icon name="Download" size={18} className="mr-2" />
              Скачать приложение
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6 animate-fade-in">
                <Icon name="Sparkles" size={18} />
                <span className="text-sm font-semibold">Новое приложение в Краснодаре</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
                Вывоз мусора<br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  в один клик
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Закажите вывоз бытового мусора через приложение за 30 секунд. Следите за машиной на карте и оплачивайте картой.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" onClick={handleDownload} className="text-lg px-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg">
                  <Icon name="Download" size={22} className="mr-2" />
                  Скачать приложение
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-green-500 text-green-600 hover:bg-green-50">
                  <Icon name="Play" size={22} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="Apple" size={24} className="text-gray-700" />
                  <span>App Store</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Smartphone" size={24} className="text-gray-700" />
                  <span>Google Play</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <Card className="relative border-4 border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Icon name="Menu" size={24} />
                      <Icon name="User" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Заказать вывоз</h3>
                    <p className="text-green-50 text-sm">Краснодар • Онлайн</p>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-start gap-3">
                        <Icon name="MapPin" className="text-green-600 mt-1" size={20} />
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 mb-1">Откуда</p>
                          <p className="font-semibold">ул. Красная, 123</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-start gap-3">
                        <Icon name="Package" className="text-green-600 mt-1" size={20} />
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 mb-1">Что вывозим</p>
                          <p className="font-semibold">Бытовой мусор • 3 мешка</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-xl text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-green-100">Стоимость</p>
                          <p className="text-2xl font-bold">750 ₽</p>
                        </div>
                        <div className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold">
                          Заказать
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="text-center">
                        <Icon name="Clock" className="mx-auto text-green-600 mb-1" size={20} />
                        <p className="text-xs text-gray-600">30 мин</p>
                      </div>
                      <div className="text-center">
                        <Icon name="CreditCard" className="mx-auto text-green-600 mb-1" size={20} />
                        <p className="text-xs text-gray-600">Картой</p>
                      </div>
                      <div className="text-center">
                        <Icon name="Star" className="mx-auto text-green-600 mb-1" size={20} />
                        <p className="text-xs text-gray-600">Рейтинг 5.0</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Как это работает</h2>
            <p className="text-xl text-gray-600">Просто, быстро и удобно</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={feature.icon} className="text-green-600" size={36} />
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 -right-8 text-green-300">
                      <Icon name="ArrowRight" size={24} />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Что мы вывозим</h2>
            <p className="text-xl text-gray-600">Все виды бытового мусора</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-green-200">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-green-600" size={28} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                      Заказать <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Работаем по всему Краснодару</h2>
            <p className="text-xl text-gray-600">Быстрый выезд во все районы</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {districts.map((district, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:border-green-200 border-2">
                <CardContent className="pt-6 pb-6">
                  <Icon name={district.icon} className="mx-auto text-green-600 mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 mb-1">{district.name}</h3>
                  <p className="text-sm text-gray-600">{district.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Отзывы пользователей</h2>
            <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" className="fill-current" size={24} />
              ))}
            </div>
            <p className="text-gray-600">4.9 из 5 • Более 1000 довольных клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="fill-yellow-400 text-yellow-400" size={14} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3 leading-relaxed">{review.text}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Smartphone" className="mx-auto mb-6 animate-bounce" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Скачайте приложение прямо сейчас
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Первый заказ со скидкой 20%. Промокод: <span className="font-bold">ПЕРВЫЙ</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" onClick={handleDownload} className="bg-white text-green-600 hover:bg-green-50 text-lg px-8">
              <Icon name="Apple" size={24} className="mr-2" />
              App Store
            </Button>
            <Button size="lg" onClick={handleDownload} className="bg-white text-green-600 hover:bg-green-50 text-lg px-8">
              <Icon name="Smartphone" size={24} className="mr-2" />
              Google Play
            </Button>
          </div>
          <div className="max-w-md mx-auto">
            <p className="text-sm text-green-100 mb-3">Или получите ссылку на телефон</p>
            <div className="flex gap-2">
              <Input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
              />
              <Button className="bg-white text-green-600 hover:bg-green-50">
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Icon name="Trash2" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">ВывозOK</span>
              </div>
              <p className="text-gray-400 text-sm">
                Современное приложение для вывоза мусора в Краснодаре
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Вывоз из квартиры</li>
                <li>Старая мебель</li>
                <li>Техника</li>
                <li>После ремонта</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>О приложении</li>
                <li>Тарифы</li>
                <li>Отзывы</li>
                <li>Партнёрам</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (861) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@vyvozok.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Краснодар, ул. Красная, 123
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 ВывозOK. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
