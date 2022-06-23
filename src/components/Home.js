import {NavLink} from 'react-router-dom'

function Home() {
    return(
        <div className='row'>
            <section className='column column1'>
                <h1>RESTÒ</h1>
                <div className='typing-slider'>
                    <p className='subheader'>New York City's vibrant culinary scene.</p>
                    <p className='subheader'>By and for you.</p>
                </div>
            </section>
            <section className='column column2'>               
                <NavLink exact className="button" to="/" style= { { textDecoration: 'none' }}>
                    <div className='card card1'>
                        <h5>About</h5>
                    </div>
                </NavLink>
                
                <NavLink exact className="button" to="/restaurants" style= { { textDecoration: 'none' }}>
                    <div className='card card2'>
                        <h5>Restaurants</h5>
                    </div>
                </NavLink>                
                
                <NavLink exact className="button" to="/restaurants/new" style= { { textDecoration: 'none' }}>
                    <div className='card card3'>
                        <h5>Add Restaurant</h5>
                    </div>
                </NavLink>                
            
                <NavLink exact className="button" to="/weeksresto" style= { { textDecoration: 'none' }}>
                        <div className='card card4'>
                        <h5>Restò of the Week</h5>
                    </div>
                </NavLink>
                
            </section>
        </div>
    );
}

export default Home;