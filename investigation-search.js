// define variables

var namesInput = document.getElementById('names-input');

var generalCheck = document.getElementById('general-check');
var adverseCheck = document.getElementById('adverse-check');
var socialCheck = document.getElementById('social-check');

var generalString = document.getElementById('general-string');
var adverseString = document.getElementById('adverse-string');
var socialString = document.getElementById('social-string');

var searchButton = document.getElementById('search-button');

var linkZone = document.getElementById('link-zone');

//creates a button for each subject
function createResults() {

	while (linkZone.firstChild) {
		linkZone.removeChild(linkZone.firstChild);
	  }

	nameParserOutput = nameParser();

	if (nameParserOutput != '') {
		var lzBar = document.createElement('hr');
		var lzLabel = document.createElement('p');
		lzLabel.textContent = 'Click to open results [make sure to allow pop-ups!]';
		linkZone.appendChild(lzBar);
		linkZone.appendChild(lzLabel);

	for (i=0;i<nameParserOutput.length;i++) {
		var newButton = document.createElement('button');
		newButton.textContent = nameParserOutput[i];
		newButton.classList.add('btn', 'btn-primary');
		newButton.setAttribute('onclick', 'openLinks('+ '"' + newButton.textContent + '"' +')');
		linkZone.appendChild(newButton);
	}

	var clearButton = document.createElement('button');
	clearButton.classList.add('btn', 'btn-outline-danger');
	clearButton.textContent = 'Clear all';
	clearButton.setAttribute('onclick', 'clearAll()');
	linkZone.appendChild(clearButton);
	}
}

//cleans up the free text name input
function nameParser() {
	var nameList = namesInput.value;
	nameList = nameList.replace(/\n/g, ",").split(",");
	nameList = nameList.map(item => {
		return item.trim();
	});
	nameList = nameList.filter(item => item);
	return nameList;
}

//opens search urls for the subject
function openLinks(name) {
	name = encodeURIComponent(name);

	if (generalCheck.checked) {
		window.open(generalString.value + '"' + name + '"');
	}
	if (adverseCheck.checked) {
		window.open(generalString.value + '"' + name + '"+' + adverseString.value);
	}
	if (socialCheck.checked) {
		window.open(generalString.value + '"' + name + '"+' + socialString.value);
	}
}

function clearAll() {
	while (linkZone.firstChild) {
		linkZone.removeChild(linkZone.firstChild);
	  }

	namesInput.value = '';
}
