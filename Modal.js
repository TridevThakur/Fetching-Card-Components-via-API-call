

function Modal({data}){
  const handleClose=()=>{    
    var modal = document.getElementById("myModal");
     
    modal.style.display = "none";
  }
  
  return <>
    <div id="myModal" class="modal">

    <div class="modal-content">
      <div><span class="close" onClick={handleClose}>&times;</span></div>
      <img src={data?.thumbnail?.large} alt="" className="model_image"/>
      <div className="card__body">
          <span className="tag tag-blue"></span>
          <span className="tag tag-brown"></span> 
          <h4>{data.title}</h4> 
          <p>
          <div className="b"><small> {data.content}</small></div> 
          </p>
          <br/>
  
        </div>
   
          
        
    </div>
   
    </div>
  </>
   
}
export default Modal;
