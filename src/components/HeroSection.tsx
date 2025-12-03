import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            Изучай грамматику легко
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Интерактивные уроки, упражнения и тесты для эффективного изучения грамматики.
            Скачивай справочники и учись в удобном темпе.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-bg text-white text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => scrollToSection('lessons')}
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
              onClick={() => scrollToSection('resources')}
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать материалы
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-slide-up">
          <Card className="hover-lift border-2 border-purple-100">
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4">
                <Icon name="BookMarked" className="text-white" size={28} />
              </div>
              <CardTitle className="text-2xl">50+ уроков</CardTitle>
              <CardDescription className="text-base">
                Структурированная программа от базового до продвинутого уровня
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover-lift border-2 border-blue-100">
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Icon name="Target" className="text-white" size={28} />
              </div>
              <CardTitle className="text-2xl">1000+ упражнений</CardTitle>
              <CardDescription className="text-base">
                Практические задания с мгновенной проверкой
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover-lift border-2 border-pink-100">
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                <Icon name="Award" className="text-white" size={28} />
              </div>
              <CardTitle className="text-2xl">Сертификаты</CardTitle>
              <CardDescription className="text-base">
                Получай сертификаты за прохождение тестов
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
