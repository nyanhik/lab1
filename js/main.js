function encryptMessage() {

	var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
	var enterText = document.getElementById("text-to-convert").value.toUpperCase();
	var key = document.getElementById("key").value.toUpperCase();

	if (!enterText) {
		alert('Введите текст!')
	} else {
		if (!key) {
			alert('Введите ключ!')
		} else {
			var encryptMessage = "";
			var f = 0;
			var k = 0;

			for (var i = 0; i < enterText.length; i++) {
				if (f < key.length) {
				} else {
					f = 0
				}
				if (alphabet.indexOf(enterText[i]) == -1 || alphabet.indexOf(key[f]) == -1) {
					encryptMessage += enterText[i]
				} else {
					k = (alphabet.indexOf(enterText[i]) + alphabet.indexOf(key[f])) % 26;
					encryptMessage += alphabet[k];
				}
			f++
			}
		document.getElementById("encrypt-message").value = encryptMessage;
		}
	}
}

function decodeMessage() {

	var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
	var enterText = "";
	var key = document.getElementById("key").value.toUpperCase();
	var encryptMessage = document.getElementById("encrypt-message").value.toUpperCase();

	if (!encryptMessage) {
		alert('Введите зашифрованный текст!')
	} else {
		if (!key) {
			alert('Введите ключ!')
		}else {
			var f = 0;
			var k = 0;

			for (var i = 0; i < encryptMessage.length; i++) {
				if (f < key.length) {
				} else {
					f = 0
				}
				if (alphabet.indexOf(encryptMessage[i]) == -1 || alphabet.indexOf(key[f]) == -1) {
					enterText += encryptMessage[i]
				} else {
					k = (26 + (alphabet.indexOf(encryptMessage[i]) - alphabet.indexOf(key[f]))) % 26;
					enterText += alphabet[k];
				}
			f++
			}
		document.getElementById("text-to-convert").value = enterText;
		}
	}
}
