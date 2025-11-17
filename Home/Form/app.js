const weddingRadioButton = document.querySelector(".radio-wedding");
const partyRadioButton = document.querySelector(".radio-party");
const photoshootRadioButton = document.querySelector(".radio-photoshoot");

const weddingLogo = document.querySelector("#wedding-checked");
const partyLogo = document.querySelector("#party-checked");
const photoshootLogo = document.querySelector("#photoshoot-checked");

const callRadioButton = document.querySelector("#call");
const callDetailInfo = document.querySelector(".call-info");
const whatsappRadioButton = document.querySelector("#whatsapp");
const whatsappDetailInfo = document.querySelector(".whatsapp-info");
const smsRadioButton = document.querySelector("#sms");
const smsDetailInfo = document.querySelector(".sms-info");
const emailRadioButton = document.querySelector("#email");
const emailDetailInput = document.querySelector("#email-detail");
const callDetailInput = document.querySelector("#call-detail");
const whatsappDetailInput = document.querySelector("#whatsapp-detail");
const smsDetailInput = document.querySelector("#sms-detail");

weddingRadioButton.addEventListener("click", (event) => {
  event.preventDefault();
  weddingLogo.classList.add("checked");
  partyLogo.classList.remove("checked");
  photoshootLogo.classList.remove("checked");
});
partyRadioButton.addEventListener("click", (event) => {
  event.preventDefault();
  partyLogo.classList.add("checked");
  weddingLogo.classList.remove("checked");
  photoshootLogo.classList.remove("checked");
});
photoshootRadioButton.addEventListener("click", (event) => {
  event.preventDefault();
  photoshootLogo.classList.add("checked");
  weddingLogo.classList.remove("checked");
  partyLogo.classList.remove("checked");
});

// control datepicker requirement with checkbox
const notDecidedCheckButton = document.querySelector("#date-not-decided");
notDecidedCheckButton.addEventListener("click", () => {
  const inputDate = document.querySelector(".event-schedule");
  if (inputDate.getAttribute("required")) {
    inputDate.removeAttribute("required", true);
  } else {
    inputDate.setAttribute("required", true);
  }
});

// radio function
callRadioButton.addEventListener("click", () => {
  callDetailInfo.classList.add("detail-checked");
  whatsappDetailInfo.classList.remove("detail-checked");
  smsDetailInfo.classList.remove("detail-checked");
  emailDetailInput.classList.remove("detail-checked");
  callDetailInput.setAttribute("required", true);
  whatsappDetailInput.removeAttribute("required", true);
  smsDetailInput.removeAttribute("required", true);
  emailDetailInput.removeAttribute("required", true);
});

whatsappRadioButton.addEventListener("click", () => {
  whatsappDetailInfo.classList.add("detail-checked");
  callDetailInfo.classList.remove("detail-checked");
  smsDetailInfo.classList.remove("detail-checked");
  emailDetailInput.classList.remove("detail-checked");
  whatsappDetailInput.setAttribute("required", true);
  callDetailInput.removeAttribute("required", true);
  smsDetailInput.removeAttribute("required", true);
  emailDetailInput.removeAttribute("required", true);
});

smsRadioButton.addEventListener("click", () => {
  smsDetailInfo.classList.add("detail-checked");
  callDetailInfo.classList.remove("detail-checked");
  whatsappDetailInfo.classList.remove("detail-checked");
  emailDetailInput.classList.remove("detail-checked");
  smsDetailInput.setAttribute("required", true);
  callDetailInput.removeAttribute("required", true);
  whatsappDetailInput.removeAttribute("required", true);
  emailDetailInput.removeAttribute("required", true);
});

emailRadioButton.addEventListener("click", () => {
  emailDetailInput.classList.add("detail-checked");
  callDetailInfo.classList.remove("detail-checked");
  whatsappDetailInfo.classList.remove("detail-checked");
  smsDetailInfo.classList.remove("detail-checked");
  emailDetailInput.setAttribute("required", true);
  callDetailInput.removeAttribute("required", true);
  whatsappDetailInput.removeAttribute("required", true);
  smsDetailInput.removeAttribute("required", true);
});

// form submit
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const eventTypeInput = form.querySelector(
      'input[name="event-type"]:checked'
    );
    const methodInput = form.querySelector('input[name="method"]:checked');

    const eventType = eventTypeInput ? eventTypeInput.value : "";
    const date = (form.querySelector('input[name="date"]') || {}).value || "";
    const time = (form.querySelector('select[name="time"]') || {}).value || "";
    const nameVal =
      (form.querySelector('input[name="name"]') || {}).value || "";
    const method = methodInput ? methodInput.value : "";

    let contactDetail = "";
    let contactCode = ""; // international code like +1
    switch (method) {
      case "call":
        contactDetail =
          (document.getElementById("call-detail") || {}).value || "";
        {
          const sel =
            (callDetailInfo && callDetailInfo.querySelector("select")) || null;
          contactCode = sel ? sel.value : "";
        }
        break;
      case "whatsapp":
        contactDetail =
          (document.getElementById("whatsapp-detail") || {}).value || "";
        {
          const sel =
            (whatsappDetailInfo &&
              whatsappDetailInfo.querySelector("select")) ||
            null;
          contactCode = sel ? sel.value : "";
        }
        break;
      case "sms":
        contactDetail =
          (document.getElementById("sms-detail") || {}).value || "";
        {
          const sel =
            (smsDetailInfo && smsDetailInfo.querySelector("select")) || null;
          contactCode = sel ? sel.value : "";
        }
        break;
      case "email":
        contactDetail =
          (document.getElementById("email-detail") || {}).value || "";
        break;
      default: {
        const any = form.querySelector('input[name="contact-detail"]');
        contactDetail = any ? any.value : "";
      }
    }

    console.log("- event-type:", eventType);
    console.log("- date:", date);
    console.log("- time:", time);
    console.log("- name:", nameVal);
    console.log("- method:", method);
    if (method === "call" || method === "whatsapp" || method === "sms") {
      console.log("- contact-code:", contactCode);
    }
    console.log("- contact-detail:", contactDetail);
  });
  // form.reset()
}
