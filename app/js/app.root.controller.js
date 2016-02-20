/**
 * Created by manick on 20.02.16.
 */
(function(){
    'use strict';

    angular
        .module('WordsDistribution')
        .controller('RootController',RootController);

    RootController.$inject=['HistogramService'];

    function RootController(HistogramService){

        var self=this;


        /**
         *
         * @desc View block, all html binds described here
         */
        self.file=null;
        self.fileString=null;
        self.labels=null;
        self.currentChart=null;
        self.data=null;
        self.charts=null;
        self.series=null;
        self.isShowChart=null;
        self.showContent=showContent;
        self.calculateWords=calculateWords;
        self.takeExample=takeExample;
        self.clear=clear;



        activate();


        /**
         * @desc activates all default values;
         */
        function activate(){
            self.isShowChart=true;
            self.charts=HistogramService.getCharts();
            self.currentChart=self.charts[1];
            self.labels = [];
            self.series = ['Repeatable Words'];
            self.data = [[]];
        }



        function takeExample(){
            self.fileString=HistogramService.getExample();
            calculateWords();
        }

        function clear(){
            self.fileString='';
        }

        function calculateWords (){
            self.data = [[]];
            self.labels = [];
            var map=HistogramService.getWordsHistogram(self.fileString);
            if(map.size!==0) {
                for (var val of map) {
                    self.labels.push(val[0]);
                    self.data[0].push(val[1]);
                }
                self.isShowChart=true;
            }else{
                self.isShowChart=false;
            }
        }

        function showContent($fileContent){
            self.fileString = $fileContent;
            calculateWords();
        }


    }


})();