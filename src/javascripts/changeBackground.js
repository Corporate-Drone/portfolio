
const changeBackground = (theme) => {
    if (theme) {
        document.body.style.backgroundColor = "#353535";
        document.body.style.color = "#fff";
        document.body.style.transition = "1s";
      } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.transition = "1s";
        document.body.style.color = "#353535";
      }
}

export default changeBackground;
