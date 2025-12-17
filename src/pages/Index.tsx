import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [wasteType, setWasteType] = useState('');
  const [volume, setVolume] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const services = [
    {
      icon: 'Home',
      title: 'Вывоз из квартиры',
      description: 'Быстрый вывоз бытового мусора из квартир любой площади',
      price: 'от 1500 ₽'
    },
    {
      icon: 'Building2',
      title: 'Вывоз из дома',
      description: 'Вывоз бытовых отходов из частных домов и коттеджей',
      price: 'от 2000 ₽'
    },
    {
      icon: 'Trash2',
      title: 'Крупногабаритный мусор',
      description: 'Вывоз старой мебели, матрасов и бытовой техники',
      price: 'от 1800 ₽'
    },
    {
      icon: 'Package',
      title: 'Упаковка и картон',
      description: 'Утилизация картонных коробок и упаковочных материалов',
      price: 'от 800 ₽'
    },
    {
      icon: 'Recycle',
      title: 'Раздельный сбор',
      description: 'Вывоз с сортировкой на пластик, стекло, бумагу',
      price: 'от 1200 ₽'
    },
    {
      icon: 'CalendarCheck',
      title: 'Регулярный вывоз',
      description: 'Абонементное обслуживание для постоянных клиентов',
      price: 'от 1000 ₽'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличный сервис! Вывезли весь бытовой мусор из квартиры после уборки. Ребята аккуратные и вежливые.',
      date: '15.12.2024'
    },
    {
      name: 'Сергей Иванов',
      rating: 5,
      text: 'Заказываю регулярный вывоз для дома. Всегда приезжают вовремя, цены адекватные. Очень доволен!',
      date: '10.12.2024'
    },
    {
      name: 'Мария Соколова',
      rating: 5,
      text: 'Помогли вывезти старую мебель и холодильник. Всё сделали быстро и профессионально. Рекомендую!',
      date: '05.12.2024'
    }
  ];

  const calculatePrice = () => {
    if (!wasteType || !volume) return;

    const baseRates: { [key: string]: number } = {
      'apartment': 1500,
      'house': 2000,
      'furniture': 1800,
      'packaging': 800,
      'recycling': 1200
    };

    const volumeMultiplier = parseFloat(volume);
    const basePrice = baseRates[wasteType] || 1500;
    const total = basePrice + (volumeMultiplier * 400);

    setCalculatedPrice(total);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Recycle" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ЭкоВывоз</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Icon name="Leaf" size={20} />
              <span className="text-sm font-medium">Экологичная утилизация</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
              Вывоз мусора в Краснодаре
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Быстро, надежно и с заботой об окружающей среде. Вывезем любой мусор за 2 часа.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="text-lg px-8">
                <Icon name="CalendarCheck" size={20} className="mr-2" />
                Заказать вывоз
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Icon name="Clock" className="mx-auto text-primary mb-3" size={40} />
                  <h3 className="font-semibold text-lg mb-2">Приедем за 2 часа</h3>
                  <p className="text-muted-foreground text-sm">Быстрый выезд по всему Краснодару</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Icon name="Users" className="mx-auto text-primary mb-3" size={40} />
                  <h3 className="font-semibold text-lg mb-2">Грузчики в подарок</h3>
                  <p className="text-muted-foreground text-sm">Поможем вынести и погрузить</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Icon name="Shield" className="mx-auto text-primary mb-3" size={40} />
                  <h3 className="font-semibold text-lg mb-2">100% надежность</h3>
                  <p className="text-muted-foreground text-sm">Работаем официально с договором</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Вывозим любые виды мусора с заботой об экологии</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm">
                      Заказать <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto max-w-3xl">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center gap-2">
                <Icon name="Calculator" className="text-primary" size={32} />
                Калькулятор стоимости
              </CardTitle>
              <CardDescription className="text-base">
                Узнайте примерную стоимость вывоза мусора
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="waste-type">Тип мусора</Label>
                <Select value={wasteType} onValueChange={setWasteType}>
                  <SelectTrigger id="waste-type">
                    <SelectValue placeholder="Выберите тип мусора" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Вывоз из квартиры</SelectItem>
                    <SelectItem value="house">Вывоз из дома</SelectItem>
                    <SelectItem value="furniture">Крупногабаритный мусор</SelectItem>
                    <SelectItem value="packaging">Упаковка и картон</SelectItem>
                    <SelectItem value="recycling">Раздельный сбор</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="volume">Объем (м³)</Label>
                <Input
                  id="volume"
                  type="number"
                  placeholder="Введите объем"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  min="1"
                  max="50"
                />
              </div>
              <Button onClick={calculatePrice} className="w-full" size="lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              {calculatedPrice && (
                <Card className="bg-primary/5 border-primary/20 animate-fade-in">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">Примерная стоимость</p>
                      <p className="text-4xl font-bold text-primary">{calculatedPrice} ₽</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Точная цена рассчитывается после осмотра
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Icon name="Sparkles" size={20} />
                <span className="text-sm font-medium">О компании</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Забота об экологии — наша миссия</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Мы не просто вывозим мусор — мы заботимся о будущем нашего города. Более 90% собранных отходов отправляется на переработку.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Раздельный сбор</h3>
                    <p className="text-muted-foreground">Сортируем отходы для максимальной переработки</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Лицензии и документы</h3>
                    <p className="text-muted-foreground">Работаем официально с полным пакетом разрешений</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Современный автопарк</h3>
                    <p className="text-muted-foreground">Экологичные грузовики стандарта Евро-5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-emerald-200 rounded-3xl p-8 h-96 flex items-center justify-center">
                <Icon name="Leaf" className="text-primary/40" size={200} />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-primary mb-1">90%</div>
                <div className="text-sm text-muted-foreground">На переработку</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-muted-foreground text-lg">Более 5000 довольных клиентов за 5 лет работы</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base">{review.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">Оставьте заявку, и мы свяжемся с вами в течение 15 минут</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Отправить заявку</CardTitle>
                <CardDescription>Заполните форму для быстрой связи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Опишите, что нужно вывезти..." rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <a href="tel:+78612345678" className="text-primary hover:underline">+7 (861) 234-56-78</a>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 8:00 до 22:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@ekovyvoz.ru" className="text-primary hover:underline">info@ekovyvoz.ru</a>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Краснодар, ул. Красная, 123</p>
                      <p className="text-sm text-muted-foreground mt-1">Офис открыт пн-пт 9:00-18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Recycle" size={28} />
                <span className="text-xl font-bold">ЭкоВывоз</span>
              </div>
              <p className="text-white/70">Экологичный вывоз мусора в Краснодаре с заботой о природе</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Вывоз из квартиры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вывоз из дома</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Крупногабаритный мусор</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Раздельный сбор</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лицензии</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li>+7 (861) 234-56-78</li>
                <li>info@ekovyvoz.ru</li>
                <li>г. Краснодар, ул. Красная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>© 2024 ЭкоВывоз. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;