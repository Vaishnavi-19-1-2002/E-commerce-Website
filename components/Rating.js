import React from "react";

export default function Rating(props) {
    const {rating, numReviews} = props;
    return (
        
        <div className="rating">
            <span>
                <i className={ 
                    rating >=1 
                    ? "far fa-star" 
                    : rating>= 0.5 
                    ? 'far fa-star low-star'
                    :'far fa-star low-star' 
                    }
                ></i>
            </span>
            <span>
            <i className={ 
                    rating >=2 
                    ? "far fa-star" 
                    : rating>= 1.5 
                    ? 'far fa-star low-star'
                    :'far fa-star-o' 
                    }
                ></i>
            </span>
            <span>
            <i className={ 
                    rating >=3 
                    ? "far fa-star" 
                    : rating>= 2.5 
                    ? 'far fa-star low-star'
                    :'far fa-star-o' 
                    }
                ></i>
            </span>
            <span>
            <i className={ 
                    rating >=4 
                    ? "far fa-star" 
                    : rating>= 3.5 
                    ? 'far fa-star low-star'
                    :'far fa-star-o' 
                    }
                ></i>
            </span>
            <span>
            <i className={ 
                    rating >=5 
                    ? "far fa-star" 
                    : rating>= 4.5 
                    ? 'far fa-star low-star'
                    :'far fa-star-o' 
                    }
                ></i>
            </span>
            <span>{numReviews + ' reviews'}</span>
        </div>
    )
}