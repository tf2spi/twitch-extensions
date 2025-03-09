
const helpText = `Commands
\thelp:  Print this help text again
\trules: Print the rules text again
`

const iField = document.getElementById("coninput");
const oField = document.getElementById("conoutput");
iField.addEventListener("keypress", function(event) {
	if (event.key == "Enter") {
		event.preventDefault();
		cmd = iField.value;
		cmdargs = cmd.split(" ");
		console.log(cmdargs)
		if (cmdargs.length > 0) {
			iField.value = "";
			output = oField.innerText;
			output += `> ${cmd}\n`;

			cmdmatch = cmdargs[0].toLowerCase();
			if (cmdmatch == "clear") {
				output = "";
			} else if (cmdmatch == "help") {
				output += helpText;
			}
			oField.innerText = output;
		}
	}
});
