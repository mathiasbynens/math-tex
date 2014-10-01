module('math-tex');

test('create math-tex using document.createElement', function() {
	var element = document.createElement('code', 'math-tex');
	equal('CODE', element.nodeName);
	equal('math-tex', element.getAttribute('is'));
});

test('create math-tex using its constructor', function() {
	var element = new window.MathLatexElement();
	equal('CODE', element.nodeName);
	equal('math-tex', element.getAttribute('is'));
});

test('change contents dynamically', function() {
	var element = document.createElement('code', 'math-tex');
	equal(element.innerHTML, '');
	equal(element.textContent, '');
	// Test this twice to ensure that the mutation observers still work after
	// changing `innerHTML` and `textContent` once.
	var count = 2;
	while (count--) {
		element.innerHTML = 'abc';
		equal(element.innerHTML, 'abc');
		equal(element.textContent, 'abc');
		element.textContent = 'def';
		equal(element.innerHTML, 'def');
		equal(element.textContent, 'def');
	}
});
