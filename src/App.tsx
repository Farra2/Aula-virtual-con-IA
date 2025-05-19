import React from 'react';
import { GraduationCap } from 'lucide-react';
import useStore from './store/useStore';
import CourseCard from './components/CourseCard';
import Recommendations from './components/Recommendations';

function App() {
  const { courses, currentUser, setCurrentUser } = useStore();

  // Simulated login for demo
  const login = () => {
    setCurrentUser({
      id: '1',
      name: 'Luis Mercado',
      email: 'luismer33@example.com',
      role: 'student',
      enrolledCourses: [],
      interactions: []
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-900">Smart Learning</h1>
            </div>
            {!currentUser ? (
              <button
                onClick={login}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Inicio de Sesion
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Bienvenido, {currentUser.name}</span>
                <button
                  onClick={() => setCurrentUser(null)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cerrar Sesion
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentUser ? (
          <div className="space-y-12">
            <Recommendations />
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">All Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Bienvenido al Prototipo EPA
            </h2>
            <p className="mt-4 text-gray-600">
              Inicie sesión para ver recomendaciones de cursos personalizados
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;