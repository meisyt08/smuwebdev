export interface GameState {
    text: string;
    options: { [key: string]: string };
}

export const gameFramework: { [key: string]: GameState } = {
    "start": {
        text: "You and your close friends decide to meet up at a karaoke place for karaoke. Will you meet up? (Y/N)",
        options: {
            "Y": "arriveAtPlace",
            "N": "chillAtHome"
        }
    },
    "arriveAtPlace": {
        text: "You arrive at the place. There is someone new in the group, whom all your friends love. His name is Bob...",
        options: {
            "continue": "karaokeTime"
        }
    },
    "chillAtHome": {
        text: "You chill at home for the day, unaware of what's to come...",
        options: {
            "continue": "partII"
        }
    },
    "karaokeTime": {
        text: "After a while of karaoke, Bob pulls out something. Your friends whoop in excitement as they peer into a tote bag...",
        options: {
            "Y": "moveCloser",
            "N": "theyComeToYou"
        }
    },
    "moveCloser": {
        text: "You come near them and they show you the tote bag full of colourful sharpies. All your friends are taking one. Janine pushes to you the last sharpie. 'It's your gift!! Take it.'",
        options: {
            "Y": "takeSharpie",
            "N": "forcedSharpie"
        }
    },
    "theyComeToYou": {
        text: "They come to you anyways and show you the tote bag full of colourful sharpies. All your friends have taken one. Janine pushes to you the last sharpie. 'It's your gift!! Take it.'",
        options: {
            "Y": "takeSharpie",
            "N": "forcedSharpie"
        }
    },
    "takeSharpie": {
        text: "You take the sharpie and stare at it curiously...",
        options: {
            "continue": "revealVape"
        }
    },
    "forcedSharpie": {
        text: "You try to refuse but Janine's demeanor changes... She stares at you with slight irritation in her eyes, though her smile stays as she pushes the sharpie into your palms. Your heart races. Your skin burns.",
        options: {
            "continue": "revealVape"
        }
    },
    "revealVape": {
        text: "Janine and your other friends sit around you. Janine pulls out the cap out of both of your sharpies, revealing a black metal tip that looks pretty dissimilar from a sharpie...",
        options: {
            "continue": "realization"
        }
    },
    "realization": {
        text: "To your surprise, everyone around you puts the sharpie to their mouth. Alarmingly, fumes seem to come out of their mouths after taking away the sharpie. Then, flashbacks on lessons about vapes come to mind. You connect the dots...",
        options: {
            "continue": "resistOrNot"
        }
    },
    "resistOrNot": {
        text: "A hand suddenly wraps around yours, bringing the sharpie in your hands to your mouth... Do you resist? (Y1/N1)",
        options: {
            "Y1": "resist",
            "N1": "giveIn"
        }
    },
    "resist": {
        text: "You resist... Janine's hand is still around you. 'Why? Just try it, it's really good. Look at everyone else!'",
        options: {
            "Y2": "tryVape",
            "N2": "fomo"
        }
    },
    "giveIn": {
        text: "You stare at Janine. She nods in approval, smile on her face... Maybe everything will just be fine then...",
        options: {
            "continue": "cycleBegins"
        }
    },
    "tryVape": {
        text: "All your friends start nodding their heads. 'Go try it,' they say. 'It's soooo good!! ... It’ll benefit your mental health, help you destress... Don't be afraid of a little bit of dangerous! You cross the road everyday knowing that you could be hit one day, don't you?'",
        options: {
            "continue": "giveIn"
        }
    },
    "fomo": {
        text: "You sit in silence, letting the FOMO sink in... Your thoughts overwhelm you as you stare at the rest having fun... Maybe you should actually try it...",
        options: {
            "Y3": "tryVape",
            "N3": "leaveGroup"
        }
    },
    "leaveGroup": {
        text: "Wow, you're strong. You walk out on your friends and leave this group of people.",
        options: {
            "continue": "partII"
        }
    },
    "cycleBegins": {
        text: "Slowly... You fall into a cycle... One that you love... From that day onwards, you ride on the high, needing more and more whiffs of that magical substance. The familiar strawberry flavours fill your mouth with ecstasy, drowns your brains in mushy heaven, and you can't help but go back to it... Because it's fulfilling; because it's phenomenal; because it's something you can't replicate elsewhere.",
        options: {
            "continue": "end"
        }
    },
    "partII": {
        text: "Part II begins here...",
        options: {}
    },
    "end": {
        text: "The game ends here. Thank you for playing!",
        options: {}
    }
};

