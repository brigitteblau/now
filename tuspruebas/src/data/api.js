//src/data/api.js

const BASE_URL = "https://tus-pruebas-api.vercel.app";

// GET /schools
export async function getSchools() {
  const response = await fetch(`${BASE_URL}/schools`);
  if (!response.ok) throw new Error("Error obteniendo las schools");
  return response.json();
}

// POST /years
export async function getYears(schoolId) {
  const response = await fetch(`${BASE_URL}/years`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ school: schoolId }),
  });
  if (!response.ok) throw new Error("Error obteniendo los years");
  console.log(response.json)
  return response.json();
}

// POST /subject
export async function getSubjects(schoolId, yearId) {
  const response = await fetch(`${BASE_URL}/subject`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ school: schoolId, year: yearId }),
  });
  if (!response.ok) throw new Error("Error obteniendo subjects");
  const data = await response.json(); 
  console.log(data); 
  return data;
}

// POST /topics
export async function getTopics(schoolId, yearId, subjectId) {
  const response = await fetch(`${BASE_URL}/topics`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ school: schoolId, year: yearId, subject: subjectId }),
  });
  if (!response.ok) throw new Error("Error obteniendo topics");
  console.log(response.json)
  return response.json();
}

// POST /tests
export async function getTests(schoolId, yearId, subjectId, topicId) {
  const response = await fetch(`${BASE_URL}/tests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      school: schoolId,
      year: yearId,
      subject: subjectId,
      topic: topicId,
    }),
  });
  if (!response.ok) throw new Error("Error obteniendo tests");
  return response.json(); 
}
