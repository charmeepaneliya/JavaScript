
document.getElementById("form").addEventListener("submit", (e) => {

    e.preventDefault();

    let currentPwd = 12345;

    let oldPwd = Number(document.getElementById("oldPwd").value);
    let newPwd = Number(document.getElementById("newPwd").value);

    console.log(typeof newPwd);
    console.log("current", typeof currentPwd);

    let status = document.getElementById("status");

    if (oldPwd.length < 5) {
        status.textContent = "plz enter 5 character password"
    } else if (oldPwd !== currentPwd) {
        status.textContent = "old password is not match with current password"
    } else if (newPwd.length < 5) {
        status.textContent = "plz enter 5 character password"

    } else if (newPwd === currentPwd) {
        status.textContent = "new password is same as a old password"
    } else {
        currentPwd = newPwd;
        status.textContent = "password updated"
    }


});