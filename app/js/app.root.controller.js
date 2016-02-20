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

        self.file=null;
        self.fileString=null;
        self.showContent=showContent;
        self.readFile=readFile;
        self.calculateWords=calculateWords;
        self.takeExample=takeExample;
        self.clear=clear;


        activate();




        function activate(){

            self.charts=HistogramService.getCharts();
            self.currentChart=self.charts[1];
            self.labels = [];
            self.series = ['Repeatable Words'];
            self.data = [[]];

        }

        function takeExample(){
            self.fileString="ProgForce, more than anything else, is a league of extraordinary talent" +
                "- sought, refined, and dedicated to providing the most impeccable " +
                "intelligence and service. Our team of professional software developers" +
                " are specially chosen through a process of selection based not only on" +
                " training, but conception and creative application. Our people don't just" +
                " plug in the numbers. Our people create custom solutions for custom needs.";
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
            }else{

            }


        }

        function showContent($fileContent){
            self.fileString = $fileContent;
        }

        function readFile(){
            var reader=new FileReader();

            //reader.readAsBinaryString(self.file.lfFile)


            reader.onload=function(){
                console.log(reader.result)
            };

            reader.readAsText(self.file[0].file)




        }








    }


})();