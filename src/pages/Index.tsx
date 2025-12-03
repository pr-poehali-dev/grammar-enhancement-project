import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const lessons = [
    {
      title: 'Времена глаголов',
      description: 'Present, Past, Future Simple и Continuous',
      icon: 'Clock',
      progress: 65,
      color: 'bg-purple-500'
    },
    {
      title: 'Артикли',
      description: 'Правила использования a, an, the',
      icon: 'FileText',
      progress: 40,
      color: 'bg-blue-500'
    },
    {
      title: 'Модальные глаголы',
      description: 'Can, could, may, might, must, should',
      icon: 'Lightbulb',
      progress: 80,
      color: 'bg-pink-500'
    },
    {
      title: 'Условные предложения',
      description: 'Zero, First, Second, Third Conditionals',
      icon: 'GitBranch',
      progress: 30,
      color: 'bg-cyan-500'
    }
  ];

  const exercises = [
    {
      title: 'Заполнить пропуски',
      type: 'Базовый',
      questions: 15,
      icon: 'PenTool'
    },
    {
      title: 'Выбрать правильный вариант',
      type: 'Средний',
      questions: 20,
      icon: 'CheckCircle2'
    },
    {
      title: 'Исправить ошибки',
      type: 'Продвинутый',
      questions: 10,
      icon: 'AlertCircle'
    },
    {
      title: 'Составить предложения',
      type: 'Экспертный',
      questions: 12,
      icon: 'Edit3'
    }
  ];

  const tests = [
    {
      title: 'Общий тест',
      duration: '30 мин',
      questions: 50,
      level: 'Все уровни'
    },
    {
      title: 'Быстрый тест',
      duration: '10 мин',
      questions: 20,
      level: 'Базовый'
    },
    {
      title: 'Продвинутый тест',
      duration: '45 мин',
      questions: 75,
      level: 'Advanced'
    }
  ];

  const resources = [
    {
      title: 'Таблица времён глаголов',
      type: 'PDF',
      size: '2.5 MB',
      icon: 'FileDown'
    },
    {
      title: 'Неправильные глаголы',
      type: 'PDF',
      size: '1.2 MB',
      icon: 'FileDown'
    },
    {
      title: 'Предлоги: полный справочник',
      type: 'PDF',
      size: '3.8 MB',
      icon: 'FileDown'
    },
    {
      title: 'Фразовые глаголы',
      type: 'PDF',
      size: '2.1 MB',
      icon: 'FileDown'
    },
    {
      title: 'Пунктуация и структура',
      type: 'PDF',
      size: '1.7 MB',
      icon: 'FileDown'
    },
    {
      title: 'Шпаргалка по артиклям',
      type: 'PDF',
      size: '0.8 MB',
      icon: 'FileDown'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Icon name="BookOpen" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold gradient-text">Грамматика</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('lessons')}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Уроки
              </button>
              <button
                onClick={() => scrollToSection('exercises')}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Упражнения
              </button>
              <button
                onClick={() => scrollToSection('tests')}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Тесты
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Справочники
              </button>
            </div>
            <Button className="gradient-bg text-white">
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </nav>

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

      <section id="lessons" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Уроки</h2>
            <p className="text-xl text-gray-600">
              Выбирай темы и изучай грамматику пошагово
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
            {lessons.map((lesson, index) => (
              <Card key={index} className="hover-lift border-2 border-gray-100 overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${lesson.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon name={lesson.icon as any} className="text-white" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{lesson.title}</CardTitle>
                        <CardDescription className="text-base">
                          {lesson.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Прогресс</span>
                      <span className="font-semibold">{lesson.progress}%</span>
                    </div>
                    <Progress value={lesson.progress} className="h-2" />
                  </div>
                  <Button className="w-full mt-4 gradient-bg text-white">
                    Продолжить
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="exercises" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Упражнения</h2>
            <p className="text-xl text-gray-600">
              Закрепляй знания на практике
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
            {exercises.map((exercise, index) => (
              <Card key={index} className="hover-lift border-2 border-gray-100">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <Icon name={exercise.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{exercise.title}</CardTitle>
                  <Badge variant="secondary" className="mt-2">
                    {exercise.type}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    <Icon name="HelpCircle" size={16} className="inline mr-1" />
                    {exercise.questions} вопросов
                  </p>
                  <Button className="w-full gradient-bg text-white">
                    Начать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tests" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Тесты</h2>
            <p className="text-xl text-gray-600">
              Проверь свои знания
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-slide-up">
            {tests.map((test, index) => (
              <Card key={index} className="hover-lift border-2 border-purple-100">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4">
                    <Icon name="ClipboardCheck" className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-2xl mb-2">{test.title}</CardTitle>
                  <Badge className="w-fit">{test.level}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="Clock" size={18} />
                      <span>{test.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="FileQuestion" size={18} />
                      <span>{test.questions} вопросов</span>
                    </div>
                  </div>
                  <Button className="w-full gradient-bg text-white">
                    Начать тест
                    <Icon name="Play" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Справочные материалы</h2>
            <p className="text-xl text-gray-600">
              Скачивай таблицы, справочники и шпаргалки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {resources.map((resource, index) => (
              <Card key={index} className="hover-lift border-2 border-blue-100">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Icon name={resource.icon as any} className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline">{resource.type}</Badge>
                        <Badge variant="secondary">{resource.size}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gradient-bg text-white">
                    <Icon name="Download" size={18} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Icon name="BookOpen" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">Грамматика</span>
          </div>
          <p className="text-purple-200 mb-6">
            Учи грамматику эффективно с интерактивными материалами
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Instagram" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
