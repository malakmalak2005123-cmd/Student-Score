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

//derna : number 7itach en return number
function getAverageScore(students: Student[]): number {
  const total = students.reduce((sum, student) => sum + student.score, 0);
  return total / students.length;
}
//derna : student[] 7itach en return array dyal student[]
 function getActive(student: Student[]): Student[] {
    return student.filter(student=>student.isActive)
 }

// إذا النقطة ديال الطالب الحالي أكبر من top → نبدلو top بالطالب الحالي
// إذا لا → نخليو top كما هو
 function getTopStudent(students: Student[]): Student | null {
    if(students.length===0)return null;
    return students.reduce((top, student) =>
    student.score > top.score ? student : top
    );
 }

   function addStudent(students: Student[], newStudent: Student): Student[] {
  const exists = students.some(student => student.id === newStudent.id);

  if (exists) {
   
    return students;
  }

 
  return [...students, newStudent]; }