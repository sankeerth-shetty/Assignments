let ImageData = document.getElementsByClassName('vc-imgs');
    // let ImageData = [10,20,30,40,50];
    // console.log(ImageData);
    let count = 0;
    function Slider() {
        // console.log(ImageData);

        // for (let index = 0; index < ImageData.length; index++) {
        //     const element = ImageData[index];
        // //     console.log(element);
            
        // }



        for (let index = 0; index < ImageData.length; index++) {
            // console.log(index);
            ImageData[index].style.display="none"            
            document.getElementsByClassName('vc-imgs')[index].style.display="none"            
        }
        if (count >= ImageData.length ) {
            count = 0
        }
        ImageData[count].style.display="block"
        console.log("Count : ",count);
        count++;            
        // ImageData[0].style.display="none"            
        // ImageData[1].style.display="none"            
                    
    }
    Slider();
    setInterval(Slider, 2000);
    // setTimeout(Slider, 1000);
    