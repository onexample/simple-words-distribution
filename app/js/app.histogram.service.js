/**
 * Created by manick on 20.02.16.
 */

(function(){
    'use strict';

    angular
        .module('WordsDistribution')
        .service('HistogramService',HistogramService);


    HistogramService.$inject=[];

    function HistogramService(){

        return {
            getWordsHistogram:getWordsHistogram
        }


        function getWordsHistogram(str){

            var result;

            console.log(str);

            result=str.match(/\w+\s+/g);


            return result;
        }

    }


})();