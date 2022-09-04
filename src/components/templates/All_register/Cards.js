import React from 'react';
import "./Cards.css"




class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Region:[
                {
                    title:'Europe',
                    count:1001
                },
                {
                    title:'Europe',
                    count:1001
                },
                {
                    title:'Europe',
                    count:1001
                },
                {
                    title:'Europe',
                    count:1001
                },
                {
                    title:'Europe',
                    count:1001
                },
               

            ]
        }
    }
    render() {
    return (
        <div className='cards-outer-contanier'>
        <div className='cards-inner-container1'>
        <div className='cards-inner-container2'>
        <div className='Cards-Container'> 
           {/* 3 cards in a row */}
           <div className='card-1'>
           <div className='card-2-inner-container'>
            <h5>Teachers Count By Region</h5>
            <div className='bb'></div>
            {
            this.state.Region.map((l,i)=>{
                return(
            <div>
                <div className="card-content">
                <div className='cards-title'>{l.title}</div>
                <div className='cards-count'>{l.count}</div>   
                </div>
                <div className='cards-border'></div> 
                </div>
 )
})
}

            </div>
           

           </div>
           <div className='card-2'>
            <div className='card-2-inner-container'>
           <h5>Teachers Summary</h5>
           {/* <div className='cards-border'></div> */}
           <div className='bb'></div>
            {
            this.state.Region.map((l,i)=>{
                return(
            <div>
                <div className="card-content">
                <div className='cards-title'>{l.title}</div>
                <div className='cards-count'>{l.count}</div>
                </div>
                <div className='cards-border'></div> 
                </div>
 )
})
}

            

           </div>
           </div>

           <div className='card-3'>
           <div className='card-2-inner-container'>
           <h5>Teachers Summary by Status</h5>
           {/* <div className='cards-border'>dfgd</div> */}
           <div className='bb'></div>
            {
            this.state.Region.map((l,i)=>{
                return(
            <div>
                <div className="card-content">
                <div className='cards-title'>{l.title}</div>
                <div className='cards-count'>{l.count}</div>
                </div>
                <div className='cards-border'></div> 
                </div>
 )
})
}

           </div>
           </div>
        </div>
        </div>
        </div>
        </div>
        

    );
}
}

export default Cards;