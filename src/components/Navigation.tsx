import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  scrollToSection: (section: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
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
  );
};

export default Navigation;
