const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "React",
				weight: 12
			}, {
				text: "CSS3",
				weight: 8
			}, {
				text: "Redux",
				weight: 12
			}, {
				text: "roBotics",
				weight: 7
			}, {
				text: "Programming",
				weight: 7
			}, {
				text: "JavaScript",
				weight: 10
			}, {
				text: "pyTorch",
				weight: 9
			}, {
				text: "Robin",
				weight: 12
			}, {
				text: "HTML5",
				weight: 8
			}, {
				text: "DeepLearning",
				weight: 9
			}, {
				text: "Nodejs",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.community-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Hybrid Engineer with atmospheric vision.", "am also known as roBot.", "the Innovator.", "the Scrum Master.", "love everything about cybersecurity, innovations and programming.", "also contribute to emerging technologies via global communities and hackathons.", "solve world problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
