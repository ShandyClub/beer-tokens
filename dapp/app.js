function onContentLoaded() {
  var accountSpan = document.getElementById("account");
  accountSpan.innerHTML =

    (typeof web3 === "undefined" ? "undefined" : web3.eth.accounts);
}
document.addEventListener("DOMContentLoaded", onContentLoaded);

// In the future, your users will be able to hold group conversations where all the other participants are DApps, which is kind of amazing.
