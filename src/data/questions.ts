export interface Question {
    questionText: string;
    type: 'radio' | 'checkbox' | 'text' | 'boolean';
    options?: string[]; // Optional for text type, required for radio/checkbox/boolean
    correctAnswer: string | string[];
  }
  
  export const questions: Question[] = [
    // TRUE/FALSE (Y/N) Questions from image_792cf6.png and image_792c36.png
    {
      questionText: 'HTML stands for Hypertext Mark Language.',
      type: 'boolean',
      correctAnswer: 'N',
    },
    {
      questionText: '<h1 Defines the less important heading.',
      type: 'boolean',
      correctAnswer: 'N',
    },
    {
      questionText: '<!DOCTYPE html> defines that this document is an HTML4 document.',
      type: 'boolean',
      correctAnswer: 'N',
    },
    {
      questionText: '<a href="https://google.com">Google</a> "Google" part is called "attribute" of the <a> (anchor) tag.',
      type: 'boolean',
      correctAnswer: 'N',
    },
    {
      questionText: '"class" is NOT one of core attributes of HTML.',
      type: 'boolean',
      correctAnswer: 'N',
    },
    {
      questionText: 'HTML describes the structure of Web Page.',
      type: 'boolean',
      correctAnswer: 'Y',
    },
    {
      questionText: '<i> tag will make the text italic.',
      type: 'boolean',
      correctAnswer: 'Y',
    },
    {
      questionText: '<li> defines unordered list.',
      type: 'boolean',
      correctAnswer: 'N', // <li> defines list item, not unordered list itself (<ul> defines unordered list)
    },
    {
      questionText: '<h6> defines the most important heading.',
      type: 'boolean',
      correctAnswer: 'N', // <h1> is the most important
    },
    {
      questionText: 'All of the HTML tags will have both opening and closing tags.',
      type: 'boolean',
      correctAnswer: 'N', // e.g., <br>, <img>, <input>
    },
    {
      questionText: 'The letter "p" of <p> tag stands for "paragraph".',
      type: 'boolean',
      correctAnswer: 'Y',
    },
    {
      questionText: 'For each HTML tag you can add attribute(s).',
      type: 'boolean',
      correctAnswer: 'Y',
    },
    {
      questionText: '<html> tag should always have "lang" attribute and the value should be "ja". <html lang="ja">',
      type: 'boolean',
      correctAnswer: 'N', // It's good practice to have 'lang', but not *always* required, and the value isn't *always* "ja".
    },
    {
      questionText: '<meta> tag(s) should be nested inside <body> tag.',
      type: 'boolean',
      correctAnswer: 'N', // <meta> tags are typically in <head>
    },
    {
      questionText: 'Character encoding should be defined always as shown below: <meta charset="shift_jis">',
      type: 'boolean',
      correctAnswer: 'N', // UTF-8 is more common and recommended.
    },
    {
      questionText: 'To create an HTML form all of the <input> elements should not always be nested inside <form> tag.',
      type: 'boolean',
      correctAnswer: 'N', // Inputs for a form should generally be inside the <form> tag to be submitted with it.
    },
    {
      questionText: 'To create a select box you just only have to use <select> tag.',
      type: 'boolean',
      correctAnswer: 'N', // You also need <option> tags inside <select>.
    },
    {
      questionText: 'You need to add closing tag for <input> element(s).',
      type: 'boolean',
      correctAnswer: 'N', // <input> is a self-closing tag.
    },
    {
      questionText: '"br" of <br> tag stands for "break"(line break).',
      type: 'boolean',
      correctAnswer: 'Y',
    },
    {
      questionText: 'To make an HTML form work properly you need to include necessary attributes in <form> tag.',
      type: 'boolean',
      correctAnswer: 'Y',
    },
    {
      questionText: 'To create an HTML table with border you do not need to give any attribute to <table> tag.',
      type: 'boolean',
      correctAnswer: 'N', // While CSS is preferred, historically `border` attribute was used. Without any attribute, it might not render a visible border by default.
    },
    {
      questionText: '"tr" of <tr> tag stands for "table record".',
      type: 'boolean',
      correctAnswer: 'N', // "table row"
    },
    {
      questionText: '"th" of <th> tag stands for "table heading".',
      type: 'boolean',
      correctAnswer: 'Y',
    },
    {
      questionText: '"td" of <td> tag stands for "table definition".',
      type: 'boolean',
      correctAnswer: 'N', // "table data"
    },
    {
      questionText: '<table> tag and the descendant tag elements(<thead/>, <tbody/>, <tr/>, <th/>, <td/>) can be used as a kind of grid system to arrange / allocate various HTML elements.',
      type: 'boolean',
      correctAnswer: 'Y',
    },
    {
      questionText: "There's no comment tag in HTML.",
      type: 'boolean',
      correctAnswer: 'N', // is the comment tag.
    },
    {
      questionText: 'Internal CSS is the only one option to apply styles to an HTML.',
      type: 'boolean',
      correctAnswer: 'N', // External CSS and Inline CSS are also options.
    },
    {
      questionText: 'To download a source code from Git remote repository which is like GitLab you can use the following command; git copy [remote_repository_url]/[author_name]/[project_name].git',
      type: 'boolean',
      correctAnswer: 'N', // The command is `git clone`.
    },
    {
      questionText: 'Using Git with SSH you need to be careful of company proxy / firewall settings(SSH port: 22 can not be used for some security reasons).',
      type: 'boolean',
      correctAnswer: 'Y',
    },
    {
      questionText: 'Git application was created by the author of Linux in 2005.',
      type: 'boolean',
      correctAnswer: 'Y', // Linus Torvalds created Git.
    },
    // MULTIPLE CHOICE Questions from image_792cd5.png, image_792cb3.png, image_792c93.png, image_792c74.png, image_792c55.png
    {
      questionText: 'HTML tag to create hyperlink:',
      type: 'radio',
      options: ['<li>', '<p>', '<a>', '<b>'],
      correctAnswer: '<a>',
    },
    {
      questionText: 'HTML tag to show an image on a web page:',
      type: 'radio',
      options: ['<image>', '<picture>', '<img>', '<figure>'],
      correctAnswer: '<img>',
    },
    {
      questionText: 'HTML tag to show horizontal rule:',
      type: 'radio',
      options: ['<br>', '<line>', '<rule>', '<hr>'],
      correctAnswer: '<hr>',
    },
    {
      questionText: 'An attribute name to specify an URL in a hyperlink tag:',
      type: 'radio',
      options: ['src', 'link', 'href', 'rel'],
      correctAnswer: 'href',
    },
    {
      questionText: 'How to comment out HTML:',
      type: 'radio',
      options: ['none', '// Hello world.', '/* Hello world. */', ''],
      correctAnswer: '',
    },
    {
      questionText: 'How to link style.css script with an html:',
      type: 'radio',
      options: [
        '<style rel="stylesheet" type="text/css" href="style.css">',
        '<link rel="stylesheet" type="text/css" href="style.css">',
        '<a rel="stylesheet" type="text/css" href="style.css">'
      ],
      correctAnswer: '<link rel="stylesheet" type="text/css" href="style.css">',
    },
    {
      questionText: 'Which of the following options is correct as a JavaScript variable name?',
      type: 'radio',
      options: ['20users', 'users', 'user-name', '~user'],
      correctAnswer: 'users',
    },
    {
      questionText: 'Which of the following options is a camel case string?',
      type: 'radio',
      options: ['constructionCode', 'ConstructionCode', 'construction_code', 'construction-code'],
      correctAnswer: 'constructionCode',
    },
    {
      questionText: 'Which of the following options is NOT a JavaScript data type?',
      type: 'radio',
      options: ['Null', 'Boolean', 'String', 'Dictionary'],
      correctAnswer: 'Dictionary', // JavaScript has Objects, not a distinct "Dictionary" type
    },
    {
      questionText: 'Which of the following options is NOT a method to add new element to the array? const fruits = ["Apple", "Banana"];',
      type: 'radio',
      options: ['fruits.unshift("Orange")', 'fruits.push("Orange")', 'fruits.Add("Orange")'],
      correctAnswer: 'fruits.Add("Orange")', // `Add` is not a standard array method, it should be `push` or `unshift` or `splice`
    },
    {
      questionText: 'Which of the following options is a correct JSON(JavaScript Object Notation) format?',
      type: 'radio',
      options: [
        '{category: "設備", Item1: "システムキッチン", Item2: "システムキッチン", Item3: "i-クオリティ・シリーズ:ピアノ鏡面塗装タイプ", color: "ピｱﾉ･ﾌﾞﾗｳﾝ(PBW)"}',
        '{"category": "設備", "Item1": "システムキッチン", "Item2": "システムキッチン", "Item3": "i-クオリティ・シリーズ:ピアノ鏡面塗装タイプ", "color": "ピｱﾉ･ﾌﾞﾗｳﾝ(PBW)"}',
        '{category: 設備, Item1: システムキッチン, Item2: システムキッチン屋, Item3: i-クオリティ・シリーズ:ピアノ鏡面塗装タイプ, color: ピｱﾉ･ﾌﾞﾗｳﾝ(PBW)}'
      ],
      correctAnswer: '{"category": "設備", "Item1": "システムキッチン", "Item2": "システムキッチン", "Item3": "i-クオリティ・シリーズ:ピアノ鏡面塗装タイプ", "color": "ピｱﾉ･ﾌﾞﾗｳﾝ(PBW)"}',
    },
    {
      questionText: 'Which of the following options is a correct UDF: User Defined Function of JavaScript?',
      type: 'radio',
      options: [
        `public function MyFunction() { return "Hello World!"; }`,
        `def my_function(): print("Hello World!")`,
        `function myFunction() { return "Hello World!"; }`
      ],
      correctAnswer: 'function myFunction() { return "Hello World!"; }',
    },
    {
      questionText: 'Select a correct answer: const myArray = [1, 3, 5, 7]; console.log(myArray.map(x => x * 2))',
      type: 'radio',
      options: [
        `{'1': 2, '3': 6, '5': 10, '7': 14}`,
        `[2, 6, 10, 14]`,
        `array('1' => 2, '3' => 6, '5' => 10, '7' => 14)`
      ],
      correctAnswer: '[2, 6, 10, 14]',
    },
    {
      questionText: 'Select a correct answer: const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]; console.log(words.filter(word => word.length > 6));',
      type: 'radio',
      options: [
        `['exuberant', 'destruction', 'present']`,
        `['spray', 'limit', 'elite', 'destruction', 'present']`,
        `['exuberant', 'destruction']`
      ],
      correctAnswer: `['exuberant', 'destruction', 'present']`,
    },
    {
      questionText: 'Which of the following options is correct? const value1 = 80.7; const value2 = 10.1; const result = value1 - value2;',
      type: 'radio',
      options: ['70.6', '70', '70.60000000000001'],
      correctAnswer: '70.6', // Simple subtraction of decimals in JS usually works as expected for simple cases. Floating point inaccuracies are more complex.
    },
    {
      questionText: '[Problem] Related to #15 sometimes JavaScript will generate the kind of error. To avoid the case we should use the following computation:',
      type: 'radio',
      options: [
        'const result = Math.floor(value1 - value2);',
        'const result = Math.ceil(value1 - value2);',
        'const result = (value1 * 10 - value2 * 10) / 10;'
      ],
      correctAnswer: 'const result = (value1 * 10 - value2 * 10) / 10;', // This is a common way to handle floating point precision issues in JS for simple arithmetic.
    },
    {
      questionText: 'Which of the following options is correct? How to go to upper directory in CLI: Command Line Interface(CommandPromptWindow / Bash):',
      type: 'radio',
      options: ['cd .', 'cd ..', 'cp ..'],
      correctAnswer: 'cd ..',
    },
    {
      questionText: 'Which of the following options is NOT correct? https://gcportal.hrd-s.com/tsutatsu',
      type: 'radio',
      options: [
        'The segment of "https" is called "protocol".',
        'The segment of "gcportal" is called "subdomain".',
        'The segment of "com" is called "second-level domain".',
        'The segment of "tsutatsu" is called "sub directory".'
      ],
      correctAnswer: 'The segment of "gcportal" is called "subdomain".', // In this URL, "gcportal" is the domain name (or part of it), not a subdomain. "hrd-s" would be a subdomain if it was like 'gcportal.hrd-s.com'.
    },
    {
      questionText: 'Which of the following options is NOT correct?',
      type: 'radio',
      options: [
        'Port number: 80 is one of well-known ports.',
        'Port number:80 will be used for HTTPS protocol',
        'Port number:80 can be omit in the URL(no need to indicate like localhost:80).',
        '127.0.0.1 is same meaning with localhost.'
      ],
      correctAnswer: 'Port number:80 will be used for HTTPS protocol', // Port 80 is for HTTP, Port 443 is for HTTPS.
    },
    {
      questionText: 'Proper HTML code to set character encoding for multi-byte language is:',
      type: 'radio',
      options: ['<meta charset="sjis">', '<meta charset="euc-jp">', '<meta charset="utf-8">'],
      correctAnswer: '<meta charset="utf-8">',
    },
  ];