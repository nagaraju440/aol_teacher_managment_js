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
               

            ],
            Summary:[
                {
                    title:'Europe',
                    count:1001
                },
                {
                    title:'Europe',
                    count:1001
                },
                
            ],
            SummarybyStatus:[
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
            <h5 className='cards-heading'>Teachers Count By Region</h5>
            <div className='bb'></div>
            <div className='card-scroll'>
            {
            this.state.Region.map((l,i)=>{
                return(
            <div >
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
           <div className='card-2'>
            <div className='card-2-inner-container'>
           <h5 className='cards-heading'>Teachers Summary</h5>
           {/* <div className='cards-border'></div> */}
           <div className='bb'></div>
            {
            this.state.Summary.map((l,i)=>{
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
           <h5 className='cards-heading'>Teachers Summary by Status</h5>
           {/* <div className='cards-border'>dfgd</div> */}
           <div className='bb'></div>
            {
            this.state.SummarybyStatus.map((l,i)=>{
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