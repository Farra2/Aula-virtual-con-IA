import React from 'react';
import { Course } from '../types';
import { BookOpen, Clock, BarChart } from 'lucide-react';
import useStore from '../store/useStore';

interface Props {
  course: Course;
}

export const CourseCard: React.FC<Props> = ({ course }) => {
  const { currentUser, addInteraction } = useStore();

  const handleClick = () => {
    if (!currentUser) return;
    
    addInteraction({
      courseId: course.id,
      timestamp: Date.now(),
      type: 'view'
    });
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <img 
        src={course.thumbnail} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart className="w-4 h-4" />
            <span className="capitalize">{course.difficulty}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.instructor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;