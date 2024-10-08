import React from 'react';
import useFirestore from "../hooks/useFirestore"



const ImageGrid=({setSelectedImg})=>{
    const {docs} =useFirestore("images");
    console.log(docs);
    return(
        <div className="img-grid">
            {docs && docs.map(doc =>
             <div className='img-wrap' key={doc.id} 
                whileHover={{opacity:1}}
            onClick={()=>{setSelectedImg(doc.url)}}>
                <img src={doc.url} alt="uploaded picture"/>
                </div>
                )}
        </div>
    )
}
export default ImageGrid;