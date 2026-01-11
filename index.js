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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 2️⃣ Array ديال الطلاب
var students = [
    { id: 1, name: "Ahmed", score: 15, isActive: true },
    { id: 2, name: "Sara", score: 18, isActive: true },
    { id: 3, name: "Yassine", score: 10, isActive: false }
];
// ----------------------
// 3️⃣ Functions
// ----------------------
function getAverageScore(students) {
    var total = students.reduce(function (sum, student) { return sum + student.score; }, 0);
    return total / students.length;
}
function getActiveStudents(students) {
    return students.filter(function (student) { return student.isActive; });
}
function getTopStudent(students) {
    if (students.length === 0)
        return null;
    return students.reduce(function (top, student) {
        return student.score > top.score ? student : top;
    });
}
function addStudent(students, newStudent) {
    var exists = students.some(function (student) { return student.id === newStudent.id; });
    if (exists)
        return students;
    return __spreadArray(__spreadArray([], students, true), [newStudent], false);
}
// ----------------------
// 4️⃣ Functions لتحديث الواجهة
// ----------------------
function updateUI() {
    var averageEl = document.getElementById("average");
    var activeEl = document.getElementById("active");
    var topEl = document.getElementById("top");
    var listEl = document.getElementById("studentList");
    // حساب المعدل
    averageEl.textContent = "Average score: ".concat(getAverageScore(students).toFixed(2));
    // الطلاب النشيطين
    var activeStudents = getActiveStudents(students);
    activeEl.textContent = "Active students: ".concat(activeStudents.map(function (s) { return s.name; }).join(", "));
    // أفضل طالب
    var topStudent = getTopStudent(students);
    topEl.textContent = topStudent ? "Top student: ".concat(topStudent.name, " (").concat(topStudent.score, ")") : "No students";
    // قائمة الطلاب
    listEl.innerHTML = "";
    students.forEach(function (s) {
        var li = document.createElement("li");
        li.textContent = "".concat(s.name, " (Score: ").concat(s.score, ") ").concat(s.isActive ? "[Active]" : "[Inactive]");
        listEl.appendChild(li);
    });
}
// ----------------------
// 5️⃣ Event Listener لإضافة طالب جديد
// ----------------------
var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    var newId = Number(document.getElementById("newId").value);
    var newName = document.getElementById("newName").value;
    var newScore = Number(document.getElementById("newScore").value);
    var newActive = document.getElementById("newActive").checked;
    if (!newId || !newName || !newScore) {
        alert("Please fill all fields correctly.");
        return;
    }
    var newStudent = {
        id: newId,
        name: newName,
        score: newScore,
        isActive: newActive
    };
    students = addStudent(students, newStudent);
    updateUI();
});
updateUI();
