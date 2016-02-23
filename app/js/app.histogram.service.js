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
            return "The Linux Foundation protects and promotes " +
                "the ideals of freedom and generous collaboration " +
                "established through the development of Linux, and " +
                "shares these ideals to power any endeavor " +
                "aiming to make the future a better place in which to live. " +
                "By supporting the kernel development community and fostering " +
                "collaboration on a truly massive scale, the Linux Foundation " +
                "unites thousands of curious minds in the free and open exchange of ideas. " +
                "We are here to provide the crucial services and collaborative " +
                "infrastructure to continue Linux's advancement and protection, " +
                "and we're here to serve as a tour guide for companies who need " +
                "to build an open source strategy for their business and make " +
                "the most of the new collaborative software economy."
        }


    }


})();