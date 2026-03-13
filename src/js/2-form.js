const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: ""
};

// Завантаження даних з localStorage
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.email.value = formData.email;
  form.message.value = formData.message;
}

// Обробка input
form.addEventListener('input', (e) => {
  const { name, value } = e.target;
  formData[name] = value; // зберігаємо **точно таке ж значення**
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробка submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (form.email.value.trim() === "" || form.message.value.trim() === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
});