var song= "audios/Fragrance_To_Fire_-_Dunsin_Oyekan.MP3"
var audioToPlay= new Audio(song)


function checkValue() {
    if (num.value != "") {
        if (num.value >= 0 && num.value < 40) {
            console.log("F");
            show.innerHTML = "You scored F. What is pity!"
          
        } else if (num.value >= 40 && num.value < 45) 
        {
            console.log("E");
            show.innerHTML =" You scored E. Absolutey unfair"
          
        } 
        else if (num.value>=45 && num.value <50)
        {
            console.log("D");
            show.innerHTML ="You scored D. Your Score is low"
            
        } 
        else if (num.value>=50 && num.value <55)
        {
            console.log("C5");
            show.innerHTML ="You scored C5. You tried, but you can do better."
        }
        else if (num.value>=55 && num.value <60)
        {
            console.log("C4");
            show.innerHTML ="You scored C4. Good result, but work harder for excellent"
        } 
        else if (num.value>=60 && num.value <65)
        {
            console.log("B2");
            show.innerHTML ="You scored B2. Good Result"
        }
        else if (num.value>=65 && num.value <70)
        {
            console.log("B");
            show.innerHTML ="You scored B. Excellent Result"
        }
        else if (num.value>=70 && num.value <=100)
        {
            console.log("A1");
            show.innerHTML ="You scored A1. Excellent. You have been awarded a Full Schollarship to study your Masters at Oxford University. Congratulation!!! "
            audioToPlay.play()
        }
        else if (num.value>=101 && num.value <1000)
        {
            console.log("INVALID");
            show.innerHTML="INVALID"
        }
        else if (num.value>=-1000 && num.value <-1)
        {
            console.log("INVALID");
            show.innerHTML="INVALID"
        }
        }
        else {
        alert("Please fill in the empty space")
        }
   
}

