import React from 'react';

function Video() {
    return (
        <div className="App">
            <header className="App-header">
                <video controls>
                    <source src="pineraaplaudan2.mp4" type="video/mp4" />
                </video>
            </header>
        </div>
    );
}

export default Video;
