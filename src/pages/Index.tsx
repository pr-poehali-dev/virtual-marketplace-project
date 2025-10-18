import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Channel {
  id: number;
  name: string;
  description: string;
  category: string;
  subscribers: number;
  price: number;
  rating: number;
  image: string;
}

export default function Index() {
  const [balance, setBalance] = useState(15000);
  const [activeTab, setActiveTab] = useState('home');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const channels: Channel[] = [
    {
      id: 1,
      name: 'Crypto Insights',
      description: 'Аналитика и прогнозы по криптовалютам',
      category: 'Финансы',
      subscribers: 45000,
      price: 500,
      rating: 4.8,
      image: '💎'
    },
    {
      id: 2,
      name: 'Tech News Daily',
      description: 'Свежие новости из мира технологий',
      category: 'Технологии',
      subscribers: 32000,
      price: 350,
      rating: 4.6,
      image: '🚀'
    },
    {
      id: 3,
      name: 'Marketing Pro',
      description: 'Секреты эффективного маркетинга',
      category: 'Бизнес',
      subscribers: 28000,
      price: 450,
      rating: 4.9,
      image: '📈'
    },
    {
      id: 4,
      name: 'Design Trends',
      description: 'Лучшие тренды в дизайне и UX',
      category: 'Дизайн',
      subscribers: 21000,
      price: 300,
      rating: 4.7,
      image: '🎨'
    },
    {
      id: 5,
      name: 'AI Revolution',
      description: 'Новости искусственного интеллекта',
      category: 'Технологии',
      subscribers: 56000,
      price: 600,
      rating: 4.9,
      image: '🤖'
    },
    {
      id: 6,
      name: 'Investment Club',
      description: 'Инвестиционные стратегии и идеи',
      category: 'Финансы',
      subscribers: 38000,
      price: 550,
      rating: 4.5,
      image: '💰'
    }
  ];

  const filteredChannels = categoryFilter === 'all' 
    ? channels 
    : channels.filter(ch => ch.category === categoryFilter);

  const handlePurchase = (price: number) => {
    if (balance >= price) {
      setBalance(balance - price);
      alert('Канал успешно приобретён! 🎉');
    } else {
      alert('Недостаточно средств на балансе');
    }
  };

  return (
    <div className="min-h-screen bg-background dark">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-500 to-orange-500 bg-clip-text text-transparent">
                ChannelMarket
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                <Icon name="Coins" size={20} className="text-primary" />
                <span className="font-semibold text-lg">{balance.toLocaleString()}</span>
                <span className="text-muted-foreground text-sm">ТР</span>
              </div>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <nav className="border-b border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex gap-1">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'catalog', label: 'Каталог', icon: 'Store' },
              { id: 'balance', label: 'Баланс', icon: 'Wallet' },
              { id: 'publish', label: 'Разместить', icon: 'PlusCircle' },
              { id: 'rules', label: 'Правила', icon: 'FileText' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-primary text-primary font-semibold'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={tab.icon as any} size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover-scale">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-primary" />
                    Всего каналов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{channels.length}</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20 hover-scale">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" className="text-blue-500" />
                    Пользователей
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">1,247</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20 hover-scale">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="ShoppingCart" className="text-orange-500" />
                    Сделок сегодня
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">89</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Flame" className="text-orange-500" />
                Популярные каналы
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {channels.slice(0, 3).map(channel => (
                  <Card key={channel.id} className="hover-scale overflow-hidden group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-2xl">
                            {channel.image}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{channel.name}</CardTitle>
                            <Badge variant="secondary" className="mt-1">{channel.category}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <Icon name="Users" size={16} className="text-muted-foreground" />
                          {(channel.subscribers / 1000).toFixed(1)}k
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="text-yellow-500" />
                          {channel.rating}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{channel.price} ТР</span>
                        <Button onClick={() => handlePurchase(channel.price)} size="sm">
                          Купить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Каталог каналов</h2>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="Финансы">Финансы</SelectItem>
                  <SelectItem value="Технологии">Технологии</SelectItem>
                  <SelectItem value="Бизнес">Бизнес</SelectItem>
                  <SelectItem value="Дизайн">Дизайн</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredChannels.map(channel => (
                <Card key={channel.id} className="hover-scale overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-2xl">
                          {channel.image}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{channel.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{channel.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Icon name="Users" size={16} className="text-muted-foreground" />
                        {(channel.subscribers / 1000).toFixed(1)}k
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="text-yellow-500" />
                        {channel.rating}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{channel.price} CM</span>
                      <Button onClick={() => handlePurchase(channel.price)} size="sm">
                        Купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'balance' && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            <Card className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-orange-500/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Мой баланс</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-orange-500 bg-clip-text text-transparent mb-2">
                    {balance.toLocaleString()} ТР
                  </div>
                  <p className="text-muted-foreground">Транс-рефанды</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>История транзакций</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: 'purchase', name: 'Crypto Insights', amount: -500, date: '18 окт 2024' },
                    { type: 'topup', name: 'Пополнение баланса', amount: +10000, date: '15 окт 2024' },
                    { type: 'sale', name: 'Marketing Pro', amount: +450, date: '12 окт 2024' }
                  ].map((tx, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-card/50 border">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          tx.type === 'purchase' ? 'bg-red-500/10' :
                          tx.type === 'topup' ? 'bg-green-500/10' : 'bg-blue-500/10'
                        }`}>
                          <Icon name={
                            tx.type === 'purchase' ? 'ShoppingCart' :
                            tx.type === 'topup' ? 'Plus' : 'TrendingUp'
                          } size={20} className={
                            tx.type === 'purchase' ? 'text-red-500' :
                            tx.type === 'topup' ? 'text-green-500' : 'text-blue-500'
                          } />
                        </div>
                        <div>
                          <p className="font-semibold">{tx.name}</p>
                          <p className="text-sm text-muted-foreground">{tx.date}</p>
                        </div>
                      </div>
                      <span className={`font-bold ${tx.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {tx.amount > 0 ? '+' : ''}{tx.amount} ТР
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'publish' && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Разместить канал</CardTitle>
                <CardDescription>Заполните информацию о вашем Telegram-канале</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="channel-name">Название канала</Label>
                    <Input id="channel-name" placeholder="Введите название" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="channel-link">Ссылка на канал</Label>
                    <Input id="channel-link" placeholder="t.me/your_channel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Категория</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finance">Финансы</SelectItem>
                        <SelectItem value="tech">Технологии</SelectItem>
                        <SelectItem value="business">Бизнес</SelectItem>
                        <SelectItem value="design">Дизайн</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Описание</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Расскажите о вашем канале"
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subscribers">Подписчиков</Label>
                      <Input id="subscribers" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Цена (ТР)</Label>
                      <Input id="price" type="number" placeholder="0" />
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Разместить канал
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Shield" className="text-primary" />
                  Правила площадки
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-3">1. Общие положения</h3>
                <p className="text-muted-foreground mb-4">
                  ChannelMarket — закрытая площадка для торговли Telegram-каналами с использованием внутренней валюты (CM). Доступ предоставляется только верифицированным пользователям.
                </p>

                <h3 className="text-xl font-semibold mb-3">2. Правила размещения</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Канал должен быть вашей собственностью</li>
                  <li>Запрещено размещение каналов с нелегальным контентом</li>
                  <li>Указывайте реальное количество подписчиков</li>
                  <li>Описание должно соответствовать содержанию канала</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">3. Финансовые операции</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Все транзакции проводятся в внутренней валюте транс-рефанды (ТР)</li>
                  <li>Комиссия площадки составляет 5% от сделки</li>
                  <li>Возврат средств возможен в течение 24 часов при наличии оснований</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">4. Ответственность</h3>
                <p className="text-muted-foreground mb-4">
                  Пользователи несут полную ответственность за достоверность предоставленной информации. Площадка выступает посредником и не отвечает за качество приобретаемых каналов.
                </p>

                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm">
                    <Icon name="Info" size={16} className="inline mr-2 text-primary" />
                    При возникновении спорных ситуаций обращайтесь в службу поддержки
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                <Icon name="Zap" size={18} className="text-white" />
              </div>
              <span className="font-semibold">ChannelMarket © 2024</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
              <a href="#" className="hover:text-primary transition-colors">Telegram</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}