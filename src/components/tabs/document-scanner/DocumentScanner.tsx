import './document-scanner.css'

export const DocumentScanner = () => {
    return (
        <div className='card'>
            <div className='tab-images'>
                <div className="animation-container">
                    <img src="/assets/images/screen-1.svg" alt="" className="phone-image animate-slide-in"/>
                </div>
            </div>
            <div className='description'>
                <span className='tab-title'>
                    Document Scanner
                </span>
                <span className='tab-head'>
                    Scan with Ease
                </span>
                <span className='tab-explain'>
                    Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.
                </span>
                <button className='tab-button'>
                    Learn More
                </button>
            </div>
        </div>
    )
}
