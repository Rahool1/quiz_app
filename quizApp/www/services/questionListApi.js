(function(){
  'use strict';
  angular.module('quizApp').factory('questionListApi',[questionListApi]);

  function questionListApi(){

    var questionList = [
{

    "direction_text": null,
    "questions":

[

{

    "answer": 3,
    "question": "A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is :",
    "options":

    [
        "1\n\n\n4",
        "1\n\n\n10",
        "7\n\n\n15",
        "8\n\n\n15"
    ]

},
{

    "answer": 2,
    "question": "A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in:",
    "options":

    [
        "9\n1\ndays\n\n\n5",
        "9\n2\ndays\n\n\n5",
        "9\n3\ndays\n\n\n5",
        "10"
    ]

},
{

    "answer": 1,
    "question": "\nA, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?\n",
    "options":

    [
        "12 days",
        "15 days",
        "16 days",
        "18 days"
    ]

},
{

    "answer": 1,
    "question": "A is thrice as good as workman as B and therefore is able to finish a job in 60 days less than B. Working together, they can do it in:\n",
    "options":

    [
        "20 days",
        "22\n1\ndays\n\n\n2",
        "25 days",
        "30 days"
    ]

},
{

    "answer": 1,
    "question": "\nA alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?\n",
    "options":

    [
        "Rs. 375",
        "Rs. 400",
        "Rs. 600",
        "Rs. 800"
    ]

},
{

    "answer": 0,
    "question": "\nIf 6 men and 8 boys can do a piece of work in 10 days while 26 men and 48 boys can do the same in 2 days, the time taken by 15 men and 20 boys in doing the same type of work will be:\n",
    "options":

    [
        "4 days",
        "5 days",
        "6 days",
        "7 days"
    ]

},
{

    "answer": 2,
    "question": "A can do a piece of work in 4 hours; B and C together can do it in 3 hours, while A and C together can do it in 2 hours. How long will B alone take to do it?",
    "options":

    [
        "8 hours",
        "10 hours",
        "12 hours",
        "24 hours"
    ]

},
{

    "answer": 2,
    "question": "\nA can do a certain work in the same time in which B and C together can do it. If A and B together could do it in 10 days and C alone in 50 days, then B alone could do it in:\n",
    "options":

    [
        "15 days",
        "20 days",
        "25 days",
        "30 days"
    ]

},
{

    "answer": 2,
    "question": "A does 80% of a work in 20 days. He then calls in B and they together finish the remaining work in 3 days. How long B alone would take to do the whole work?",
    "options":

    [
        "23 days",
        "37 days",
        "37",
        "40 days"
    ]

},
{

    "answer": 3,
    "question": "A machine P can print one lakh books in 8 hours, machine Q can print the same number of books in 10 hours while machine R can print them in 12 hours. All the machines are started at 9 A.M. while machine P is closed at 11 A.M. and the remaining two machines complete work. Approximately at what time will the work (to print one lakh books) be finished ?",
    "options":

    [
        "11:30 A.M.",
        "12 noon",
        "12:30 P.M.",
        "1:00 P.M."
    ]

},
{

    "answer": 2,
    "question": "A can finish a work in 18 days and B can do the same work in 15 days. B worked for 10 days and left the job. In how many days, A alone can finish the remaining work?",
    "options":

    [
        "5",
        "5\n1\n\n\n2",
        "6",
        "8"
    ]

},
{

    "answer": 1,
    "question": "\n4 men and 6 women can complete a work in 8 days, while 3 men and 7 women can complete it in 10 days. In how many days will 10 women complete it?\n",
    "options":

    [
        "35",
        "40",
        "45",
        "50"
    ]

},
{

    "answer": 3,
    "question": "A and B can together finish a work 30 days. They worked together for 20 days and then B left. After another 20 days, A finished the remaining work. In how many days A alone can finish the work?",
    "options":

    [
        "40",
        "50",
        "54",
        "60"
    ]

},
{

    "answer": 0,
    "question": "\nP can complete a work in 12 days working 8 hours a day. Q can complete the same work in 8 days working 10 hours a day. If both P and Q work together, working 8 hours a day, in how many days can they complete the work?\n",
    "options":

    [
        "5\n5\n\n\n11",
        "5\n6\n\n\n11",
        "6\n5\n\n\n11",
        "6\n6\n\n\n11"
    ]

},
{

    "answer": 2,
    "question": "\n10 women can complete a work in 7 days and 10 children take 14 days to complete the work. How many days will 5 women and 10 children take to complete the work?\n",
    "options":

                [
                    "3",
                    "5",
                    "7",
                    "Cannot be determined",
                    "E.",
                    "None of these"
                ]
            }
        ]
    }

];

    function getQuestionListData(id) {
        console.log(id);
        return questionList;
    };
    return{
      getQuestionListData:getQuestionListData
    };

  };

})();
