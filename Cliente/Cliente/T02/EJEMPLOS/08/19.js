function dividir(a,b){
    if(b==0){
        throw new Error("Indivisible entre 0");        
    }
    return a/b;
}

try {
    dividir(5,0)
} catch (error) {
    
} finally {

}