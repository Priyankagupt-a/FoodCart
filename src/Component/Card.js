const Card=(prop)=>{
    console.log(prop.resData?.name)
    return(
    <div className="card">
        
        <div className="">
            <img className=" card-img"alt="abc"
             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+prop.resData?.info?.cloudinaryImageId
             }></img>

        </div>
            <h4>{prop.resData?.info?.name}</h4>
            <h5>{prop.resData?.info?.avgRating}</h5>
         <h5>{prop.resData?.info.costForTwo}</h5>
         <h5>{prop.resData?.info?.costForTwo}</h5>
         <h5>{prop.resData?.info?.cuisines}</h5> 
    </div>
)}
export default Card;