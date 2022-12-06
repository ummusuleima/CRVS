$(document).ready(function () {
  const parentDetails = document.querySelectorAll(".parentDetails");
  const childDetails = document.querySelectorAll(".childDetails");

  parentDetails.forEach((dt) => {
    dt.addEventListener("toggle", toggleOpenOneOnly_);
  });

  function toggleOpenOneOnly_(e) {
    if (this.open) {
      parentDetails.forEach((deet) => {
        if (deet != this && deet.open) deet.open = false;
      });
    }
  }

  childDetails.forEach((dt) => {
    dt.addEventListener("toggle", toggleOpenOneOnly);
  });

  function toggleOpenOneOnly(e) {
    if (this.open) {
      childDetails.forEach((deet) => {
        if (deet != this && deet.open) deet.open = false;
      });
    }
  }
});
