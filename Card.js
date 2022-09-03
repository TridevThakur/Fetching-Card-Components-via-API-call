
import "./Card.css";
function Card({ data,setselectedCard }) {
  var modal = document.getElementById("myModal");

  const handleClick=()=>{
    setselectedCard(data)
    modal.style.display = "block";
  } 
  

  return (
    <div className="main" onClick={handleClick}>
    
    <div className="container">
   
      <div className="card">
    
        <div className="card__header">
        
          <img
            src={data.thumbnail.large}
            alt="card__image"
            className="card__image"
            width="500"
            height="225"
           
          />
        <div className="Info">Learn More</div>
        </div>
        <div className="card__body">
          <span className="tag tag-blue"></span>
          <span className="tag tag-brown"></span> 
          <h4>{data.title}</h4> 
          <p>
          <div className="b"><small> {data.content}</small></div> 
          </p>
        </div>
        <div className="card__footer">
          <div className="user">   
            <div className="user__info">
              <h5>{data.author.name}-</h5>
            </div>
            <div className="a"><small>{data.author.role}</small></div> 
          </div>
          <div className="user__infoo">
              <small>{data.date}</small>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Card;
