import './batch-scanning.css'
export const BatchScanning = () => {
    return (
        <div className='card'>
            <div className='tab-images'>
                <div className="animation-container">
                    <img src="/assets/images/screen-3.svg" className="phone-image animate-slide-in" alt=""/>
                    <img src="/assets/images/screen-3-3.svg" className="doc-3" alt=""/>
                    <img src="/assets/images/screen-3-2.svg" className="doc-2" alt=""/>
                    <img src="/assets/images/screen-3-1.svg" className="doc-1" alt=""/>
                </div>
            </div>
            <div className='description'>
                <span className='tab-title'>
                    BATCH SCANNING
                </span>
                <span className='tab-head'>
                    Multiple Page Scan
                </span>
                <span className='tab-explain'>
                    Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.
                </span>
                <button className='tab-button'>
                    Learn More
                </button>
            </div>
        </div>
    )
}
