import React from 'react';


const Introduction = () => {
    return(
        <React.Fragment>
            <div className="col-12">
                <h1 className="display-1 text-center">Music Archive</h1>
            </div>
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 p-3">
                <div className="col-12">
                    <p className="lead text-center"> Feel free to browse our catalog. The search bar at the top of your screen is meant <br/>
                    assist you in looking for your favorite song. If for any reason you can't find the <br/>
                    song you're searching for, feel free to add it to our archive.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Introduction;