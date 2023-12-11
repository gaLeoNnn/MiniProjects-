const StepOneNextBtn = document.querySelector("#StepOneNext");
const StepTwoNextBtn = document.querySelector("#StepTwoNext");
const StepOneContainer = document.querySelector("#StepOneContainer");
const StepTwoContainer = document.querySelector("#StepTwoContainer");
const StepThreeContainer = document.querySelector("#StepThreeContainer");

let data = {};

StepOneNextBtn.addEventListener("click", e => {
  e.preventDefault();
  const firstName = document.querySelector("#first_name").value;
  const lastName = document.querySelector("#last_name").value;
  const email = document.querySelector("#email").value;
  data = { ...data, firstName, lastName, email };
  if (validateEmail(email) && validateName(firstName)) {
    StepOneContainer.style.display = "none";
    StepTwoContainer.style.display = "block";
  } else {
    if (!validateName(firstName)) {
      document.querySelector("#first_name_error").style.display = "block";
    }
    if (!validateEmail(email)) {
      document.querySelector("#email_error").style.display = "block";
    }
  }
});

StepTwoNextBtn.addEventListener("click", e => {
  e.preventDefault();
  const contact = document.querySelector("#contact").value;
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;
  data = { ...data, contact, city, country };

  StepTwoContainer.style.display = "none";
  StepThreeContainer.style.display = "block";
});

const form = document.querySelector("#MultiStepForm");

form.addEventListener("submit", e => {
  e.preventDefault();

  const program = document.querySelector("#select_program").value;
  const text = document.querySelector("#message").value;
  data = { ...data, program, text };

  console.log(data);
  fetch("URL_сервера", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      StepThreeContainer.style.display = "none";
      document.querySelector("#SuccessContainer").style.display = "flex";
      document.querySelector("#SuccessContainer").style.position = "absolute";

      throw new Error("Network response was not ok.");
    })
    .then(data => {
      console.log("Данные успешно отправлены на сервер:", data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

////VALIDATIONS
const validateName = name => {
  return name.trim().length >= 3;
};

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
////
