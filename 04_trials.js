// In this file you can specify the trial data for your experiment

/*
//Trial info for self-paced-reading task
const trial_info_self = [
    {
        QUD: "The judge asks: 'What did you see under the bed?' The witness responds",
        sentence: "all | of the | yellow marbles | are | inside | the case.'",
        option1: "Next",
    },
];

//Trial info for validiy task
const third_screen = [
    {
        optionLeft: "agree",
        optionRight: "disagree",
        QUD: "Judges answer",
        question: "Do you agree with the judge?",

    }
];
*/

//MAIN TRIALS **CORRECT ORDER**

//Screen1

//Polar questions
const Polar1 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol1.length,
		name: 'Polar1',
		data: info_Pol1
		
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Polar2 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol2.length,
		name: 'Polar2',
		data: info_Pol2,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Polar3 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol3.length,
		name: 'Polar3',
		data: info_Pol3,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Polar4 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol4.length,
		name: 'Polar4',
		data: info_Pol4,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar5 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol5,
		name: 'Polar5',
		data: info_Pol5,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Polar6 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol6.length,
		name: 'Polar6',
		data: info_Pol6,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Polar7 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol7.length,
		name: 'Polar7',
		info_Pol7,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Polar8 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol8.length,
		name: 'Polar8',
		data: info_Pol8,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Polar9 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol9.length,
		name: 'Polar9',
		data:info_Pol9,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Polar10 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol10.length,
		name: 'Polar10',
		data: info_Pol10,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Polar11 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol11.length,
		name: 'Polar11',
		info_Pol11,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Polar12 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_Pol12.length,
		name: 'Polar12',
		data: info_Pol12,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
//What Quesions
const What1 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What1.length,
		name: 'What1',
		data: info_What1,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const What2 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What2.length,
		name: 'What2',
		data: info_What2,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const What3 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What3.length,
		name: 'What3',
		data: info_What3,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const What4 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What4.length,
		name: 'What4',
		data: info_What4,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const What5 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What5.length,
		name: 'What5',
		data: info_What5,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const What6 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What6.length,
		name: 'What6',
		data: info_What6,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const What7 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What7.length,
		name: 'What7',
		data: info_What7,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const What8 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What8.length,
		name: 'What8',
		data: info_What8,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const What9 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What9.length,
		name: 'What9',
		data: info_What9,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const What10 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What10.length,
		name: 'What10',
		data: info_What10,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const What11 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What11.length,
		name: 'What11',
		data: info_What11,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const What12 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_What12.length,
		name: 'What12',
		data: info_What12,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
//HowMany Questions
const HowMany1 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM1.length,
		name: 'HowMany1',
		data: info_HM1,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const HowMany2 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM2.length,
		name: 'HowMany2',
		data: info_HM2,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const HowMany3 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM3.length,
		name: 'HowMany3',
		data: info_HM3,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const HowMany4 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM4.length,
		name: 'HowMany4',
		data: info_HM4,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const HowMany5 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM5.length,
		name: 'HowMany5',
		data: info_HM5,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const HowMany6 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM6.length,
		name: 'HowMany6',
		data: info_HM6,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const HowMany7 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM7.length,
		name: 'HowMany7',
		data: info_HM7,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const HowMany8 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM8.length,
		name: 'HowMany8',
		data: info_HM8,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const HowMany9 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM9.length,
		name: 'HowMany9',
		data: info_HM9,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const HowMany10 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM10.length,
		name: 'HowMany10',
		data: info_HM10,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const HowMany11 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM11.length,
		name: 'HowMany11',
		data: info_HM11,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const HowMany12 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: info_HM12.length,
		name: 'HowMany12',
		data: info_HM12,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);

//SUP Answers
const trial_info_SUP1 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | at | most | ten | of | the | diamonds | under | the | bed.",
        option1: "Next",
    },
];
const trial_info_SUP2 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | at | most | ten | of | the | diamonds | under | the | bed.",
        option1: "Next",
    },
];
const trial_info_SUP3 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | at | most | ten | of | the | diamonds | under | the | bed.",
        option1: "Next",
    },
];
const trial_info_SUP4 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | at | most | ten | of | the | coins | on | the | desk.",
        option1: "Next",
    },
];
const trial_info_SUP5 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | at | most | ten | of | the | coins | on | the | desk.",
        option1: "Next",
    },
];
const trial_info_SUP6 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | at | most | ten | of | the | coins | on | the | desk.",
        option1: "Next",
    },
];
const trial_info_SUP7 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | at | most | ten | of | the | knives | on | the | floor.",
        option1: "Next",
    },
];
const trial_info_SUP8 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | at | most | ten | of | the | knives | on | the | floor.",
        option1: "Next",
    },
];
const trial_info_SUP9 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | at | most | ten | of | the | knives | on | the | floor.",
        option1: "Next",
    },
];
const trial_info_SUP10 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | at | most | ten | of | the | masks | in | the | closet.",
        option1: "Next",
    },
];
const trial_info_SUP11 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | at | most | ten | of | the | masks | in | the | closet.",
        option1: "Next",
    },
];
const trial_info_SUP12 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | at | most | ten | of | the | masks | in | the | closet.",
        option1: "Next",
    },
];
const trial_info_SUP13 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | at | most | ten | of | the | men | in | the | garden.",
        option1: "Next",
    },
];
const trial_info_SUP14 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | at | most | ten | of | the | men | in | the | garden.",
        option1: "Next",
    },
];
const trial_info_SUP15 = [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | at | most | ten | of | the | shots | in | the | garden.",
        option1: "Next",
    },
];
const trial_info_SUP16 = [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | at | most | ten | of | the | screams | in | the | kitchen.",
        option1: "Next",
    },
];
const trial_info_SUP17 = [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | at | most | ten | of | the | screams | in | the | kitchen.",
        option1: "Next",
    },
];
const trial_info_SUP18 = [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | at | most | ten | of | the | screams | in | the | kitchen.",
        option1: "Next",
    },
];
//COMP Answers
const trial_info_COMP1= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | less | than | ten | of | the | diamonds | under | the | bed.",
        option1: "Next",
    },
];
const trial_info_COMP2= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | less | than | ten | of | the | diamonds | under | the | bed.",
        option1: "Next",
    },
];
const trial_info_COMP3= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | less | than | ten | of | the | diamonds | under | the | bed.",
        option1: "Next",
    },
];
const trial_info_COMP4 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | less | than | ten | of | the | coins | on | the | desk.",
        option1: "Next",
    },
];
const trial_info_COMP5 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | less | than | ten | of | the | coins | on | the | desk.",
        option1: "Next",
    },
];
const trial_info_COMP6 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | less | than | ten | of | the | coins | on | the | desk.",
        option1: "Next",
    },
];
const trial_info_COMP7 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | less | than | ten | of | the | knives | on | the | floor.",
        option1: "Next",
    },
];
const trial_info_COMP8 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | less | than | ten | of | the | knives | on | the | floor.",
        option1: "Next",
    },
];
const trial_info_COMP9 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | less | than | ten | of | the | knives | on | the | floor.",
        option1: "Next",
    },
];
const trial_info_COMP10 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | less | than | ten | of | the | masks | in | the | closet.",
        option1: "Next",
    },
];
const trial_info_COMP11 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | less | than | ten | of | the | masks | in | the | closet.",
        option1: "Next",
    },
];
const trial_info_COMP12 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | less | than | ten | of | the | masks | in | the | closet.",
        option1: "Next",
    },
];
const trial_info_COMP13 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | less | than | ten | of | the | men | in | the | garden.",
        option1: "Next",
    },
];
const trial_info_COMP14 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | less | than | ten | of | the | men | in | the | garden.",
        option1: "Next",
    },
];
const trial_info_COMP15 = [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | less | than | ten | of | the | shots | in | the | garden.",
        option1: "Next",
    },
];
const trial_info_COMP16 = [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | less | than | ten | of | the | screams | in | the | kitchen.",
        option1: "Next",
    },
];
const trial_info_COMP17 = [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | less | than | ten | of | the | screams | in | the | kitchen.",
        option1: "Next",
    },
];
const trial_info_COMP18 = [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | less | than | ten | of | the | screams | in | the | kitchen.",
        option1: "Next",
    },
];
//Inferences
const trial_info_INF1 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the diamonds she found under the bed.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF2 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the diamonds she found under the bed.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF3 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the diamonds she found under the bed.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF4 = [
    {
       optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the diamonds she found under the bed.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF5 = [
    {
       optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the diamonds she found under the bed.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF6 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the diamonds she found under the bed.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF7 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the coins she found on the desk.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF8 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the coins she found on the desk.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF9 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the coins she found on the desk.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF10 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the coins she found on the desk.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF11 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the coins she found on the desk.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF12 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the coins she found on the desk.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF13= [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the knives she found on the floor.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF14= [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the knives she found on the floor.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF15 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the knives she saw on the floor.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF16 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the knives she saw on the floor.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF17 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the knives she saw on the floor.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF18 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the knives she saw on the floor.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF19 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the masks she saw in the closet.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF20 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the masks she saw in the closet.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF21 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the masks she saw in the closet.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF22 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the masks she saw in the closet.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF23 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the masks she saw in the closet.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF24 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the masks she saw in the closet.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF25 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the men she saw in the garden.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF26 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the men she saw in the garden.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF27 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the men she saw in the garden.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF28 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the men she saw in the garden.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF29 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the shots she heard in the garden.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF30 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the shots she heard in the garden.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF31 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the screams she heard in the kitchen.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF32 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the screams she heard in the kitchen.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF33 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the screams she heard in the kitchen.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF34 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the screams she heard in the kitchen.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF35 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the screams she heard in the kitchen.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF36 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness does not know exactly how many of the screams she heard in the kitchen.",
        question: "Do you agree with the judge?",

    }
];

// FILLER ITEMS **CORRECT**

//Screen1

//Polar Questions
const Filler_Polar1 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar1.length,
		name: 'Filler_Polar1',
		data: F_Polar1,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar2 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar2.length,
		name: 'Filler_Polar2',
		data: F_Polar2,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar3 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar3.length,
		name: 'Filler_Polar3',
		data: F_Polar3,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar4 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar4.length,
		name: 'Filler_Polar4',
		data: F_Polar4,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar5 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar5.length,
		name: 'Filler_Polar5',
		data: F_Polar5,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar6 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar6.length,
		name: 'Filler_Polar6',
		data: F_Polar6,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar7 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar7.length,
		name: 'Filler_Polar7',
		data: F_Polar7,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar8 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar8.length,
		name: 'Filler_Polar8',
		data: F_Polar8,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar9 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar9.length,
		name: 'Filler_Polar9',
		data: F_Polar9,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar10 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar10.length,
		name: 'Filler_Polar10',
		data: F_Polar10,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar11 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar11.length,
		name: 'Filler_Polar11',
		data: F_Polar11,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar12 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar12.length,
		name: 'Filler_Polar12',
		data: F_Polar12,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar13 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar13.length,
		name: 'Filler_Polar13',
		data: F_Polar13,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
	}
);
const Filler_Polar14 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar14.length,
		name: 'Filler_Polar14',
		data: F_Polar14,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar15 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar15.length,
		name: 'Filler_Polar15',
		data: F_Polar15,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar16 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar16.length,
		name: 'Filler_Polar16',
		data: F_Polar16,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar17 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar17.length,
		name: 'Filler_Polar17',
		data: F_Polar17,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Polar18 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Polar18.length,
		name: 'Filler_Polar18',
		data: F_Polar18,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
//What Questions
const Filler_What1 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What1.length,
		name: 'Filler_What1',
		data: F_What1,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What2 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What2.length,
		name: 'Filler_What2',
		data: F_What2,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What3 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What3.length,
		name: 'Filler_What3',
		data: F_What3,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What4 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What4.length,
		name: 'Filler_What4',
		data: F_What4,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What5 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What5.length,
		name: 'Filler_What5',
		data: F_What5,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What6 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What6.length,
		name: 'Filler_What6',
		data: F_What6,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What7 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What7.length,
		name: 'Filler_What7',
		data: F_What7,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What8 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What8.length,
		name: 'Filler_What8',
		data: F_What8,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What9 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What9.length,
		name: 'Filler_What9',
		data: F_What9,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What10 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What10.length,
		name: 'Filler_What10',
		data: F_What10,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What11 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What11.length,
		name: 'Filler_What11',
		data: F_What11,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What12 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What12.length,
		name: 'Filler_What12',
		data: F_What12,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What13 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What13.length,
		name: 'Filler_What13',
		data: F_What13,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What14 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What14.length,
		name: 'Filler_What14',
		data: F_What14,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What15 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What15.length,
		name: 'Filler_What15',
		data: F_What15,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What16 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What16.length,
		name: 'Filler_What16',
		data: F_What16,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What17 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What17.length,
		name: 'Filler_What17',
		data: F_What17,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_What18 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_What18.length,
		name: 'Filler_What18',
		data: F_What18,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
//HowMany questions
const Filler_HowMany1 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM1.length,
		name: 'Filler_HowMany1',
		data: F_HM1,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany2 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM2.length,
		name: 'Filler_HowMany2',
		data: F_HM2,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany3 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM3.length,
		name: 'Filler_HowMany3',
		data: F_HM3,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany4 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM4.length,
		name: 'Filler_HowMany4',
		data: F_HM4,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany5 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM5.length,
		name: 'Filler_HowMany5',
		data: F_HM5,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany6 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM6.length,
		name: 'Filler_HowMany6',
		data: F_HM6,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany7 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM7.length,
		name: 'Filler_HowMany7',
		data: F_HM7,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany8 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM8.length,
		name: 'Filler_HowMany8',
		data: F_HM8,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany9 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM9.length,
		name: 'Filler_HowMany9',
		data: F_HM9,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany10 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM10.length,
		name: 'Filler_HowMany10',
		data: F_HM10,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany11 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM11.length,
		name: 'Filler_HowMany11',
		data: F_HM11,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany12 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM12.length,
		name: 'Filler_HowMany12',
		data: F_HM12,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany13 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM13.length,
		name: 'Filler_HowMany13',
		data: F_HM13,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany14 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM14.length,
		name: 'Filler_HowMany14',
		data: F_HM14,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany15 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM15.length,
		name: 'Filler_HowMany15',
		data: F_HM15,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany16 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM16.length,
		name: 'Filler_HowMany16',
		data: F_HM16,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany17 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM17.length,
		name: 'Filler_HowMany17',
		data: F_HM17,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_HowMany18 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_HM18.length,
		name: 'Filler_HowMany18',
		data: F_HM18,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
//Did Questions
const Filler_Did1 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did1.length,
		name: 'Filler_Did1',
		data:F_Did1,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did2 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did2.length,
		name: 'Filler_Did2',
		data:F_Did2,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did3 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did3.length,
		name: 'Filler_Did3',
		data:F_Did3,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did4 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did4.length,
		name: 'Filler_Did4',
		data:F_Did4,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did5 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did5.length,
		name: 'Filler_Did5',
		data:F_Di5,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did6 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did6.length,
		name: 'Filler_Did6',
		data:F_Did6,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did7 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did7.length,
		name: 'Filler_Did7',
		data:F_Did7,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did8 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did8.length,
		name: 'Filler_Did8',
		data:F_Did8,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did9 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did9.length,
		name: 'Filler_Did9',
		data:F_Did9,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did10 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did10.length,
		name: 'Filler_Did10',
		data:F_Did10,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did11 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did11.length,
		name: 'Filler_Did11',
		data:F_Did11,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did12 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did12.length,
		name: 'Filler_Did12',
		data:F_Did12,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did13 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did13.length,
		name: 'Filler_Did13',
		data:F_Did13,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did14 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did14.length,
		name: 'Filler_Did14',
		data:F_Did14,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did15 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did15.length,
		name: 'Filler_Did15',
		data:F_Did15,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did16 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did16.length,
		name: 'Filler_Did16',
		data:F_Did16,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did17 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did17.length,
		name: 'Filler_Did17',
		data:F_Did17,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);
const Filler_Did18 = magpieViews.view_generator(
	"forced_choice", 
	//config information
	{
		trials: F_Did18.length,
		name: 'Filler_Did18',
		data:F_Did18,
	},
	{
		answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
		}
	}
);


//Answers

const Filler_Ans1= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | only | ten | of | the | shoes | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans2= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | more | than | ten | of | the | shoes | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans3= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | approximately | ten | of | the | shoes | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans4= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | only | ten | shoes | under | the | table",
        option1: "Next",
    },
];
const Filler_Ans5= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | nearly | ten | shoes | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans6= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | only | ten | shoes | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans7= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | more | than | ten | shoes | under | the | table",
        option1: "Next",
    },
];
const Filler_Ans8= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | approximately | ten | shoes | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans9= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | only | ten | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans10= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | nearly | ten | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans11= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | nearly | ten | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans12= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | more | than | ten | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans13= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | nearly | ten | of | the | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans14= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | probably | only | ten | of | the | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans15= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | nearly | ten | pills | on | the | table.",
        option1: "Next",
    }, 
];
const Filler_Ans16= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | more | than | ten | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans17= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | only | ten | of | the | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans18= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | certainly | more | than | ten | of | the | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans19= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | more | than | ten | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans20= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | only | ten | torches | in | the | drawer",
        option1: "Next",
    },
];
const Filler_Ans21= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | nearly | ten | of | the | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans22= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | more | than | ten | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans23= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | ten | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans24= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | approximately | ten | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans25= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | more | than | ten | of | the | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans26= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | nearly | ten | of | the | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans27= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | probably | more | than | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans28= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | more | than | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans29= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | approximately | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans30= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | only | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans31= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | more | than | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans32= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | nearly | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans33= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | saw | only | ten | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans34= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | nearly | ten | of | the | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans35= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | certainly | more | than | ten | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans36= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | more | than | ten | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans37= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | approximately | ten | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans38= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | only | ten | men | on | the | street",
        option1: "Next",
    },
];
const Filler_Ans39= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | more | than | ten | of | the | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans40= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | nearly | ten | of | the | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans41= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | more | than | ten | of | the | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans42= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | saw | nearly | ten | of | the | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans43= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | certainly | only | ten | guns | in | the | bag. ",
        option1: "Next",
    },
];
const Filler_Ans44= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | approximately | ten | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans45= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | more | than | ten | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans46= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | only | ten | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans47= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | more | than | ten | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans48= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | nearly | ten | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans49= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | more | than | ten | of | the | pictures | on | the | wall.",
        option1: "Next",
    },
];
const Filler_Ans50= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | saw | nearly | ten | of | the | pictures | on | the | wall.",
        option1: "Next",
    },
];
const Filler_Ans51= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | certainly | only | ten | pictures | on | the | wall.",
        option1: "Next",
    },
];
const Filler_Ans52= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | approximately | ten | pictures | on | the | wall.",
        option1: "Next",
    },
];
const Filler_Ans53= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | more | than | ten | pictures | on | the | wall.",
        option1: "Next",
    },
];
const Filler_Ans54= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | only | ten | pictures | on | the | wall.",
        option1: "Next",
    },
];
const Filler_Ans55= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | more | than | ten | pictures | on | the | wall.",
        option1: "Next",
    },
];
const Filler_Ans56= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | nearly | ten | pictures | on | the | wall.",
        option1: "Next",
    },
];
const Filler_Ans57= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | only | ten | rings | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans58= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | certainly | more | than | ten | of | the | rings | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans59= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | heard | more | than | ten | beeps | in | the | shower.",
        option1: "Next",
    },
];
const Filler_Ans60= [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | only | ten | beeps | in | the | shower.",
        option1: "Next",
    },
];
const Filler_Ans61= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | heard | more | than | ten | of | the | beeps | in | the | shower.",
        option1: "Next",
    },
];
const Filler_Ans62= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | heard | more | than | ten | of | the | beeps | in | the | shower.",
        option1: "Next",
    },
];
const Filler_Ans63= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | heard | nearly | ten | beeps | in | the | shower.",
        option1: "Next",
    },
];
const Filler_Ans64= [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | approximately | ten | beeps | in | the | shower.",
        option1: "Next",
    },
];
const Filler_Ans65= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | heard | more | than | ten | cars | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans66= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | heard | nearly | ten | cars | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans67= [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | certainly | only | ten | cars | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans68= [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | approximately | ten | cars | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans69= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | heard | more | than | ten | cars | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans70= [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | only | ten | cars | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans71= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | heard | more | than | ten | cars | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans72= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | heard | nearly | ten | cars | on | the | street.",
        option1: "Next",
    },
];

//Inferences

const Filler_info1 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it is possible that she found ten of the shoes under the table.",
        question: "Do you agree with the judge?",
        rating: "1",

    }
];
const Filler_info2 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it is possible that she found ten of the shoes under the table.",
        question: "Do you agree with the judge?",
        rating: "5",

    }
];
const Filler_info3 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of shoes she found under the table is comparably high.",
        question: "Do you agree with the judge?",
        rating: "2",

    }
];
const Filler_info4 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of shoes she found under the table is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info5 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of shoes she found under the table is comparably high.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info6 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found eleven shoes under the table.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info7 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found eleven shoes under the table.",
        question: "Do you agree with the judge?",
        rating: "1",
    }
];
const Filler_info8 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of shoes she found under the table is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info9 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of pills she found on the table is comparably high.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info10 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found nine pills on the table.",
        question: "Do you agree with the judge?",
        rating: "1",

    }
];
const Filler_info11 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of pills she found on the table is comparably high.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info12 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found nine pills on the table.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info13 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found nine of the pills on the table.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info14 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found eleven of the pills on the table.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info15 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found nine pills on the table.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info16 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found eleven pills on the table.",
        question: "Do you agree with the judge?",
        rating: "1",
    }
];
const Filler_info17 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of torches she found in the drawer is comparably high.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info18 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found eleven of the torches in the drawer.",
        question: "Do you agree with the judge?",
        rating: "1",

    }
];
const Filler_info19 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found eleven torches in the drawer.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info20 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of torches she found in the drawer is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info21 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found nine of the torches in the drawer.",
        question: "Do you agree with the judge?",
        rating: "2",

    }
];
const Filler_info22 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found nine torches in the drawer.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info23 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found ten torches in the drawer.",
        question: "Do you agree with the judge?",
        rating: "1",
    }
];
const Filler_info24 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found ten torches in the drawer.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info25 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found ten of the books on the shelf.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info26 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of books she found on the shelf is comparably high.",
        question: "Do you agree with the judge?",
        rating: "2",

    }
];
const Filler_info27 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found eleven books on the shelf.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info28 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found ten books on the shelf.",
        question: "Do you agree with the judge?",
        rating: "5",

    }
];
const Filler_info29 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she found ten books on the shelf.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info30 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of books she saw on the shelf is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info31 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw ten books on the shelf.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info32 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw nine books on the shelf.",
        question: "Do you agree with the judge?",
        rating: "1",
    }
];
const Filler_info33 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of men she saw on the street is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info34 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of men she saw on the street is comparably high.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info35 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw eleven men on the street.",
        question: "Do you agree with the judge?",
        rating: "1",
    }
];
const Filler_info36 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw nine men on the street.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info37 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw ten men on the street.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info38 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of men she saw on the street is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info39 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw ten of the men on the street.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info40 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw nine of the men on the street.",
        question: "Do you agree with the judge?",
        rating: "1",
    }
];
const Filler_info41 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw eleven of the guns in the bag.",
        question: "Do you agree with the judge?",
        rating: "1",

    }
];
const Filler_info42 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of guns she saw in the bag is comparably high.",
        question: "Do you agree with the judge?",
        rating: "2",

    }
];
const Filler_info43 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of guns she saw in the bag is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info44 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw ten guns in the bag.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info45 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw ten guns in the bag.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info46 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of guns she saw in the bag is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info47 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw nine guns in the bag.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info48 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw nine guns in the bag.",
        question: "Do you agree with the judge?",
        rating: "1",
    }
];
const Filler_info49 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw eleven of the pictures on the wall.",
        question: "Do you agree with the judge?",
        rating: "1",

    }
];
const Filler_info50 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of pictures she saw on the wall is comparably high.",
        question: "Do you agree with the judge?",
        rating: "2",

    }
];
const Filler_info51 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of pictures she saw on the wall is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info52 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw ten pictures on the wall.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info53 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw ten pictures on the wall.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info54 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of pictures she saw on the wall is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info55 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw ten pictures on the wall.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info56 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw nine pictures on the wall.",
        question: "Do you agree with the judge?",
        rating: "1",
    }
];
const Filler_info57 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of rings she saw under the table is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",

    }
];
const Filler_info58 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she saw eleven of the rings under the table.",
        question: "Do you agree with the judge?",
        rating: "1",

    }
];
const Filler_info59 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she heard eleven beeps in the shower.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info60 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness thinks the number of beeps she heard in the shower is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info61 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she heard eleven of the beeps in the shower.",
        question: "Do you agree with the judge?",
        rating: "1",
    }
];
const Filler_info62 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she heard nine of the beeps in the shower.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info63 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she heard eleven beeps in the shower.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info64 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she heard ten beeps in the shower.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info65 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she heard nine cars on the street.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info66 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: ": The witness thinks the number of cars she heard on the street is comparably high.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info67 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: ": The witness thinks the number of cars she heard on the street is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info68 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she heard ten cars on the street.",
        question: "Do you agree with the judge?",
        rating: "2",
    }
];
const Filler_info69 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she heard ten cars on the street.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info70 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: ": The witness thinks the number of cars she heard on the street is comparably high.",
        question: "Do you agree with the judge?",
        rating: "4",
    }
];
const Filler_info71 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she heard ten cars on the street.",
        question: "Do you agree with the judge?",
        rating: "5",
    }
];
const Filler_info72 = [
    {
        optionLeft: "not justified at all",
        optionRight: "strongly justified",
        QUD: "The witness considers it possible that she heard nine cars on the street.",
        question: "Do you agree with the judge?",
        rating: "1",
    }
];



