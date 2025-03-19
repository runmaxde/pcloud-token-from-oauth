const pageUrl = window.location.href.split("?")[0];
document.getElementById("redirect_uri").value = pageUrl;

document.getElementById("code-form").addEventListener("submit", async (e) => {
	e.preventDefault();

	const client_id = document.getElementById("client_id").value;
	const redirectUri = document.getElementById("redirect_uri").value;
	if (!redirectUri.startsWith("http")) {
		alert(
			"Please enter a valid URL starting with http:// or https:// for the Redirect URI.",
		);
		return;
	}
	const url = `https://my.pcloud.com/oauth2/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirectUri}`;
	window.location.href = url;
});

const urlParams = new URLSearchParams(window.location.search);
document.getElementById("code").value = urlParams.get("code");
document.getElementById("hostname").value = urlParams.get("hostname");

document.getElementById("token-form").addEventListener("submit", async (e) => {
	e.preventDefault();

	const code = document.getElementById("code").value;
	const host = document.getElementById("hostname").value;
	const client_id = document.getElementById("client_id_token").value;
	const client_secret = document.getElementById("client_secret").value;

	fetch(
		`https://${host}/oauth2_token?${new URLSearchParams({ code, client_id, client_secret }).toString()}`,
	).then(async (res) => {
		const { access_token } = await res.json();
		document.getElementById("token").value = access_token;
	});
});
