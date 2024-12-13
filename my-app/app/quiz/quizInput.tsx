export const quizInput: Record<
  string,
  {
    question: string;
    choices: Record<string, string>;
    image: string;
  }
> = {
  start: {
    question:
      "You and your close friends decide to meet up at a karaoke place for karaoke. Will you meet up?",
    choices: {
      Yes: "2Y",
      No: "2N",
    },
    image: "/The sun.jpg",
  },
  "2Y": {
    question:
      "You arrive at the place. There is someone new in the group, whom all your friends love. His name is Bob...",
    choices: {
      Continue: "3Y",
    },
    image: "/1.png",
  },
  "2N": {
    question: "You chill at home for the day, unaware of what's to come...",
    choices: {
      Continue: "partII_1N",
    },
    image: "/new sun.png",
  },
  "3Y": {
    question:
      "After a while of karaoke, Bob pulls out something. Your friends whoop in excitement as they peer into a tote bag...",
    choices: {
      Continue: "4",
    },
    image: "/1.png",
  },
  "4": {
    question: "They're calling you over!! Move closer to them?",
    choices: {
      Yes: "5Y",
      No: "5N",
    },
    image: "/1.png",
  },
  "5Y": {
    question:
      'You come near them and they show you the tote bag full of colourful sharpies. All your friends are taking one. Janine pushes to you the last sharpie. "It\'s your gift!! Take it."',
    choices: {
      Continue: "6",
    },
    image: "/1.png",
  },
  "5N": {
    question:
      'They come to you anyways and show you the tote bag full of colourful sharpies. All your friends have taken one. Janine pushes to you the last sharpie. "It\'s your gift!! Take it."',
    choices: {
      Continue: "6",
    },
    image: "/1.png",
  },
  "6": {
    question: "Will you take the sharpie? Janine is waiting for you...",
    choices: {
      Yes: "7Y",
      No: "7N",
    },
    image: "/1.png",
  },
  "7Y": {
    question: "You take the sharpie and stare at it curiously...",
    choices: {
      Continue: "8",
    },
    image: "/1.png",
  },
  "7N": {
    question:
      "You try to refuse but Janine's demeanour changes...she stares at you with slight irritation in her eyes, though her smile stays as she pushes the sharpie into your palms. Your heart races. Your skin burns.",
    choices: {
      Continue: "8",
    },
    image: "/1.png",
  },
  "8": {
    question:
      "Janine and your other friends sit around you. Janine pulls out the cap out of both of your sharpies, revealing a black metal tip that looks pretty dissimilar from a sharpie...",
    choices: {
      Continue: "9",
    },
    image: "/1.png",
  },
  "9": {
    question:
      "To your surprise, everyone around you puts the sharpie to their mouth. Alarmingly, fumes seem to come out of their mouths after taking away the sharpie. Then, flashbacks on lessons about vapes come to mind. You connect the dots...",
    choices: {
      Continue: "10",
    },
    image: "/1.png",
  },
  "10": {
    question:
      "A hand suddenly wraps around yours, bringing the sharpie in your hands to your mouth... Do you resist?",
    choices: {
      Yes: "11Y1",
      No: "11N1",
    },
    image: "/1.png",
  },
  "11Y1": {
    question:
      "You resist... Janine's hand is still around you. \"Why? Just try it, it's really good. Look at everyone else!\"",
    choices: {
      Continue: "12Y1",
    },
    image: "/1.png",
  },
  "11N1": {
    question:
      "You stare at Janine. She nods in approval, smile on her face... Maybe everything will just be fine then...",
    choices: {
      Continue: "12N1",
    },
    image: "/1.png",
  },
  "12Y1": {
    question:
      "All your friends start nodding their heads. Go try it, they say. It's soooo good!! ...they say. It'll benefit your mental health, help you destress... Don't be afraid of a little bit of dangerous! You cross the road everyday knowing that you could be hit one day, don't you?",
    choices: {
      Continue: "13Y1",
    },
    image: "/1.png",
  },
  "12N1": {
    question:
      "You put the sharpie to your mouth. Breathing in subconsciously, something sweet dances within your mouth... it's actually refreshing, and you open your eyes to sunshine and rainbows...",
    choices: {
      Continue: "13N1",
    },
    image: "/1.png",
  },
  "13Y1": {
    question:
      "...Apprehensive, you give it a rethink... After all, they might be mad at you if you miss out, right?",
    choices: {
      Continue: "14Y1",
    },
    image: "/1.png",
  },
  "13N1": {
    question:
      "You take another whiff... your brain goes into a frenzy as you suddenly crave for the next, just to satisfy this burning curiosity emanating from within you.",
    choices: {
      Continue: "14N1",
    },
    image: "/1.png",
  },
  "14Y1": {
    question:
      "Janine squeezes your wrist again, urging you to take the vape. Take it?",
    choices: {
      Yes: "11N1",
      No: "14N2",
    },
    image: "/1.png",
  },
  "14N2": {
    question:
      "You sit in silence, letting the FOMO sink in...your thoughts overwhelm you as you stare at the rest having fun... maybe you should actually try it...",
    choices: {
      Yes: "11N1",
      No: "14N3",
    },
    image: "/1.png",
  },
  "14N3": {
    question:
      "Wow, you're strong. You walk out on your friends and leave this group of people.",
    choices: {
      Continue: "partII_1N",
    },
    image: "/1.png",
  },
  "14N1": {
    question:
      "Slowly... you fall into a cycle... From that day onwards, you ride on the high, needing more and more whiffs of that magical substance. The familiar strawberry flavours fill your mouth with ecstasy, drowns your brains in mushy heaven, and you can't help but go back to it... because it's fulfilling; because it's phenomenal; because it's something you can't replicate elsewhere.",
    choices: {
      Continue: "partII_1Y",
    },
    image: "/1.png",
  },
  partII_1Y: {
    question: "Slowly, you mix with this friend group more and more often.",
    choices: {
      Continue: "partII_2Y",
    },
    image: "/1.png",
  },
  partII_1N: {
    question:
      "Jared, your best friend in the group, has been acting unlike himself lately.",
    choices: {
      Continue: "partII_2N",
    },
    image: "/1.png",
  },
  partII_2Y: {
    question:
      "After your encounter with the vape, it seems like your friend group respects you more. They call you over for more outings and are more inclusive of you.",
    choices: {
      Continue: "partII_3Y",
    },
    image: "/1.png",
  },
  partII_2N: {
    question:
      "You notice him being anxious more often, protective of his belongings, as well as losing interest in life in general...",
    choices: {
      Continue: "partII_3N",
    },
    image: "/1.png",
  },
  partII_3Y: {
    question:
      "On the 14th, all of you have decided to meet up secretly so that you can get that much-needed refillable. You readily agree. However, afterwards, Bob and Janine have asked you to bring 70 bucks, and the 14th is next week...",
    choices: {
      Continue: "partII_4Y",
    },
    image: "/1.png",
  },
  partII_3N: {
    question:
      "It's weird, because this change seemed very out of the blue... and he's been acting like that ever since that karaoke session. Should you approach him?",
    choices: {
      Approach: "partII_4N_approach",
      "He'll think I'm weird": "partII_4N_weird",
    },
    image: "/1.png",
  },
  partII_4Y: {
    question:
      "You rack your brains to figure out how to get that remaining 40 bucks in a week. You need to borrow it from someone because you don't have the ability to get that much money yet. Or you can steal...",
    choices: {
      Steal: "partII_5Y_steal",
      Borrow: "partII_5Y_borrow",
    },
    image: "/1.png",
  },
  partII_4N_approach: {
    question:
      "During recess, you ask him if he is okay, explaining that you have been noticing that he looks stressed recently. He fervently denies being stressed, and seems to take it like an insult. You're taken aback. How can you help him?",
    choices: {
      "Tell him you're worried for him": "partII_4N_tell",
      "Google for help": "partII_4N_google",
    },
    image: "/1.png",
  },
  partII_4N_weird: {
    question:
      "During recess, you watch as he picks out little bites from his nasi lemak meal. Yeah, something is definitely wrong, but you're not sure what. You decide to google his signs, but it returns the usual stress symptoms. Then, he asks you if you have 40 bucks...",
    choices: {
      Continue: "partII_5N_weird",
    },
    image: "/1.png",
  },
  partII_4N_tell: {
    question:
      "You place your hand on his shoulder, trying to comfort him and say that you care about his mental health. You say that you're worried about how he seems fidgety all day. You ask if he needs help with something and if there's anything bothering him.",
    choices: {
      Continue: "partII_5N_approach",
    },
    image: "/1.png",
  },
  partII_4N_google: {
    question:
      "You try to calm down after the reaction. The two of you settle into silence as he picks at his food. You pull your phone out under the table to google, and find out that you must talk to him in a non-confrontational way, but show that you care. You decide to do just that.",
    choices: {
      Continue: "partII_4N_tell",
    },
    image: "/1.png",
  },
  partII_5Y_steal: {
    question:
      "You try to steal from your mom and got caught. Oops. Now your entire plan is exposed as she found a paper note from Bob about the meetup, while digging through your belongings. Your mom and you start arguing and you are skyhigh-stressed as you find no way out.",
    choices: {
      Continue: "partII_6Y_steal",
    },
    image: "/1.png",
  },
  partII_5Y_borrow: {
    question:
      "You try to ask Zaniah, your bestie, during recess, to borrow 40 bucks. Obviously, that is stupid since it is a large amount of money at once, which you had never asked for. She confronts you about your need for money.",
    choices: {
      Continue: "partII_6Y_borrow",
    },
    image: "/1.png",
  },
  partII_5N_weird: {
    question:
      "Naturally, you ask him why, as it is a big amount of money.",
    choices: {
      Continue: "partII_5N_approach",
    },
    image: "/1.png",
  },
  partII_5N_approach: {
    question:
      "He stares at you for a while, then shakes his head rapidly. \"It's just.. It's... I need 40 bucks because I owe someone this amount for buying a game item. You know...the one I spent on the FruitBlox upgrade... Yeah that money wasn't actually mine.\"",
    choices: {
      Continue: "partII_6N_approach"
    },
    image: "/1.png",
  },
  partII_6N_approach: {
    question:
      "You're surprised, as you were literally playing that game with him when he bought the powerup using money from his bank account, and it costs less than 40bucks. You also don't have 40 bucks ready to lend to him. Plus, you know he was never the type of person to borrow this much from others and then spend it frivolously.",
    choices: {
      "Gently ask who lent him":"partII_6N_appr_gently",
      "Demand why he nv tell u":"partII_6N_appr_demand",
    },
    image: "/1.png",
  },
  partII_6N_appr_demand: {
    question:
      "He stammers out something incoherent, then says nevermind. More probing doesn't get him to reveal anything more :( You're supposed to focus on your end goal of helping him, not questioning him confrontationally about why you don't already know certain things. Try again.",
    choices: {
      "Try again": "partII_6N_appr_gently",
    },
    image: "/1.png",
  },
  partII_6Y_steal: {
    question:
      "You and your mom have a major fallout, and she threatens to call the authorities on you. Eyes wide, you also threaten her out of rage. With the kitchen knife. Then the main door opens...",
    choices: {
      Continue: "partII_7Y_steal",
    },
    image: "/1.png",
  },
  partII_6Y_borrow: {
    question:
      "Zaniah continues to mention that you have been seeming stressed recently, and that she is worried for you. A pang of guilt rises in your chest. Will you confess to her?",
    choices: {
      Yes: "partII_6Y_borrow_Y1",
      No: "partII_6Y_borrow_N1",
    },
    image: "/1.png",
  },
  partII_6Y_borrow_Y1: {
    question:
      "You decide to confess to Zaniah about it. She stares at you with wide eyes, and your heart rate spikes... But she seems to calm down quickly, and gently tells you she'll try to help you.",
    choices: {
      Continue: "end_6Y_Borrow_Y1",
    },
    image: "/1.png",
  },
  partII_6Y_borrow_N1: {
    question:
      "You continue to hide the fact that you need it for vaping. \"It's just... It's... I need 40 bucks because I owe someone this amount for buying a game item. You know...the one I spent on the FruitBlox powerup... Yeah that money wasn't actually mine,\" you say.",
    choices: {
      Continue: "partII_7Y_borrow_N1",
    },
    image: "/1.png",
  },
  partII_6N_appr_gently: {
    question:
      "He stammers and averts his eyes, mumbling a name you have never heard before. His body language is suspicious.",
    choices: {
      Continue: "partII_7N"
    },
    image: "/1.png",
  },
  partII_7N: {
    question:
      "Maybe he's lying...? What do you do?",
    choices: {
     "Blame him for lying and be mad at him": "partII_7N_blame",
     "You can tell me, I'll help you no matter what": "partII_7N_safe",
    },
    image: "/1.png",
  },
  partII_7N_blame: {
    question:
      "Your friend gets defensive and blames you for being someone he can't trust. Your friendship breaks down lol, try again.",
    choices: {
     "Try again": "partII_7N"
    },
    image: "/1.png",
  },
  partII_7N_safe: {
    question:
      "You try to create a safe space. it took some nudging, and convincing that you truly want the best for him. Your friend sounds unsure, but something takes over him. Tears overwhelm his eyes as he reveals that he has been vaping.",
    choices: {
     "Continue": "end_7N_isthatthetruth"
    },
    image: "/1.png",
  },
  partII_7Y_borrow_N1: {
    question:
      "Your friend still looks skeptical. She asks you who you borrowed it from. You stammer something out, because it's a lie that you didn't completely think through.",
    choices: {
      Continue: "partII_8Y_borrow_N1",
    },
    image: "/1.png",
  },
  partII_7Y_steal: {
    question:
      "It's your dad. Witnessing the scenario in front of him, his jaw drops. He quickly comes and snatches the knife from your hands, placing it back in the kitchen and steering you out of the kitchen.",
    choices: {
      Continue: "partII_8Y_steal"
    },
    image: "/1.png",
  },

  partII_8Y_borrow_N1: {
    question:
      "Your heart rate spikes because you know that response sucked. But a hand rests on your shoulder as she asks you if you are telling the truth.",
    choices: {
      Continue: "partII_9Y_borrow_N1",
    },
    image: "/1.png",
  },
  partII_8Y_steal: {
    question:
      "Holding on to your hand tightly to prevent you from running off, he bends to your eye level and gently asks about what's going on. Will you tell him?",
    choices: {
      Yes: "partII_8Y_steal_y",
      No: "partII_8Y_steal_n",
    },
    image: "/1.png",
  },
  partII_8Y_steal_y: {
    question:
    "Heat rises within you and your throat feels tight. You open your mouth to say something, but nothing comes out... ",
    choices: {
      continue: "partII_9Y_steal_y",
    },
    image: "/1.png",
  },
  partII_8Y_steal_n: {
    question: 
    "Heat rises within you and your throat feels tight. Instead, your mother shouts at your dad, revealing the truth that you have been vaping.",
    choices: {
      continue: "partII_9Ystealn_10Ystealy_dadhug",
    },
    image: "/1.png",
  },
  partII_9Y_borrow_N1: {
    question:
      "Guilt quickly overwhelms you as you are aware you have been hiding the fact that you vape from the people truly closest to you.",
    choices: {
      Continue: "partII_10Y_borrow_N1",
    },
    image: "/1.png",
  },
  partII_9Y_steal_y: {
    question: 
    "Instead, your mother shouts at your dad, revealing the truth that you have been vaping. You silently nod your head.",
    choices: {
      continue: "partII_9Ystealn_10Ystealy_dadhug",
    },
    image: "/1.png",
  },
  partII_9Ystealn_10Ystealy_dadhug: {
    question: 
    "To your surprise, your dad hugs you.",
    choices: {
      continue: "partII_11Y_steal",
    },
    image: "/1.png",
  },
  partII_10Y_borrow_N1: {
    question:
      "Zaniah assures you once again that she will be there no matter what, and that you can be honest with her. Will you tell her?",
    choices: {
      Yes: "partII_11Y_borrow_N1_y",
      No: "partII_11Y_borrow_N1_n",
    },
    image: "/1.png",
  },
  partII_11Y_steal: {
    question: 
    "Your dad assures you that even though vaping is wrong, he will help you through whatever difficulties you will face in life and also help you get out of substance abuse. It will be a hard journey but you will get through it.",
    choices: {
      continue: "end_11Y_steal",
    },
    image: "/1.png",
  },
  partII_11Y_borrow_N1_y: {
    question:
      "You inhale. Your throat feels tight. You open your mouth but nothing comes out. It's hard, but she nods at you encouragingly...",
    choices: {
      Continue: "partII_12Y_borrow_N1_y",
    },
    image: "/1.png",
  },
  partII_11Y_borrow_N1_n: {
    question:
      "You are scared to tell her the truth, for fear that she will be truly disappointed in you. You can't bear to face her directly.",
    choices: {
      Continue: "partII_12Y_borrow_N1_n",
    },
    image: "/1.png",
  },
  partII_11Y_borrow_N1_n_N1: {
    question:
      "You eventually refuse to tell her, leaving her in the dark... The bell rings and recess passes. Stressing out, you think to choose another path to get the 40bucks.",
    choices: {
      Rechoose: "partII_12Y_borrow_N1_n",
      Steal: "partII_5Y_steal"
    },
    image: "/1.png",
  },
  partII_12Y_borrow_N1_y: {
    question:
      "\"It's...vape,\" you manage to croak out.",
    choices: {
      Continue: "partII_13Y_borrow_N1_y",
    },
    image: "/1.png",
  },
  partII_12Y_borrow_N1_n: {
    question:
      "As if she can read your mind, she assures you that there is no need to fear anyone else's reaction. Coming clean now is better than leaving it for later, she says. Tell her?",
    choices: {
      Yes: "partII_11Y_borrow_N1_y",
      No: "partII_11Y_borrow_N1_n_N1"
    },
    image: "/1.png",
  },
  partII_13Y_borrow_N1_y: {
    question:
      "To your surprise, zaniah doesn't blame you. Instead, she acts encouraging and assures you that even though vaping is wrong, she will help you through whatever difficulties you will face in life and also help you get out of substance abuse. It will be a hard journey but you will get through it.",
    choices: {
      Continue: "end_13Y_borrow_N1_y",
    },
    image: "/1.png",
  },
//end
  end_6Y_Borrow_Y1: {
    question:
      "Your friend Zaniah acts encouraging and assures you that even though vaping is wrong, she will help you through whatever difficulties you will face and help you get out of substance abuse. ",
    choices: {
      Continue: "end_6Y_Borrow_Y1_2",
    },
    image: "/1.png",
  },
  end_6Y_Borrow_Y1_2: {
    question:
      "A weight feels lifted off your chest... You're unsure, but slightly comforted by the fact that at least Zaniah is behind you.",
    choices: {
      Continue: "end_6Y_Borrow_Y1_3",
    },
    image: "/1.png",
  },
  end_6Y_Borrow_Y1_3: {
    question:
      "Zaniah helps you draw up a quit plan. She also explains to you more about vapes and their harms, showing you the various help pathways...",
    choices: {
      Continue: "bad_end",
    },
    image: "/1.png",
  },
  end_11Y_steal: {
    question: 
    "You stare at your dad in slight disbelief. Still, a weight feels lifted off your chest. With your dad's help, you drew up a quit plan. He also explains to you more about vapes and their harms, showing you the various official hotlines and help pathways...",
    choices: {
      continue: "bad_end",
    },
    image: "/1.png",
  },
  end_7N_isthatthetruth: {
    question: 
    "Now that he has revealed to you that he has been vaping, your task is to help him quit.",
    choices: {
      continue: "end_7N_isthatthetruth_1",
    },
    image: "/1.png",
  },
  end_7N_isthatthetruth_1: {
    question: 
    "You are internally surprised and disbelieving that he will vape. However, now that he has gotten into this situation, how should you help?",
    choices: {
      "Calm down, urge him to quit": "end_7N_isthatthetruth_1calm",
      "Get mad": "end_7N_isthatthetruth_1mad"
    },
    image: "/1.png",
  },
  end_7N_isthatthetruth_1mad: {
    question: 
    "He pauses, shocked. He hisses that you betrayed him, as he revealed to you something that made him so vulnerable, but that you will not be there to help him. He leaves with tears in his eyes, and you never see him come back to class after recess...",
    choices: {
     "You failed. Try again.": "end_7N_isthatthetruth_1",
    },
    image: "/1.png",
  },
  //calm (to do mad)
  end_7N_isthatthetruth_1calm: {
    question: 
    "You give him a side hug, and start assuring him that even though vaping is wrong, you will help him through whatever difficulties he will face and help him get out of substance abuse.",
    choices: {
      Continue: "end_7N_isthatthetruth_1calm2"
    },
    image: "/1.png",
  },
  end_7N_isthatthetruth_1calm2: {
    question: 
    "He stares at you wide eyed, but breathes out an okay, then quickly averts his eyes.",
    choices: {
      "Come up with quit plan together": "end_7N_isthatthetruth_1calm2_quit",
      "Encourage him to read up on quit journey's, give hope": "end_7N_isthatthetruth_1calm2_hope"
    },
    image: "/1.png",
  },
  end_7N_isthatthetruth_1calm2_quit: {
    question: 
    "Both of you drew up a quit plan together. You also explain to him more about vapes and their harms, showing him the various official hotlines and help pathways...",
    choices: {
      Continue: "end_7N_isthatthetruth_1calm2_quithope2"
    },
    image: "/1.png",
  },
  end_7N_isthatthetruth_1calm2_hope: {
    question: 
    "You encourage him to read more about the quit journeys of others, and show him that it's possible to get out of vaping. You both find resources from google to help him, and realise you can call quit helplines to get help from quit coaches. So you do so... ",
    choices: {
      Continue: "end_7N_isthatthetruth_1calm2_quithope2"
    },
    image: "/1.png",
  },
  end_7N_isthatthetruth_1calm2_quithope2: {
    question: 
    "Congrats! You have successfully encouraged your friend to quit vaping, and found him resources.",
    choices: {
      Continue: "end_7N_isthatthetruth_2"
    },
    image: "/1.png",
  },
  end_7N_isthatthetruth_2: {
    question: 
    "Later, you support him during his recovery process. It was a tough journey as he suffers from withdrawal symptoms, but luckily you were there to remind him about his end goals and quit plan.",
    choices: {
      Continue: "end_7N_isthatthetruth_3"
    },
    image: "/1.png",
  },
  end_7N_isthatthetruth_3: {
    question: 
    "Months later, he becomes a much more cheerful person. You both have also stopped mixing with Bob, Janine and the friend group (in fact they got into trouble soon after your friend starts his recovery process).",
    choices: {
      Continue: "end_7N_isthatthetruth_4"
    },
    image: "/1.png",
  },
  end_7N_isthatthetruth_4: {
    question: 
    "Thank you for playing the game!",
    choices: {
      Continue: "good_end"
    },
    image: "/1.png",
  },
  
  good_end: {
    question: "Loading Results...",
    choices: {},
    image: "/1.png",
  },
  bad_end: {
    question: "Loading Results...",
    choices: {},
    image: "/1.png",
  },
};