

const PDFHandler = (fname) =>{

    console.log("PDF handler called for file ",fname);
}
const JPGHandler = (fname) =>{

    console.log("JPG handler called for file ",fname);
}
const PNGHandler = (fname) =>{

    console.log("PNG handler called for file ",fname);
}


const uploadFile = (file,cb)=>{

    console.log("upload file...")
    console.log("file name = ",file);
    //file handle... 100 type...
    //if ftype == pdf ==////
    cb(file)
    

}
//if file is pdf....
uploadFile("abc.pdf",PDFHandler)
//if file is jpg....
uploadFile("abc.jpg",JPGHandler)
//if file is png....
uploadFile("abc.png",PNGHandler)