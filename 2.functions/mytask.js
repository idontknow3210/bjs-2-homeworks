function getArrayParams(...arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum, avg;
    sum=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i];
        }  
        if (arr[i]<min) {
            min = arr[i];
        } 
            sum += arr[i];
        }
        avg = +((sum/arr.length).toFixed(2));
        return {max: max, min: min, avg: avg};

    }
   

    function summElementsWorker(...arr) {
        if (arguments.length===0) {
            return 0;
        }
        let sum=0;
        for(let i=0; i<arr.length; i++) {
            sum+=arr[i];
    
        }
    
        return sum;
    }
    
    
    
    function differenceMaxMinWorker (...arr) {
        if (arguments.length===0) {
            return 0;
        }
        let max, min;
        max=-Infinity;
        min=Infinity;
        for(let i=0; i<arr.length; i++) {
            if (arr[i]>max) {
                max=arr[i];
            }
            if (arr[i]<min) {
                min=arr[i];
            }
            
        }
        
        return max-min;
    }
    
    
    function differenceEvenOddWorker(...arr) {
        if (arguments.length===0) {
            return 0;
        }
        let sumEvenElement, sumOddElement;
        sumEvenElement=0;
        sumOddElement=0;
        for(let i=0; i<arr.length; i++) {
            if (arr[i]%2===0) {
                sumEvenElement+=arr[i];
            } else {
                sumOddElement+=arr[i];
            }
            
        }
        return sumEvenElement-sumOddElement;
            
    }
    
    function averageEvenElementsWorker(...arr) {
        if (arguments.length===0) {
            return 0;
        }
        let sumEvenElement, countEvenElement;
        sumEvenElement=0;
        countEvenElement=0;
        for(let i=0; i<arr.length; i++) {
            if (arr[i]%2===0) {
                sumEvenElement+=arr[i];
                countEvenElement++;
            }
    
        }
        return sumEvenElement/countEvenElement;
    }
    
    function makeWork (arrOfArr, func) {
        
        let maxWorkerResult=-Infinity;
        for(let i=0; i<arrOfArr.length; i++) {
            const max=func(...arrOfArr[i]);
            if (max>maxWorkerResult) {
                maxWorkerResult=max;
            }
    
        }
        return maxWorkerResult;
    }


