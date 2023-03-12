
function readTextFile(){
    let input = document.querySelector('input');
    let textarea = document.querySelector('textarea');
    let valDep;
    let nb_rattraper =0;
    let nb_depasser=0;
    let position=0;
    let files = input.files;
    if(files.length == 0)return;

    const file = files[0];

    let reader = new FileReader();

    
    reader.onload = (e) =>{
        const file = e.target.result;
        const lines = file.split('/r\n|\n/');
        
        // console.log(lines)

        textarea.value = lines.join('\n');
        // console.log(lines[42])
        let valF = lines.slice();
        valF=valF[0].split(/(?:\n| )+/)
        // console.log(valF)
        position += parseInt(valF[0]);
        for(var i=1; i<85;i++){
            
            if(i % 2 == 0){
                // console.log(parseInt(valF[1])+parseInt(valF[2]))
                position-=parseInt(valF[i])
            }
            else{
                position+=parseInt(valF[i])
            }
            
            }
            // nb_depasser+=parseInt(valDep)
            // console.log(nb_depasser)
            // console.log(nb_rattraper)
            // position=nb_depasser-nb_rattraper
            console.log(position)
            document.getElementById('resultat').innerHTML=position


    };

    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
    

}