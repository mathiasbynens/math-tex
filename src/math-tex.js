(function(window, document, katex) {

	var ownerDocument = document.currentScript.ownerDocument;

	var mutationOptions = {
		'characterData': true,
		'childList': true,
		'subtree': true
	};

	var MathLatexPrototype = Object.create(HTMLElement.prototype, {
		'createdCallback': {
			'value': function() {
				var $this = this;

				// Set the stage for the KaTeX-rendered content.
				var template = ownerDocument.querySelector('template');
				var clone = document.importNode(template.content, true);
				var shadow = $this.createShadowRoot();
				shadow.appendChild(clone);
				var target = shadow.querySelector('span');

				// Trigger a render based on the element’s initial contents.
				katex.render($this.textContent, target);

				// Re-render the element’s contents whenever its `.textContent` or
				// `.innerHTML` is updated.
				var observer = new MutationObserver(function(mutations) {
					mutations.forEach(function(mutation) {
						observer.disconnect();
						katex.render($this.textContent, target);
						observer.observe($this, mutationOptions);
					});
				});
				observer.observe($this, mutationOptions);
			}
		}
	});

	// Expose a global constructor for our custom element.
	// var element = new MathLatexElement();
	// → <code is="math-tex"></code>
	window.MathLatexElement = document.registerElement('math-tex', {
		'prototype': MathLatexPrototype,
		'extends': 'code'
	});

}(window, document, katex));
