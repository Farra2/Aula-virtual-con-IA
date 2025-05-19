export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor';
  enrolledCourses: string[];
  interactions: CourseInteraction[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  tags: string[];
  thumbnail: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface CourseInteraction {
  courseId: string;
  timestamp: number;
  type: 'view' | 'enroll' | 'complete' | 'like';
}