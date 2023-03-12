
function readTextFile(){
    let input = document.querySelector('input');
    let textarea = document.querySelector('textarea');
    let position=0;
    let files = input.files;
    if(files.length == 0)return;

    const file = files[0];

    let reader = new FileReader();

    
    reader.onload = (e) =>{
        const file = e.target.result;
        const lines = file.split('/r\n|\n/');
        
        textarea.value = lines.join('\n');
        // console.log(lines[42])
        let valF = lines.slice();
        valF=valF[0].split(/(?:\n| )+/);
        // console.log(valF)
        position += parseInt(valF[0]);
        for(var i=1; i<85;i++){
            
            if(i % 2 == 0){
                position-=parseInt(valF[i]);
            }
            else{
                position+=parseInt(valF[i]);
            }
            
            }
            console.log(position);
            if(position<=100){
                document.getElementById('resultat').innerHTML=" vous etes arrivé "+position+" eme, vous avez gagnez 1000 euros";
            }
            else if(position>100 & position<=10000){
            document.getElementById('resultat').innerHTML=" vous etes arrivé "+position+" eme, vous avez gagnez 100 euros";
            }
            else{
            document.getElementById('resultat').innerHTML="vous n'avez pas terminez la course vous etes KO";

            }

    };

    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
    

}