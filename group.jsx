#target photoshopapp.bringToFront();

if (documents.length == 0) {
	alert("no file found");
} else {
	var setName = prompt("输入分组名", "");
	if (setName != null) {
		var docRef = activeDocument;
		var layers = docRef.layerSets;

		if (layers.length == 0) {
			alert("no group found");
		} else {
			for (var i = 0; i < layers.length; i++) {
				layers[i].name = setName + [i];
			}
		}
	}
}
