import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Exercise {
  title: string;
  type: string;
  questions: number;
  icon: string;
}

interface Test {
  title: string;
  duration: string;
  questions: number;
  level: string;
}

interface Resource {
  title: string;
  type: string;
  size: string;
  icon: string;
}

interface ExercisesTestsResourcesSectionProps {
  exercises: Exercise[];
  tests: Test[];
  resources: Resource[];
  handleDownload: (resourceTitle: string) => void;
}

const ExercisesTestsResourcesSection = ({
  exercises,
  tests,
  resources,
  handleDownload,
}: ExercisesTestsResourcesSectionProps) => {
  return (
    <>
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
                  <Button 
                    className="w-full gradient-bg text-white"
                    onClick={() => handleDownload(resource.title)}
                  >
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
    </>
  );
};

export default ExercisesTestsResourcesSection;
