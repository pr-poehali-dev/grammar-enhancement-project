import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LessonsSection from '@/components/LessonsSection';
import ExercisesTestsResourcesSection from '@/components/ExercisesTestsResourcesSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [showLessonContent, setShowLessonContent] = useState(false);

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

  const handleLessonClick = (index: number) => {
    setSelectedLesson(index);
    setShowLessonContent(true);
  };

  const handleDownload = (resourceTitle: string) => {
    const blob = new Blob(
      [`# ${resourceTitle}\n\nЭто демонстрационный PDF-файл.\nВ реальном проекте здесь будет полный справочный материал.`],
      { type: 'text/plain' }
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${resourceTitle}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const lessonContents = [
    {
      title: 'Времена глаголов',
      content: `
        <h3 class="text-2xl font-bold mb-4">Present Simple</h3>
        <p class="mb-4">Используется для описания регулярных действий и общих истин.</p>
        <div class="bg-purple-50 p-4 rounded-lg mb-4">
          <p class="font-semibold mb-2">Примеры:</p>
          <p>✓ I work every day. (Я работаю каждый день)</p>
          <p>✓ The sun rises in the east. (Солнце встаёт на востоке)</p>
        </div>
        
        <h3 class="text-2xl font-bold mb-4 mt-6">Present Continuous</h3>
        <p class="mb-4">Используется для действий, происходящих прямо сейчас.</p>
        <div class="bg-blue-50 p-4 rounded-lg mb-4">
          <p class="font-semibold mb-2">Примеры:</p>
          <p>✓ I am working now. (Я работаю сейчас)</p>
          <p>✓ She is reading a book. (Она читает книгу)</p>
        </div>
      `
    },
    {
      title: 'Артикли',
      content: `
        <h3 class="text-2xl font-bold mb-4">Неопределённый артикль (a/an)</h3>
        <p class="mb-4">Используется с исчисляемыми существительными в единственном числе.</p>
        <div class="bg-purple-50 p-4 rounded-lg mb-4">
          <p class="font-semibold mb-2">Правило:</p>
          <p><strong>a</strong> - перед согласными: a book, a car</p>
          <p><strong>an</strong> - перед гласными: an apple, an hour</p>
        </div>
        
        <h3 class="text-2xl font-bold mb-4 mt-6">Определённый артикль (the)</h3>
        <p class="mb-4">Используется когда предмет известен или упоминается повторно.</p>
        <div class="bg-blue-50 p-4 rounded-lg">
          <p class="font-semibold mb-2">Примеры:</p>
          <p>✓ The book on the table is mine.</p>
          <p>✓ I saw a dog. The dog was cute.</p>
        </div>
      `
    },
    {
      title: 'Модальные глаголы',
      content: `
        <h3 class="text-2xl font-bold mb-4">Can / Could</h3>
        <p class="mb-4"><strong>Can</strong> - способность, разрешение (настоящее время)</p>
        <p class="mb-4"><strong>Could</strong> - способность в прошлом, вежливая просьба</p>
        
        <h3 class="text-2xl font-bold mb-4 mt-6">Must / Should</h3>
        <p class="mb-4"><strong>Must</strong> - обязанность, необходимость</p>
        <p class="mb-4"><strong>Should</strong> - совет, рекомендация</p>
        
        <div class="bg-purple-50 p-4 rounded-lg">
          <p class="font-semibold mb-2">Примеры:</p>
          <p>✓ You must wear a helmet. (обязательно)</p>
          <p>✓ You should exercise regularly. (совет)</p>
        </div>
      `
    },
    {
      title: 'Условные предложения',
      content: `
        <h3 class="text-2xl font-bold mb-4">Zero Conditional</h3>
        <p class="mb-4">Для общих истин и законов природы.</p>
        <div class="bg-purple-50 p-4 rounded-lg mb-4">
          <p><strong>If + Present Simple, Present Simple</strong></p>
          <p>✓ If you heat water, it boils.</p>
        </div>
        
        <h3 class="text-2xl font-bold mb-4 mt-6">First Conditional</h3>
        <p class="mb-4">Для реальных ситуаций в будущем.</p>
        <div class="bg-blue-50 p-4 rounded-lg">
          <p><strong>If + Present Simple, will + infinitive</strong></p>
          <p>✓ If it rains, I will stay home.</p>
        </div>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Navigation scrollToSection={scrollToSection} />
      
      <HeroSection scrollToSection={scrollToSection} />
      
      <LessonsSection
        lessons={lessons}
        lessonContents={lessonContents}
        showLessonContent={showLessonContent}
        selectedLesson={selectedLesson}
        handleLessonClick={handleLessonClick}
        setShowLessonContent={setShowLessonContent}
      />
      
      <ExercisesTestsResourcesSection
        exercises={exercises}
        tests={tests}
        resources={resources}
        handleDownload={handleDownload}
      />
    </div>
  );
};

export default Index;
