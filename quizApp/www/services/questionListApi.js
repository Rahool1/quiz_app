(function(){
  'use strict';
  angular.module('quizApp').factory('questionListApi',['$http','$q','ApiEndpoint',questionListApi]);

  function questionListApi($http,$q,ApiEndpoint){

    var questionList = [

{

    "direction_text": "Remember, you are looking for the word that does NOT belong in the same group as the others. Sometimes, all four words seem to fit in the same group. If so, look more closely to further narrow your classification.",
    "questions":

[

{

    "answer": 2,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "wing",
        "fin",
        "beak",
        "rudder"
    ]

},
{

    "answer": 3,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "core",
        "seeds",
        "pulp",
        "slice"
    ]

},
{

    "answer": 2,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "peninsula",
        "island",
        "bay",
        "cape"
    ]

},
{

    "answer": 3,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "fair",
        "just",
        "equitable",
        "favorable"
    ]

},
{

    "answer": 1,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "unique",
        "beautiful",
        "rare",
        "exceptional"
    ]

},
{

    "answer": 3,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "acute",
        "right",
        "obtuse",
        "parallel"
    ]

},
{

    "answer": 0,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "triangle",
        "circle",
        "oval",
        "sphere"
    ]

},
{

    "answer": 2,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "scythe",
        "knife",
        "pliers",
        "saw"
    ]

},
{

    "answer": 2,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "biology",
        "chemistry",
        "theology",
        "zoology"
    ]

},
{

    "answer": 3,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "evaluate",
        "assess",
        "appraise",
        "instruct"
    ]

},
{

    "answer": 2,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "defendant",
        "prosecutor",
        "trial",
        "judge"
    ]

},
{

    "answer": 0,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "aorta",
        "heart",
        "liver",
        "stomach"
    ]

},
{

    "answer": 1,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "mayor",
        "lawyer",
        "governor",
        "senator"
    ]

},
{

    "answer": 0,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "excite",
        "flourish",
        "prosper",
        "thrive"
    ]

},
{

    "answer": 2,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "seat",
        "rung",
        "cushion",
        "leg"
    ]

},
{

    "answer": 1,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "area",
        "variable",
        "circumference",
        "quadrilateral"
    ]

},
{

    "answer": 0,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "eel",
        "lobster",
        "crab",
        "shrimp"
    ]

},
{

    "answer": 1,
    "question": "Which word does NOT belong with the others?",
    "options":

            [
                "two",
                "three",
                "six",
                "eight"
            ]
        }
    ]

},
{

    "direction_text": "Three of the words will be in the same classification, the remaining one will not be. Your answer will be the one word that does NOT belong in the same classification as the others.",
    "questions":

[

{

    "answer": 3,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "parsley",
        "basil",
        "dill",
        "mayonnaise"
    ]

},
{

    "answer": 1,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "inch",
        "ounce",
        "centimeter",
        "yard"
    ]

},
{

    "answer": 3,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "tyre",
        "steering wheel",
        "engine",
        "car"
    ]

},
{

    "answer": 2,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "tulip",
        "rose",
        "bud",
        "daisy"
    ]

},
{

    "answer": 0,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "rye",
        "sourdough",
        "pumpernickel",
        "loaf"
    ]

},
{

    "answer": 1,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "guitar",
        "flute",
        "violin",
        "cello"
    ]

},
{

    "answer": 1,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "dodge",
        "flee",
        "duck",
        "avoid"
    ]

},
{

    "answer": 1,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "branch",
        "dirt",
        "leaf",
        "root"
    ]

},
{

    "answer": 0,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "street",
        "freeway",
        "interstate",
        "expressway"
    ]

},
{

    "answer": 2,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "heading",
        "body",
        "letter",
        "closing"
    ]

},
{

    "answer": 0,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "tape",
        "twine",
        "cord",
        "yarn"
    ]

},
{

    "answer": 2,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "leopard",
        "cougar",
        "elephant",
        "lion"
    ]

},
{

    "answer": 1,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "couch",
        "rug",
        "table",
        "chair"
    ]

},
{

    "answer": 3,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "cornea",
        "retina",
        "pupil",
        "vision"
    ]

},
{

    "answer": 2,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "noun",
        "preposition",
        "punctuation",
        "adverb"
    ]

},
{

    "answer": 0,
    "question": "Which word does NOT belong with the others?",
    "options":

    [
        "book",
        "index",
        "glossary",
        "chapter"
    ]

},
{

    "answer": 3,
    "question": "Which word does NOT belong with the others?",
    "options":

                [
                    "unimportant",
                    "trivial",
                    "insignificant",
                    "familiar"
                ]
            }
        ]
    }

];

    function getQuestionListData(id) {
        console.log(id);
        var q = $q.defer();

        $http.post(ApiEndpoint.url+'/quiz/send/question/',{id:id})
        .success(function(data) {
          console.log('Got some data: ', data);
          q.resolve(data);
        })
        .error(function(error){
          console.log('Had an error');
          console.log(error);
          q.reject(error);
        })

        return q.promise;

    };
    return{
      getQuestionListData:getQuestionListData
    };

  };

})();
