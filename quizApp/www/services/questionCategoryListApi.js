(function(){
  'use strict';
  angular.module('quizApp').factory('questionCategoryListApi',[questionCategoryListApi]);

  function questionCategoryListApi(){

    var queCatList = [
      { title: 'Arithmetic Aptitude', id: 1 },
      { title: 'Data Interpretation', id: 2 },
      { title: 'Logical Reasoning', id: 3 },
      { title: 'Verbal Reasoning', id: 4 },
      { title: 'Nonverbal Reasoning', id: 5 }
    ];

    function getQueCatList(){
      return queCatList;
    };

    return{
      getQueCatList:getQueCatList()
    };

  };

})();
