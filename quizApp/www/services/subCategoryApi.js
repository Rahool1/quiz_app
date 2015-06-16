(function(){
  'use strict';
  angular.module('quizApp').factory('subQueCategory',['$http',subQueCategory]);

  function subQueCategory($http){




var queCatList = [

{

    "id": 1,
    "name": "Aptitude",
    "parent": null,
    "child":

    [
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35
    ]

},
{

    "id": 2,
    "name": "percentage",
    "parent": 1,
    "child": null

},
{

    "id": 3,
    "name": "pipes-and-cistern",
    "parent": 1,
    "child": null

},
{

    "id": 4,
    "name": "probability",
    "parent": 1,
    "child": null

},
{

    "id": 5,
    "name": "problems-on-hcf-and-lcm",
    "parent": 1,
    "child": null

},
{

    "id": 6,
    "name": "boats-and-streams",
    "parent": 1,
    "child": null

},
{

    "id": 7,
    "name": "square-root-and-cube-root",
    "parent": 1,
    "child": null

},
{

    "id": 8,
    "name": "chain-rule",
    "parent": 1,
    "child": null

},
{

    "id": 9,
    "name": "time-and-distance",
    "parent": 1,
    "child": null

},
{

    "id": 10,
    "name": "bankers-discount",
    "parent": 1,
    "child": null

},
{

    "id": 11,
    "name": "numbers",
    "parent": 1,
    "child": null

},
{

    "id": 12,
    "name": "alligation-or-mixture",
    "parent": 1,
    "child": null

},
{

    "id": 13,
    "name": "profit-and-loss",
    "parent": 1,
    "child": null

},
{

    "id": 14,
    "name": "decimal-fraction",
    "parent": 1,
    "child": null

},
{

    "id": 15,
    "name": "odd-man-out-and-series",
    "parent": 1,
    "child": null

},
{

    "id": 16,
    "name": "races-and-games",
    "parent": 1,
    "child": null

},
{

    "id": 17,
    "name": "stocks-and-shares",
    "parent": 1,
    "child": null

},
{

    "id": 18,
    "name": "permutation-and-combination",
    "parent": 1,
    "child": null

},
{

    "id": 19,
    "name": "true-discount",
    "parent": 1,
    "child": null

},
{

    "id": 20,
    "name": "problems-on-numbers",
    "parent": 1,
    "child": null

},
{

    "id": 21,
    "name": "partnership",
    "parent": 1,
    "child": null

},
{

    "id": 22,
    "name": "surds-and-indices",
    "parent": 1,
    "child": null

},
{

    "id": 23,
    "name": "time-and-work",
    "parent": 1,
    "child": null

},
{

    "id": 24,
    "name": "volume-and-surface-area",
    "parent": 1,
    "child": null

},
{

    "id": 25,
    "name": "problems-on-trains",
    "parent": 1,
    "child": null

},
{

    "id": 26,
    "name": "logarithm",
    "parent": 1,
    "child": null

},
{

    "id": 27,
    "name": "area",
    "parent": 1,
    "child": null

},
{

    "id": 28,
    "name": "average",
    "parent": 1,
    "child": null

},
{

    "id": 29,
    "name": "simple-interest",
    "parent": 1,
    "child": null

},
{

    "id": 30,
    "name": "calendar",
    "parent": 1,
    "child": null

},
{

    "id": 31,
    "name": "compound-interest",
    "parent": 1,
    "child": null

},
{

    "id": 32,
    "name": "simplification",
    "parent": 1,
    "child": null

},
{

    "id": 33,
    "name": "height-and-distance",
    "parent": 1,
    "child": null

},
{

    "id": 34,
    "name": "problems-on-ages",
    "parent": 1,
    "child": null

},
{

    "id": 35,
    "name": "clock",
    "parent": 1,
    "child": null

},
{

    "id": 36,
    "name": "Verbal and Reasoning",
    "parent": null,
    "child":

    [
        37,
        38,
        76
    ]

},
{

    "id": 37,
    "name": "Verbal Ability",
    "parent": 36,
    "child":

    [
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75
    ]

},
{

    "id": 38,
    "name": "Logical Reasoning",
    "parent": 36,
    "child":

    [
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56
    ]

},
{

    "id": 39,
    "name": "statement-and-argument",
    "parent": 38,
    "child": null

},
{

    "id": 40,
    "name": "logical-problems",
    "parent": 38,
    "child": null

},
{

    "id": 41,
    "name": "statement-and-conclusion",
    "parent": 38,
    "child": null

},
{

    "id": 42,
    "name": "letter-and-symbol-series",
    "parent": 38,
    "child": null

},
{

    "id": 43,
    "name": "artificial-language",
    "parent": 38,
    "child": null

},
{

    "id": 44,
    "name": "making-judgments",
    "parent": 38,
    "child": null

},
{

    "id": 45,
    "name": "analyzing-arguments",
    "parent": 38,
    "child": null

},
{

    "id": 46,
    "name": "statement-and-assumption",
    "parent": 38,
    "child": null

},
{

    "id": 47,
    "name": "essential-part",
    "parent": 38,
    "child": null

},
{

    "id": 48,
    "name": "course-of-action",
    "parent": 38,
    "child": null

},
{

    "id": 49,
    "name": "logical-deduction",
    "parent": 38,
    "child": null

},
{

    "id": 50,
    "name": "verbal-classification",
    "parent": 38,
    "child": null

},
{

    "id": 51,
    "name": "number-series",
    "parent": 38,
    "child": null

},
{

    "id": 52,
    "name": "analogies",
    "parent": 38,
    "child": null

},
{

    "id": 53,
    "name": "logical-games",
    "parent": 38,
    "child": null

},
{

    "id": 54,
    "name": "matching-definitions",
    "parent": 38,
    "child": null

},
{

    "id": 55,
    "name": "cause-and-effect",
    "parent": 38,
    "child": null

},
{

    "id": 56,
    "name": "verbal-reasoning",
    "parent": 38,
    "child": null

},
{

    "id": 57,
    "name": "change-of-speech",
    "parent": 37,
    "child": null

},
{

    "id": 58,
    "name": "paragraph-formation",
    "parent": 37,
    "child": null

},
{

    "id": 59,
    "name": "closet-test",
    "parent": 37,
    "child": null

},
{

    "id": 60,
    "name": "spellings",
    "parent": 37,
    "child": null

},
{

    "id": 61,
    "name": "completing-statements",
    "parent": 37,
    "child": null

},
{

    "id": 62,
    "name": "synonyms",
    "parent": 37,
    "child": null

},
{

    "id": 63,
    "name": "antonyms",
    "parent": 37,
    "child": null

},
{

    "id": 64,
    "name": "sentence-improvement",
    "parent": 37,
    "child": null

},
{

    "id": 65,
    "name": "ordering-of-words",
    "parent": 37,
    "child": null

},
{

    "id": 66,
    "name": "idioms-and-phrases",
    "parent": 37,
    "child": null

},
{

    "id": 67,
    "name": "comprehension",
    "parent": 37,
    "child": null

},
{

    "id": 68,
    "name": "change-of-voice",
    "parent": 37,
    "child": null

},
{

    "id": 69,
    "name": "verbal-analogies",
    "parent": 37,
    "child": null

},
{

    "id": 70,
    "name": "sentence-correction",
    "parent": 37,
    "child": null

},
{

    "id": 71,
    "name": "spotting-errors",
    "parent": 37,
    "child": null

},
{

    "id": 72,
    "name": "ordering-of-sentences",
    "parent": 37,
    "child": null

},
{

    "id": 73,
    "name": "sentence-formation",
    "parent": 37,
    "child": null

},
{

    "id": 74,
    "name": "selecting-words",
    "parent": 37,
    "child": null

},
{

    "id": 75,
    "name": "one-word-substitutes",
    "parent": 37,
    "child": null

},
{

    "id": 76,
    "name": "Verbal Reasoning",
    "parent": 36,
    "child":

    [
        77,
        78,
        79,
        80,
        81,
        82,
        55,
        83,
        84,
        85,
        86,
        87,
        88
    ]

},
{

    "id": 77,
    "name": "data-sufficiency",
    "parent": 76,
    "child": null

},
{

    "id": 78,
    "name": "classification",
    "parent": 76,
    "child": null

},
{

    "id": 79,
    "name": "analogy",
    "parent": 76,
    "child": null

},
{

    "id": 80,
    "name": "arithmetic-reasoning",
    "parent": 76,
    "child": null

},
{

    "id": 81,
    "name": "series-completion",
    "parent": 76,
    "child": null

},
{

    "id": 82,
    "name": "blood-relation-test",
    "parent": 76,
    "child": null

},
{

    "id": 83,
    "name": "syllogism",
    "parent": 76,
    "child": null

},
{

    "id": 84,
    "name": "cube-and-cuboid",
    "parent": 76,
    "child": null

},
{

    "id": 85,
    "name": "direction-sense-test",
    "parent": 76,
    "child": null

},
{

    "id": 86,
    "name": "seating-arrangement",
    "parent": 76,
    "child": null

},
{

    "id": 87,
    "name": "logical-sequence-of-words",
    "parent": 76,
    "child": null

},

    {
        "id": 88,
        "name": "verification-of-truth",
        "parent": 76,
        "child": null
    }

];



    function getSubQueCatList(id){
      // return $http({method:"GET", url:"http://127.0.0.1:4444/quiz/send/category/"}).then(function(result){
      //     return result.data;
      // });
        var idList = [];
        var subQuestionCatList = [];
        for(var i = 0;i < queCatList.length; i++){
            if(id == queCatList[i].id){
                idList = queCatList[i].child;
            }
        }

        for(var i = 0;i < queCatList.length; i++){
            for(var j = 0;j < idList.length; j++){
                if(idList[j] == queCatList[i].id){
                    subQuestionCatList.push(queCatList[i]);
                }
            }
        }

      return subQuestionCatList;

    };

    return{
      getSubQueCatList:getSubQueCatList
    };

  };

})();
