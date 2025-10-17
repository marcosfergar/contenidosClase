function imagenAleatoria(){
   const url = ['https://picsum.photos/200?random=1', 
        'https://picsum.photos/200?random=2', 
        'https://picsum.photos/200?random=3', 
        'https://picsum.photos/200?random=4', 
        'https://picsum.photos/200?random=5', 
        'https://picsum.photos/200?random=6', 
        'https://picsum.photos/200?random=7', 
        'https://picsum.photos/200?random=8' 
   ]
        document.getElementsByTagName("img")[0].src=url;
        //document.getElementsByTagName("img")[0].setAttribute("src",url)
}
