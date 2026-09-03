import { EducationItem, CertificationItem, AchievementItem } from '../types';

export const educationData: EducationItem[] = [
  {
    institution: 'Maharaja Institute of Technology',
    degree: 'B.E. in Computer Science and Engineering (Data Science)',
    period: '2022 – 2026',
    grade: 'CGPA: 9.25 / 10',
    gradeHighlight: 'CGPA 9.25 / 10',
    location: 'Mysore, Karnataka, India'
  },
  {
    institution: 'Huda Pre-University College',
    degree: 'Pre-University Education — Science',
    period: '2022',
    grade: 'Score: 91%',
    location: 'Mysore, Karnataka, India'
  },
  {
    institution: 'RGA Higher Primary School',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2020',
    grade: 'Score: 85%',
    location: 'Mysore, Karnataka, India'
  }
];

export const achievementData: AchievementItem = {
  title: 'Academic Topper — 2nd Year',
  grade: 'CGPA 9.11 / 10',
  field: 'Computer Science and Engineering (Data Science)',
  description: 'Ranked top of the academic cohort in the 2nd Year of Computer Science & Engineering (Data Science) at Maharaja Institute of Technology, reflecting strong mathematical fundamentals, algorithmic rigor, and analytical discipline.'
};

export const certificationsData: CertificationItem[] = [
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    credentialType: 'Professional Certification'
  },
  {
    title: 'Android App Development using GenAI',
    issuer: 'VTU MindMatrix',
    credentialType: 'Technical Training & Certification'
  },
  {
    title: 'Python Full Stack Web Development',
    issuer: 'Udemy',
    credentialType: 'Comprehensive Course Completion'
  },
  {
    title: 'Django Web Development',
    issuer: 'Udemy',
    credentialType: 'Backend Development Specialization'
  }
];
