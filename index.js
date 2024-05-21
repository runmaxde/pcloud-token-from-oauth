const pageUrl = window.location.href.split("?")[0]
document.getElementById("redirect_uri").value = pageUrl

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault()
  const clientId = document.getElementById("client_id").value

  const redirectUriInput = document.getElementById("redirect_uri")
  if (!redirectUriInput.value.startsWith("http")) {
    alert("Please enter a valid URL starting with http:// or https:// for the Redirect URI.")
    return
  }
  const url = `https://my.pcloud.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUriInput.value}`
  window.location.href = url
})

const urlParams = new URLSearchParams(window.location.search)
document.getElementById("token").value = urlParams.get("code")
document.getElementById("hostname").value = urlParams.get("hostname")
