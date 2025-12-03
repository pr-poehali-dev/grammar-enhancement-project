import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Lesson {
  title: string;
  description: string;
  icon: string;
  progress: number;
  color: string;
}

interface LessonContent {
  title: string;
  content: string;
}

interface LessonsSectionProps {
  lessons: Lesson[];
  lessonContents: LessonContent[];
  showLessonContent: boolean;
  selectedLesson: number | null;
  handleLessonClick: (index: number) => void;
  setShowLessonContent: (show: boolean) => void;
}

const LessonsSection = ({
  lessons,
  lessonContents,
  showLessonContent,
  selectedLesson,
  handleLessonClick,
  setShowLessonContent,
}: LessonsSectionProps) => {
  return (
    <>
      {showLessonContent && selectedLesson !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <h2 className="text-3xl font-bold gradient-text">{lessonContents[selectedLesson].title}</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowLessonContent(false)}
              >
                <Icon name="X" size={24} />
              </Button>
            </div>
            <div 
              className="p-6 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: lessonContents[selectedLesson].content }}
            />
            <div className="sticky bottom-0 bg-white border-t p-6">
              <Button 
                className="w-full gradient-bg text-white"
                onClick={() => setShowLessonContent(false)}
              >
                Завершить урок
                <Icon name="CheckCircle" size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}
      
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
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Прогресс</span>
                      <span className="font-semibold">{lesson.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${lesson.color} rounded-full transition-all duration-500`}
                        style={{ width: `${lesson.progress}%` }}
                      />
                    </div>
                  </div>
                  <Button 
                    className="w-full gradient-bg text-white"
                    onClick={() => handleLessonClick(index)}
                  >
                    Продолжить
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LessonsSection;
