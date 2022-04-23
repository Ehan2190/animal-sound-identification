function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/r9N1Tn46j/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error) {
        console.log('got Result')
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'i can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('alien1')
        img1 = document.getElementById('alien2')
        img2 = document.getElementById('alien3')
        img3 = document.getElementById('alien4')

        if (results[0].label == "background noise") {
        img.src = 'background.png';
        }else if (results[0].label == "bark") {
            img.src = 'dog 3.png';
        }else if (results[0].label == "meow") {
            img.src = 'cat.png.png';
        }else if (results[0].label == "moo") {
            img.src = 'cow.png';
        }else{
            img.src = 'lion.png';
        }
       
    }
}  