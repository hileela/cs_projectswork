/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
    '' : {
        project: '<a href="https://github.com/dkessner/visual_novel_template" target="_blank">https://github.com/dkessner/visual_novel_template</a>',
        'Monogatari visual novel engine': '<a href="https://monogatari.io/" target="_blank">https://monogatari.io</a>'
    }
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
    alice23: "senyo.PNG",
    alice24: "IMG_8745.jpg",
		lex: "lexieieie.JPG"
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({

});


monogatari.script ({

	'Start': [
            'show image alice23 with fadeIn',
            '"You are old, Father Senyo,” the young dude said, "And you have become a pro gamer"',
            '"And yet you incessantly flame people online. Do you think, at your age, it is right?"',
            '"In my youth," Father Senyo replied to his son, "I feared it might injure the brain"',
            '"But, now that I’m perfectly sure I have none. Why, I do it again and again.',
            'hide image alice23 with fadeOut',
            'jump Next'
        ],

        'Next': [
            'show image alice24 with fadeIn',
            '"You are old," said Tubbs, "as I mentioned before, and have grown most uncommonly weird"',
            '"Yet you turned a back-somersault in at the door.  Pray, what is the reason of that?"',
            '"In my youth," said the cat, as he ate all the food, "I kept all my limbs very supple"',
            '"By the use of this ointment — one shilling the box — Allow me to sell you a couple?"',
            'hide image alice24 with fadeOut',
						'jump Next2'
					],
				'Next2': [
		        'show image lex with fadeIn',
		        '"heheehhehehehhehe," said Lexie',
		        'hide image lex with fadeOut',
            'end'
	]
});


monogatari.component ('main-screen').template (() => {
    return `
        <h1>my weirdo frends</h1>
        <br/>
        <p>
        awajskldjaklwajdopsjfdks.
        </p>
        <br/>
        <center>
        <img src="assets/images/IMG_8407.JPG" height="50%"/>
        </center>

        <main-menu></main-menu>
    `;
});
