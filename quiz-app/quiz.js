const questionsAPI = "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz";

let questions;
let sum = 0;

const request = async () => {
  try {
    const response = await fetch(questionsAPI);

    if (!response.ok) {
      throw new Error();
    }

    const data = response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    questions = await request();
    console.log(questions);
  } catch (error) {
    console.log(error);
  }
};

getData();

const quiz = document.querySelector(".quiz");
const count = document.querySelector("#aside-counter").querySelector("span");

quiz.addEventListener("change", e => {
  const targetType = e.target.type;
  const targetName = e.target.name;
  const targetValue = e.target.value;
  const allOptions = document.querySelectorAll(`input[name="${targetName}"]`);
  if (targetType === "radio") {
    allOptions.forEach(option => {
      if (!option.checked) {
        option.disabled = true;
        option.style.opacity = "0.5";
      }
    });

    if (targetName === "q1") {
      if (questions[0].answer == targetValue) {
        const wrapper = e.target.parentNode.parentNode;
        sum += 1;
        wrapper.classList.add("correct");
        console.log(count);
        count.textContent = `${sum}/5`;
      } else {
        const wrapper = e.target.parentNode.parentNode;
        wrapper.classList.add("incorrect");
        allOptions.forEach(item => {
          if (item.value == questions[0].answer) {
            item.parentNode.parentNode.classList.add("correct");
          }
        });
      }
    }

    if (targetName === "q2") {
      if (questions[1].answer == targetValue) {
        const wrapper = e.target.parentNode.parentNode;
        wrapper.classList.add("correct");
        sum += 1;
        count.textContent = `${sum}/5`;
      } else {
        const wrapper = e.target.parentNode.parentNode;
        wrapper.classList.add("incorrect");
        allOptions.forEach(item => {
          if (item.value == questions[1].answer) {
            item.parentNode.parentNode.classList.add("correct");
          }
        });
      }
    }

    if (targetName === "q3") {
      if (questions[2].answer == targetValue) {
        const wrapper = e.target.parentNode.parentNode;
        wrapper.classList.add("correct");
        sum += 1;
        count.textContent = `${sum}/5`;
      } else {
        const wrapper = e.target.parentNode.parentNode;
        wrapper.classList.add("incorrect");
        allOptions.forEach(item => {
          if (item.value == questions[2].answer) {
            item.parentNode.parentNode.classList.add("correct");
          }
        });
      }
    }

    if (targetName === "q4") {
      if (questions[3].answer == targetValue) {
        const wrapper = e.target.parentNode.parentNode;
        wrapper.classList.add("correct");
        sum += 1;
        count.textContent = `${sum}/5`;
      } else {
        const wrapper = e.target.parentNode.parentNode;
        wrapper.classList.add("incorrect");
        allOptions.forEach(item => {
          if (item.value == questions[3].answer) {
            item.parentNode.parentNode.classList.add("correct");
          }
        });
      }
    }

    if (targetName === "q5") {
      if (questions[4].answer == targetValue) {
        const wrapper = e.target.parentNode.parentNode;
        wrapper.classList.add("correct");
        sum += 1;
        count.textContent = `${sum}/5`;
      } else {
        const wrapper = e.target.parentNode.parentNode;
        wrapper.classList.add("incorrect");
        allOptions.forEach(item => {
          if (item.value == questions[4].answer) {
            item.parentNode.parentNode.classList.add("correct");
          }
        });
      }
    }
  }
});

const btnSubmit = document.querySelector("#btn-submit");
const modal = document.querySelector("#modal-wrapper");

btnSubmit.addEventListener("click", e => {
  e.preventDefault();
  modal.querySelector("span").textContent = sum;
  modal.style.display = "block";
});
