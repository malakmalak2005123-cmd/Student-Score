interface Student{
    id:number;
    name:string;
    score:number;
    isActive:boolean;
}
const students: Student[] = [
  { id: 1, name: "Ahmed", score: 15, isActive: true },
  { id: 2, name: "Sara", score: 18, isActive: true },
  { id: 3, name: "Yassine", score: 10, isActive: false }
];


function getAverageScore(students: Student[]): number {
  const total = students.reduce((sum, student) => sum + student.score, 0);
  return total / students.length;
}
 function getActive(student: Student[]): Student[] {
    return student.filter(student=>student.isActive)
 }