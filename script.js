function tweet() {
    const input = document.getElementById("TweetInput");
    const count = document.getElementById("CharCount");
    const button = document.getElementById("TweetButton");

    const MAX = 160;
    const length = input.value.length;
    const remaining = MAX - length;
    count.textContent = remaining;

    if (remaining < 0 || length === 0) {
        button.disabled = true;
        count.style.color = "#657786";
    } else {
        button.disabled = false;
        count.style.color = "red";
    }
}

function input(){
    tweet();
}

document.getElementById("TweetInput").addEventListener("input", input);