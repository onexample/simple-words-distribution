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
            getWordsHistogram:getWordsHistogram,
            getCharts:getCharts,
            getExample:getExample
        };


        /**
         * @desc string as input, histogram map as output
         * @param str
         * @returns {Map|*}
         */


        function getWordsHistogram(str){

            var arr,sortedArr,map;

            sortedArr=[];
            map=new Map();
            arr=str.match(/[a-zA-Z,.:'`]{2,}/g).sort();

            for (var i=0;i<arr.length;i++){
                sortedArr.push(arr[i].toLowerCase());
            }

            for (var i=0;i<sortedArr.length;i++){
                var key;
                key = sortedArr[i];

                if(map.has(key)){
                    var value=map.get(key);
                    map.set(key,value+1)
                }else{
                    map.set(key,1)
                }
            }

            for (var val of map){
                var key,value;
                key=val[0];
                value=val[1];

                if(value<2){
                    map.delete(key);
                }
            }

            return map;
        }


        /**
         *
         * @returns {string[]}
         */


        function getCharts(){
            return [
                'Line',
                'Bar',
                'Radar'
            ]
        }


        function getExample(){
            return "ProgForce, more than anything else, is a league of extraordinary talent" +
                "- sought, refined, and dedicated to providing the most impeccable " +
                "intelligence and service. Our team of professional software developers" +
                " are specially chosen through a process of selection based not only on" +
                " training, but conception and creative application. Our people don't just" +
                " plug in the numbers. Our people create custom solutions for custom needs.";
        }


    }


})();