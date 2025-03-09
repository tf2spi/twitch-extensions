const iField = document.getElementById("inputtest");
const oField = document.getElementById("outputtest");
window.Twitch.ext.configuration.onChanged(function() {
	console.log(Twitch.ext.configuration);
	cfg = Twitch.ext.configuration.broadcaster;
	if (cfg != undefined) {
		console.log("Got a config!");
		oField.innerText = cfg.content;
	}
});
iField.addEventListener("keypress", function(event) {
	if (event.key == "Enter") {
		event.preventDefault();
		Twitch.ext.configuration.set("broadcaster", "1", iField.value);
		oField.innerText = iField.value;
		iField.value = "";
	}
});


