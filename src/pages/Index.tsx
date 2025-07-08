import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [balance, setBalance] = useState(1250);
  const [isSpinning, setIsSpinning] = useState(false);

  const cases = [
    {
      id: 1,
      name: "Weapon Case",
      price: 2.5,
      image: "/img/3b1b49c0-58ce-457d-98db-b06ff0a05811.jpg",
      rarity: "Classified",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "Spectrum Case",
      price: 1.8,
      image: "/img/3b1b49c0-58ce-457d-98db-b06ff0a05811.jpg",
      rarity: "Restricted",
      color: "from-red-500 to-orange-500",
    },
    {
      id: 3,
      name: "Gamma Case",
      price: 3.2,
      image: "/img/3b1b49c0-58ce-457d-98db-b06ff0a05811.jpg",
      rarity: "Covert",
      color: "from-yellow-500 to-red-500",
    },
    {
      id: 4,
      name: "Prisma Case",
      price: 2.1,
      image: "/img/3b1b49c0-58ce-457d-98db-b06ff0a05811.jpg",
      rarity: "Mil-Spec",
      color: "from-blue-500 to-purple-500",
    },
  ];

  const handleOpenCase = (caseId: number) => {
    console.log("Opening case:", caseId);
    // Placeholder for case opening logic
  };

  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Target" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-foreground">CS2 CASES</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-card px-3 py-2 rounded-lg border">
                <Icon name="Coins" size={20} className="text-primary" />
                <span className="font-semibold">${balance.toFixed(2)}</span>
              </div>

              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="User" size={16} className="mr-2" />
                Steam Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Откройте лучшие кейсы CS2
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Получайте редкие скины, участвуйте в рулетке и торгуйте с другими
              игроками
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Play" size={20} className="mr-2" />
                Начать игру
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Trophy" size={20} className="mr-2" />
                Топ скины
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="cases" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="cases" className="flex items-center space-x-2">
              <Icon name="Package" size={16} />
              <span>Кейсы</span>
            </TabsTrigger>
            <TabsTrigger
              value="roulette"
              className="flex items-center space-x-2"
            >
              <Icon name="RotateCw" size={16} />
              <span>Рулетка</span>
            </TabsTrigger>
            <TabsTrigger
              value="inventory"
              className="flex items-center space-x-2"
            >
              <Icon name="Backpack" size={16} />
              <span>Инвентарь</span>
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="flex items-center space-x-2"
            >
              <Icon name="History" size={16} />
              <span>История</span>
            </TabsTrigger>
          </TabsList>

          {/* Cases Tab */}
          <TabsContent value="cases" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cases.map((caseItem) => (
                <Card
                  key={caseItem.id}
                  className="hover-scale overflow-hidden border-2 hover:border-primary/50 transition-all duration-300"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${caseItem.color} flex items-center justify-center`}
                  >
                    <img
                      src={caseItem.image}
                      alt={caseItem.name}
                      className="w-32 h-32 object-contain animate-float"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{caseItem.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {caseItem.rarity}
                      </Badge>
                    </div>
                    <CardDescription className="text-2xl font-bold text-primary">
                      ${caseItem.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => handleOpenCase(caseItem.id)}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Icon name="Unlock" size={16} className="mr-2" />
                      Открыть
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Roulette Tab */}
          <TabsContent value="roulette" className="animate-fade-in">
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Рулетка скинов</CardTitle>
                <CardDescription>
                  Испытайте удачу в нашей рулетке
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <div
                    className={`w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center ${isSpinning ? "animate-spin" : ""}`}
                  >
                    <img
                      src="/img/0aca7589-dd6b-4969-9e59-92e0fea39e91.jpg"
                      alt="Roulette"
                      className="w-48 h-48 object-cover rounded-full"
                    />
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Ставка</p>
                      <p className="text-lg font-semibold">$10.00</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Множитель</p>
                      <p className="text-lg font-semibold text-primary">x2.5</p>
                    </div>
                  </div>

                  <Button
                    onClick={handleSpin}
                    disabled={isSpinning}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isSpinning ? (
                      <Icon
                        name="Loader2"
                        size={16}
                        className="mr-2 animate-spin"
                      />
                    ) : (
                      <Icon name="Play" size={16} className="mr-2" />
                    )}
                    {isSpinning ? "Крутится..." : "Крутить"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Backpack" size={20} />
                  <span>Мой инвентарь</span>
                </CardTitle>
                <CardDescription>Управляйте своими скинами</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Icon
                    name="Package"
                    size={48}
                    className="mx-auto text-muted-foreground mb-4"
                  />
                  <p className="text-lg text-muted-foreground mb-4">
                    Ваш инвентарь пуст
                  </p>
                  <Button variant="outline">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Открыть первый кейс
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="History" size={20} />
                  <span>История операций</span>
                </CardTitle>
                <CardDescription>Ваши последние действия</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Icon
                    name="FileText"
                    size={48}
                    className="mx-auto text-muted-foreground mb-4"
                  />
                  <p className="text-lg text-muted-foreground mb-4">
                    История пуста
                  </p>
                  <Button variant="outline">
                    <Icon name="Refresh" size={16} className="mr-2" />
                    Обновить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">CS2 Cases</h3>
              <p className="text-sm text-muted-foreground">
                Лучшая платформа для открытия кейсов CS2
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Игра</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Кейсы</li>
                <li>Рулетка</li>
                <li>Торговля</li>
                <li>Инвентарь</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Правила</li>
                <li>Помощь</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon
                  name="Twitter"
                  size={20}
                  className="text-muted-foreground hover:text-primary cursor-pointer"
                />
                <Icon
                  name="Instagram"
                  size={20}
                  className="text-muted-foreground hover:text-primary cursor-pointer"
                />
                <Icon
                  name="Youtube"
                  size={20}
                  className="text-muted-foreground hover:text-primary cursor-pointer"
                />
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 CS2 Cases. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
