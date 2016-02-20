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


        activate();




        function activate(){
            self.fileString="ProgForce, more than anything else, is a league of extraordinary talent" +
                "- sought, refined, and dedicated to providing the most impeccable " +
                "intelligence and service. Our team of professional software developers" +
                " are specially chosen through a process of selection based not only on" +
                " training, but conception and creative application. Our people don't just" +
                " plug in the numbers. Our people create custom solutions for custom needs.";

            self.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
            self.series = ['Repeatable Words'];

            self.data = [
                [2, 3, 4, 5, 3, 3, 2]
            ];

        }


        function calculateWords (){
            self.tmp=HistogramService.getWordsHistogram(self.fileString);
        }

        function showContent($fileContent){
            self.fileString = $fileContent;
        }

        function readFile(){
            var reader=new FileReader();

            //reader.readAsBinaryString(self.file.lfFile)


            reader.onload=function(){
                console.log(reader.result)
            }

            reader.readAsText(self.file[0].file)




        }








    }


})();