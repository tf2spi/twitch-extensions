const helpText = `Commands
\thelp:    Print this help text again
\tclear:   Clear the screen
\tfortune: Print a fortune <3
`;

const helpTextVerbose = `${helpText}
Remember to view the chat rules
For links, look in my About links
`

const iField = document.getElementById("coninput");
const oField = document.getElementById("conoutput");
iField.addEventListener("keypress", function(event) {
	if (event.key == "Enter") {
		event.preventDefault();
		cmd = iField.value;
		cmdargs = cmd.split(" ");
		console.log(cmdargs);
		if (cmdargs.length > 0) {
			iField.value = "";
			output = oField.innerText;
			output += `> ${cmd}\n`;

			cmdmatch = cmdargs[0].toLowerCase();
			if (cmdmatch == "clear") {
				output = "";
			} else if (cmdmatch == "help") {
				output += helpTextVerbose;
			} else if (cmdmatch == "fortune") {
				fortune = "You will have a good day today :) (This is actually hardcoded... TODO)";
				output += `${fortune}\n`
			} else {
				output += `Unknown command\n${helpText}`;
			}
			oField.innerText = output;
		}
	}
});

oField.innerText = `Hello World!
Type any command (like "help") and press Enter to run it!
`
