// interface Student{
//     id:number;
//     name:string;
//     score:number;
//     isActive:boolean;
// }
// const students: Student[] = [
//   { id: 1, name: "Ahmed", score: 15, isActive: true },
//   { id: 2, name: "Sara", score: 18, isActive: true },
//   { id: 3, name: "Yassine", score: 10, isActive: false }
// ];

// //derna : number 7itach en return number
// function getAverageScore(students: Student[]): number {
//   const total = students.reduce((sum, student) => sum + student.score, 0);
//   return total / students.length;
// }
// //derna : student[] 7itach en return array dyal student[]
//  function getActive(student: Student[]): Student[] {
//     return student.filter(student=>student.isActive)
//  }

// // إذا النقطة ديال الطالب الحالي أكبر من top → نبدلو top بالطالب الحالي
// // إذا لا → نخليو top كما هو
//  function getTopStudent(students: Student[]): Student | null {
//     if(students.length===0)return null;
//     return students.reduce((top, student) =>
//     student.score > top.score ? student : top
//     );
//  }

//    function addStudent(students: Student[], newStudent: Student): Student[] {
//     const exists = students.some(student => student.id === newStudent.id);

//   if (exists) {
   
//     return students;
//   }

 
//   return [...students, newStudent]; }


// 1️⃣ تعريف Student (interface)
export

interface Student {
  id: number;
  name: string;
  score: number;
  isActive: boolean;
}

// 2️⃣ Array ديال الطلاب
let students: Student[] = [
  { id: 1, name: "Ahmed", score: 15, isActive: true },
  { id: 2, name: "Sara", score: 18, isActive: true },
  { id: 3, name: "Yassine", score: 10, isActive: false }
];

// ----------------------
// 3️⃣ Functions
// ----------------------
function getAverageScore(students: Student[]): number {
  const total = students.reduce((sum, student) => sum + student.score, 0);
  return total / students.length;
}

function getActiveStudents(students: Student[]): Student[] {
  return students.filter(student => student.isActive);
}

function getTopStudent(students: Student[]): Student | null {
  if (students.length === 0) return null;
  return students.reduce((top, student) =>
    student.score > top.score ? student : top
  );
}

function addStudent(students: Student[], newStudent: Student): Student[] {
  const exists = students.some(student => student.id === newStudent.id);
  if (exists) return students;
  return [...students, newStudent];
}

// ----------------------
// 4️⃣ Functions لتحديث الواجهة
// ----------------------
function updateUI() {
  const averageEl = document.getElementById("average") as HTMLParagraphElement;
  const activeEl = document.getElementById("active") as HTMLParagraphElement;
  const topEl = document.getElementById("top") as HTMLParagraphElement;
  const listEl = document.getElementById("studentList") as HTMLUListElement;

  // حساب المعدل
  averageEl.textContent = `Average score: ${getAverageScore(students).toFixed(2)}`;

  // الطلاب النشيطين
  const activeStudents = getActiveStudents(students);
  activeEl.textContent = `Active students: ${activeStudents.map(s => s.name).join(", ")}`;

  // أفضل طالب
  const topStudent = getTopStudent(students);
  topEl.textContent = topStudent ? `Top student: ${topStudent.name} (${topStudent.score})` : "No students";

  // قائمة الطلاب
  listEl.innerHTML = "";
  students.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.name} (Score: ${s.score}) ${s.isActive ? "[Active]" : "[Inactive]"}`;
    listEl.appendChild(li);
  });
}

// ----------------------
// 5️⃣ Event Listener لإضافة طالب جديد
// ----------------------
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
addBtn.addEventListener("click", () => {
  const newId = Number((document.getElementById("newId") as HTMLInputElement).value);
  const newName = (document.getElementById("newName") as HTMLInputElement).value;
  const newScore = Number((document.getElementById("newScore") as HTMLInputElement).value);
  const newActive = (document.getElementById("newActive") as HTMLInputElement).checked;

  if (!newId || !newName || !newScore) {
    alert("Please fill all fields correctly.");
    return;
  }

  const newStudent: Student = {
    id: newId,
    name: newName,
    score: newScore,
    isActive: newActive
  };

  students = addStudent(students, newStudent);
  updateUI();
});


updateUI();
