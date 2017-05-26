
//
// class DecCalculator {
//
// }

import { Calculator } from './Calculator'

class DecCalculator extends Calculator {
    constructor(settings) {   // element drzewa DOM, .dec-calculator,
        super(settings);
        console.log( this.getName() );
    }

    checkNumber() {
        let root =  this.$calculatorDOMElement;
        let $firstNumber = root.children(".group-number").children("label:first-child").find("input");
        let $secondNumber = root.children(".group-number").children("label:nth-child(2)").find("input");
        let $resultNumber = root.children(".group-number").children(".result-bit");
        for(let i = $firstNumber.length-1, j = 0; i >= 0 ; i--, j++) {
            this.firstNumberArray[i] = parseInt( $firstNumber.eq(j).val()); // poniewaz wartosc z inputu, dlatego parseInt
            this.secondNumberArray[i] = parseInt( $secondNumber.eq(j).val()) ;
            this.resultNumberArray[i] = parseInt( $resultNumber.eq(j).val());
        }
        this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
        this.updateResult();
    }

    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let carryBit =  numberX[i] + numberY[i] + result[i];
            if (carryBit > 9){
                let cbs = carryBit.toString();
                result[i] = parseInt(cbs[1]); //wstawiamy drugą cyfrę jesli dwucyfrowa
                result[i - 1] += 1; // przekazujemy 1 do kolejnego indeksu
            } else {
                result[i] = carryBit;
            }
        }

        return result;
    }

    changeNumber(root) {
        let activeElement = root.find('.active');
        activeElement.removeClass("active");
        activeElement.siblings().addClass("active");
        this.checkNumber();

    }

    updateResult() {
        let root =  this.$calculatorDOMElement;
        let $resultNumber = root.children(".group-number").children(".result-bit");
        for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
            let valueResult = parseInt( $resultNumber.eq(j).find(".active").text() );
            if( this.resultNumberArray[i] != valueResult ) {
                let activeElement = $resultNumber.eq(j).find(".active").removeClass("active");
                activeElement.siblings().addClass("active");
                $resultNumber.eq(j).children(":first-child").html(this.resultNumberArray[i]);
            }
        }
    }

    initEvents() {
        let self = this;
        this.$calculatorDOMElement.find(".display-number").on("keyup", "input", function(event) {
            const parentLabel = $(event.target).parent(".display-number");
            self.changeNumber(parentLabel);
        })
    }
}

export { DecCalculator }
