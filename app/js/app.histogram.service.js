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
            getCharts:getCharts
        };


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


        function getCharts(){
            return [
                'Line',
                'Bar',
                'Radar'
            ]
        }

    }


})();