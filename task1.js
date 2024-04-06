

        // task3

        // function fahrenheitCelsius(fahrenheit) {
        //     let celsius = (fahrenheit - 32) * 5 / 9;
        //     return celsius;
        // }
        // let fahrenheitDerece = 72;

        // console.log(fahrenheitCelsius( fahrenheitDerece));


            //  task2

    let array = [1,3,4,2,2]
    function reqem(array){
        let eded=0
        for (let i = 0; i < array.length; i++) {
            for (let j = i+1; j< array.length; j++) {
                if(array[j]==array[i]){
                    eded=array[i]
                }
            }
        }
        return eded
    }
   console.log(reqem(array));